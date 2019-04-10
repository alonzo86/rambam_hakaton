package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.departments.models.Department;
import com.hakaton.rambam.patients.models.Patient;
import org.springframework.stereotype.Service;

import java.util.Dictionary;
import java.util.List;

@Service
public class PatientAssignmentService {

	public List<Patient> getAssignments(List<Patient> patients, List<Department> departments) {
		// sort patients
		// foreach patient assign department
		// return result
		char[] department = {'a'};
		patients.stream().forEach(patient -> patient.setDepartment("" + department[0]++));
		return patients;
	}

	private int /*todo change return type*/ sortDepartment(List<Department> departments) {
		//Dictionary<>
		return 0;
	}
}

