package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.departments.models.Department;
import com.hakaton.rambam.patients.models.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PatientAssignmentController {

    private final PatientAssignmentService patientAssignmentService;

    @Autowired
    PatientAssignmentController(PatientAssignmentService patientAssignmentService) {
        this.patientAssignmentService = patientAssignmentService;
    }

    @RequestMapping(value = "/assignments", produces = {"application/json"}, consumes = {"application/json"}, method = RequestMethod.POST)
    ResponseEntity<List<Patient>> assignments(@RequestBody List<Patient> patients, @RequestBody List<Department> departments,
                                              @RequestBody List<Patient> waiting) {

        List<Patient> assignments = this.patientAssignmentService.getAssignments(patients, departments, waiting);
        return new ResponseEntity<>(assignments, HttpStatus.OK);
    }
}
