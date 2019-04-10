package com.hakaton.rambam.patients.patient;

import org.springframework.stereotype.Repository;

import com.hakaton.rambam.common.interfaces.GenericCrudRepository;
import com.hakaton.rambam.patients.models.Patient;

@Repository
public interface PatientRepository extends GenericCrudRepository<Patient> {
	
}
