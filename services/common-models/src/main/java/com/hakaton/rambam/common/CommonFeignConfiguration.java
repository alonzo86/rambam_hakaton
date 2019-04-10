package com.hakaton.rambam.common;

import com.netflix.client.ClientException;
import feign.Contract;
import feign.Response;
import feign.codec.ErrorDecoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import static java.nio.charset.StandardCharsets.UTF_8;

@Configuration
public class CommonFeignConfiguration {

    @Bean
    public ErrorDecoder errorDecoder()
    {
        return new ErrorDecoder() {
            @Override
            public Exception decode(String methodKey, Response response) {
                int status = response.status();
                String responseStr = read(response);
                return new ClientException(status, responseStr);
            }
        };
    }

    @Bean
    public Contract feignContract() {
        return new Contract.Default();
    }

    public static String read(Response response) {
        try (BufferedReader buffer = new BufferedReader(new InputStreamReader(response.body().asInputStream(), UTF_8))) {
            return buffer.lines().collect(Collectors.joining("\n"));
        }
        catch(IOException ex) {
            return "";
        }
    }
}

