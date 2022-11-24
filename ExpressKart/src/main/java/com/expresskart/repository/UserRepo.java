package com.expresskart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.expresskart.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	public User findByUseremail(String useremail);
}
