package com.sabazaar.application;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import jakarta.persistence.Entity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;
@OpenAPIDefinition(info = @Info(title = "SA Bazaar Api's", version = "1.0", description = "E-Com by Sam & Abd"))
@ComponentScan(basePackages = {"com.sabazaar.*","com.sabazaar.auth.config.**"})
@EntityScan(basePackages = {"com.sabazaar.*","com.sabazaar.auth.**"})
@EnableJpaRepositories(basePackages = {"com.sabazaar.auth.repo.**"})
@SpringBootApplication
public class SabazaarApplication {

	public static void main(String[] args) {
		SpringApplication.run(SabazaarApplication.class, args);
	}

}
