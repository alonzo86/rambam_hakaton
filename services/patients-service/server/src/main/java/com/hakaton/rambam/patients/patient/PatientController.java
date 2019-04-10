package com.hakaton.rambam.patients.patient;

import java.util.List;

import com.hakaton.rambam.common.controllers.GenericScrudController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hakaton.rambam.patients.models.Patient;

@RestController
public class PatientController extends GenericScrudController<Patient, PatientService> {

    @Autowired
    PatientController(PatientService patientService){
        super(patientService);
    }

    @Override
    @RequestMapping(value = "/patient", produces = { "application/json" }, consumes = { "application/json" }, method = RequestMethod.POST)
    public ResponseEntity<Patient> create(@RequestBody Patient patient) {
        return super.create(patient);
    }

    @Override
    @RequestMapping(value = "/patient/{id}", produces = { "application/json" }, method = RequestMethod.DELETE)
    public ResponseEntity<Patient> delete(@PathVariable("id") long id) {
        return super.delete(id);
    }

    @Override
    @RequestMapping(value = "/patient/{id}", produces = { "application/json" }, method = RequestMethod.GET)
    public ResponseEntity<Patient> read(@PathVariable("id") long id) {
        return super.read(id);
    }

    @Override
    @RequestMapping(value = "/patient/{id}", produces = { "application/json" }, consumes = { "application/json" }, method = RequestMethod.PUT)
    public ResponseEntity<Patient> update(@PathVariable("id") long id, @RequestBody Patient patient) {
        return super.update(id, patient);
    }

    @Override
    @RequestMapping(value = "/patient/search", produces = { "application/json" }, method = RequestMethod.POST)
    public ResponseEntity<List<Patient>> search(@RequestBody Patient searchCriteria) {
        return super.search(searchCriteria);
    }

    @Override
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/patient/all", produces = { "application/json" }, method = RequestMethod.GET)
    public ResponseEntity<List<Patient>> all() {
        return super.all();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/patient/refresh", produces = { "application/json" }, method = RequestMethod.GET)
    public ResponseEntity refresh() {
        this.service.refresh();
        return this.all();
    }
}
