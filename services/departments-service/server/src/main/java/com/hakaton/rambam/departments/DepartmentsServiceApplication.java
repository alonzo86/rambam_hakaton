package com.hakaton.rambam.departments;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class DepartmentsServiceApplication {
	
    private static final Logger log = LoggerFactory.getLogger(DepartmentsServiceApplication.class);
    
    public static void main(String[] args) {
        SpringApplication.run(DepartmentsServiceApplication.class, args);
        log.info("Hello from departments server");
    }
}