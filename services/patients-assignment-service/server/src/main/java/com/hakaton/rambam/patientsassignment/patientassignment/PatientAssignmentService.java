package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.patients.models.Patient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientAssignmentService {

	public List<Patient> getAssignments(List<Patient> patients) {
		char[] department = {'a'};
		patients.stream().forEach(patient -> patient.setDepartment("" + department[0]++));
		return patients;
	}
}
