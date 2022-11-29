package com.expresskart.service;

import com.expresskart.exceptions.LoginException;
import com.expresskart.model.CurrentUserSession;
import com.expresskart.model.LoginDTO;

public interface LoginService {
	
	public CurrentUserSession logIntoAccount(LoginDTO dto)throws LoginException;

	public String logOutFromAccount(String key)throws LoginException;
    
}
