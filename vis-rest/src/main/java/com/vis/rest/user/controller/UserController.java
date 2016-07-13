package com.vis.rest.user.controller;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vis.rest.user.model.User;
import com.vis.rest.user.repository.UserRepository;

@RestController
@RequestMapping("/user")

public class UserController {
	@Autowired
	UserRepository userRepository;
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public User registerUser(@RequestBody User user){
		//To save data in to database.
		System.out.println(user.getFirstName()+"  "+user.getEmail());
		return user;
	}
	@RequestMapping(value = "/getUser/{email}", method = RequestMethod.GET)
	public ResponseEntity<User> getUser(@PathVariable String email){
		//To save data in to database.
		/*System.out.println("FirstName:"+firstName);
		User user = new User();
		user.setEmail("toajay.info@gmail.com");
		user.setFirstName("Ajay");
		user.setLastName("KUmar");*/
		User user = userRepository.findByEmail(email);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	@RequestMapping(value = "/getAllUser", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getAllUser(){
		//To save data in to database.
		/*List<User> userList = new ArrayList<User>();
		User user = new User();
		user.setEmail("toajay.info@gmail.com");
		user.setFirstName("Ajay");
		user.setLastName("KUmar");
		userList.add(user);
		User user1 = new User();
		user1.setEmail("ajay.info@gmail.com");
		user1.setFirstName("Ajay");
		user1.setLastName("KUmar");
		userList.add(user1);*/
		List<User> userList = userRepository.findAll();
		return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
	}
}
