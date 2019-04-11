package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.departments.models.Department;
import com.hakaton.rambam.patients.models.Patient;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class PatientAssignmentService {

    public List<Patient> getAssignments(List<Patient> patients, List<Department> departments, List<Patient> waiting) {
        // sort patients
        Collections.sort(patients, new PatientComperator());

        DepartmentUtility departmentUtility = new DepartmentUtility();
        for (Patient patient : patients) {
            if (patient.isReturningPatient() && patient.getWaitingTime() < 12) {
                patient.setAssigndDepartment(patient.getPreviousReleasingDepartment());
            } else {
                patient.setAssigndDepartment(departmentUtility.getBestDepartment(departments, waiting, patient).getName());
            }
            waiting.add(patient);
        }
        return patients;
    }

}

