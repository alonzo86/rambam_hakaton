package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.departments.models.Department;
import com.hakaton.rambam.patients.models.Patient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientAssignmentService {

    public List<Patient> getAssignments(List<Patient> patients, List<Department> departments, List<Patient> waiting) {
        // sort patients

        DepartmentUtility departmentUtility = new DepartmentUtility();
        for (Patient patient : patients) {
            patient.setAssigndDepartment(departmentUtility.getBestDepartment(departments, waiting, patient).getName());
        }
        return patients;
    }

}

