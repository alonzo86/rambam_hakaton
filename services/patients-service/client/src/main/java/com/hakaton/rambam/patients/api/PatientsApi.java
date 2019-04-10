package com.hakaton.rambam.patients.api;

import feign.Headers;
import feign.Param;
import feign.RequestLine;
import java.util.List;
import java.util.UUID;

import org.springframework.cloud.netflix.feign.FeignClient;

import com.hakaton.rambam.patients.models.Patient;

@FeignClient("hakaton-rambam-patients-server")
public interface PatientsApi {
    @RequestLine("POST /patient")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    Patient create(Patient patient);

    @RequestLine("DELETE /patient/{id}")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    Patient delete(@Param("id") UUID id);

    @RequestLine("GET /patient/{id}")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    Patient read(@Param("id") UUID id);

    @RequestLine("POST /patient/search")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    List<Patient> search(Patient patient);

    @RequestLine("PUT /patient/{id}")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    Patient update(@Param("id") UUID id, Patient patient);
}

