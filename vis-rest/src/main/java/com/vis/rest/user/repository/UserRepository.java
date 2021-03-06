package com.vis.rest.user.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.vis.rest.user.model.User;

public interface UserRepository extends CrudRepository<User, Long>{
	 User findByEmail(String email);
	 User findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
