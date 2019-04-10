package com.hakaton.rambam.patients;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.hakaton.rambam.patients.patient.PatientService;
import com.hakaton.rambam.patients.models.Patient;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.File;

@Component
public class DataInitializer {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final PatientService patientService;

    @Autowired
    public DataInitializer(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostConstruct
    private void setupData() {
        try {
            CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader();
            CsvMapper mapper = new CsvMapper();
            File file = new ClassPathResource("patients.csv").getFile();
            mapper.reader(Patient.class).with(bootstrapSchema).readValues(file)
                    .readAll()
                    .stream()
                    .map(item -> (Patient)item)
                    .forEach (this.patientService::create);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
}