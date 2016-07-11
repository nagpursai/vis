package com.vis.rest.user.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vis.rest.user.model.User;

@RestController
@RequestMapping("/user")

public class UserController {
	@RequestMapping("/test")
	public String test(){
		System.out.println("Hi Test");
		return "Hello Vis";
	}
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public User registerUser(@RequestBody User user){
		//To save data in to database.
		System.out.println(user.getFirstName()+"  "+user.getEmail());
		return user;
	}
}
