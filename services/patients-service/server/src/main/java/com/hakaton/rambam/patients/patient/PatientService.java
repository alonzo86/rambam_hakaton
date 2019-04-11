package com.hakaton.rambam.patients.patient;

import com.hakaton.rambam.common.services.GenericResourceService;
import com.hakaton.rambam.patients.DataInitializer;
import com.hakaton.rambam.patients.models.Patient;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService extends GenericResourceService<Patient, PatientRepository> {

	private int currentIndex = 1;

  	public PatientService(PatientRepository repository) {
		super(repository);
	}

	public void refresh() {
		List<Patient> currPatients = this.all();
		DataInitializer.getDataFromCsv("patients" + currentIndex + ".csv")
				.forEach(patient -> {
					Optional<Patient> existing = currPatients.stream()
							.filter(p -> p.getId() == patient.getId())
							.findFirst();
					if(!existing.isPresent()) {
						this.create(patient);
						return;
					}
					patient.setDepartment(existing.get().getDepartment());
					this.update(patient);
				});
		currentIndex = (currentIndex + 1) % 7;
	}
}
