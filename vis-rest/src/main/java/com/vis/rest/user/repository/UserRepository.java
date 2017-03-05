package com.vis.rest.user.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.vis.rest.user.model.User;

public interface UserRepository extends CrudRepository<User, Long>{
	 User findByEmail(String email);
	 User findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
	 List<User> findAll();
	 long count();
	 //Long deleteByFirstName(String name);
	 void delete(Long id);
	 
	// User findOne(ID id);
	 //Custome query
	/* @Query("SELECT u FROM User u where email = ?1 and password = ?2")
	 User getUserDetails(String email, String password);*/
}
