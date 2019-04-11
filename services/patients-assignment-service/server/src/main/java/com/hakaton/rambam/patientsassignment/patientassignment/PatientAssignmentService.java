package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.departments.models.Department;
import com.hakaton.rambam.patients.models.Patient;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientAssignmentService {

    public List<Patient> getAssignments(List<Patient> patientsToAssign, List<Department> departments, List<Patient> allPatients) {
        // sort patients
        patientsToAssign.sort(new PatientComparator());

        DepartmentUtility departmentUtility = new DepartmentUtility();
        for (Patient patient : patientsToAssign) {
            if (patient.isReturningPatient() && patient.getWaitingTime() < 12) {
                patient.setAssigndDepartment(patient.getPreviousReleasingDepartment());
            } else {
                List<Patient> assignedPatients = allPatients.stream().filter(currPatient -> {
                    if (!StringUtils.isEmpty(currPatient.getAssigndDepartment())) {
                        return true;
                    }
                    return false;
                }).collect(Collectors.toList());
                patient.setAssigndDepartment(departmentUtility.getBestDepartment(departments, assignedPatients, patient).getName());
            }
        }
        return patientsToAssign;
    }

}

