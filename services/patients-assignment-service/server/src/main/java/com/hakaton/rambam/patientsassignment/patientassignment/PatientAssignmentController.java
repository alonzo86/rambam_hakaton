package com.hakaton.rambam.patientsassignment.patientassignment;

import com.hakaton.rambam.patients.models.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PatientAssignmentController {

    private final PatientAssignmentService patientAssignmentService;

    @Autowired
    PatientAssignmentController(PatientAssignmentService patientAssignmentService) {
        this.patientAssignmentService = patientAssignmentService;
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/assignments", produces = {"application/json"}, consumes = {"application/json"}, method = RequestMethod.POST)
    ResponseEntity<List<Patient>> assignments(@RequestBody PatientAssignmentReq req) {
        List<Patient> assignments = this.patientAssignmentService.getAssignments(req.getPatients(), req.getDepartments(), req.getWaiting());
        return new ResponseEntity<>(assignments, HttpStatus.OK);
    }
}
