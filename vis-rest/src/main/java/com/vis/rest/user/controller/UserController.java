package com.vis.rest.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vis.rest.user.model.LoginBean;
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
	/**
	 * 
	 * @param email
	 * @return
	 */
	@RequestMapping(value = "/getUser", method = RequestMethod.GET)
	public ResponseEntity<User> getUser(@RequestParam(value = "email", required = true) String email){
	
		User user = userRepository.findByEmail(email);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	/**
	 * This method is used for to get the all user list waht count
	 * @return
	 */
	@RequestMapping(value = "/getAllUser", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getAllUser(){
	
		List<User> userList = userRepository.findAll();
		long count = userRepository.count();
		System.out.println(count);
		return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
	}
	/**
	 * 
	 * @param login
	 * @return
	 */
	/*@RequestMapping(value = "/getUserDetails", method = RequestMethod.POST)
	public ResponseEntity<User> getAllUser(@RequestBody LoginBean login){
		User user = userRepository.getUserDetails(login.getEmail(), login.getPassword());
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}*/
}
