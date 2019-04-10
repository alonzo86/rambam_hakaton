
package com.hakaton.rambam.gateway;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.hakaton.rambam.common.CommonFeignConfiguration;

@EnableZuulProxy
@EnableDiscoveryClient
@SpringBootApplication
@ComponentScan("com.hakaton.rambam")
@EnableFeignClients(basePackages = "com.hakaton.rambam", defaultConfiguration = CommonFeignConfiguration.class)
public class GatewayServiceApplication {
	
    private static final Logger log = LoggerFactory.getLogger(GatewayServiceApplication.class);
    
    public static void main(String[] args) {
        SpringApplication.run(GatewayServiceApplication.class, args);
        log.info("Hello from Gateway service");
    }
}