package com.vis.rest;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
public class WebSecurityConfig extends WebMvcConfigurerAdapter {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("*")
			.allowedMethods("GET","POST","PUT", "DELETE","OPTIONS")
			.allowedHeaders("X-Requested-With", "Content-Type","Accept", "Authorization", "X-Codingpedia")
			//.exposedHeaders("header1", "header2")
			.allowCredentials(false).maxAge(3600);
	}
}