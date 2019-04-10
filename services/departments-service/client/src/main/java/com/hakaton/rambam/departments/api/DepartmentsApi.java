package com.hakaton.rambam.departments.api;

import feign.Headers;
import feign.Param;
import feign.RequestLine;
import java.util.List;
import java.util.UUID;

import org.springframework.cloud.netflix.feign.FeignClient;

import com.hakaton.rambam.departments.models.Department;

@FeignClient("hakaton-rambam-departments-server")
public interface DepartmentsApi {
    @RequestLine("POST /department")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    Department create(Department department);

    @RequestLine("DELETE /department/{id}")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    Department delete(@Param("id") UUID id);

    @RequestLine("GET /department/{id}")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    Department read(@Param("id") UUID id);

    @RequestLine("POST /department/search")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    List<Department> search(Department department);

    @RequestLine("PUT /department/{id}")
    @Headers({"Content-type: application/json", "Accept: application/json"})
    Department update(@Param("id") UUID id, Department department);
}

