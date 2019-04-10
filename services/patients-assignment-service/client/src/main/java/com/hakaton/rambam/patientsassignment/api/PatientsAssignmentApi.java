package com.hakaton.rambam.patientsassignment.api;

import feign.Headers;
import feign.Param;
import feign.RequestLine;
import java.util.List;
import java.util.UUID;

import org.springframework.cloud.netflix.feign.FeignClient;

import com.hakaton.rambam.patients.models.Patient;

@FeignClient("hakaton-rambam-patients-assignment-server")
public interface PatientsAssignmentApi {
    @RequestLine("POST /assignments")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    List<Patient> assignments(List<Patient> patient);
}

