package com.hakaton.rambam.patients.patient;

import com.hakaton.rambam.common.services.GenericResourceService;
import com.hakaton.rambam.patients.models.Patient;
import org.springframework.stereotype.Service;

@Service
public class PatientService extends GenericResourceService<Patient, PatientRepository> {

  public PatientService(PatientRepository repository) {
		super(repository);
	}
}
