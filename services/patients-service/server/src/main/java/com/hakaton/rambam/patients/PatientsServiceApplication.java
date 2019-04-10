package com.hakaton.rambam.patients;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class PatientsServiceApplication {
	
    private static final Logger log = LoggerFactory.getLogger(PatientsServiceApplication.class);
    
    public static void main(String[] args) {
        SpringApplication.run(PatientsServiceApplication.class, args);
        log.info("Hello from patients server");
    }
}