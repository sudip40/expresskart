package com.expresskart.service;

import com.expresskart.exceptions.LoginException;
import com.expresskart.model.CurrentUserSession;
import com.expresskart.model.LoginDTO;

public interface LoginService {
	
	public CurrentUserSession logIntoAccount(LoginDTO dto)throws LoginException;

	public CurrentUserSession logOutFromAccount(String key)throws LoginException;
	
	public CurrentUserSession checklogin(String key)throws LoginException;
    
}
