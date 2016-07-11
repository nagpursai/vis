package com.vis.rest.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vis.rest.user.model.LoginBean;
import com.vis.rest.user.model.User;
import com.vis.rest.user.repository.UserRepository;
@RestController
@RequestMapping("/user")
public class LoginController {
	@Autowired
	UserRepository userRepository;
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String doLogin(@RequestBody LoginBean login){
		User user = userRepository.findByEmailAndPassword(login.getEmail(),login.getPassword());
		
		/*if(login.getEmail().equals("toajay.info@gmail.com") && login.getPassword().equals("Kumar")){
			return "Hello "+login.getEmail();
		}else{
			return "Fail";
		}*/
	
		if(user!=null){
			System.out.println(user.getFirstName());
			return "Success";
		}
		else 
			return "Fail";
				
	}
	@RequestMapping("/test")
	public String test(){
		System.out.println("Hi Test login");
		return "Hello Vis login";
	}
}
