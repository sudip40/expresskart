package com.expresskart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expresskart.model.CurrentUserSession;

public interface SessionDao extends JpaRepository<CurrentUserSession, Integer> {

	
	public  CurrentUserSession  findByUuid(String uuid);
	
}
