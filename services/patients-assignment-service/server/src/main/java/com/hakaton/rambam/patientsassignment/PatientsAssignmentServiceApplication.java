package com.hakaton.rambam.patientsassignment;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class PatientsAssignmentServiceApplication {
	
    private static final Logger log = LoggerFactory.getLogger(PatientsAssignmentServiceApplication.class);
    
    public static void main(String[] args) {
        SpringApplication.run(PatientsAssignmentServiceApplication.class, args);
        log.info("Hello from patients assignment server");
    }
}