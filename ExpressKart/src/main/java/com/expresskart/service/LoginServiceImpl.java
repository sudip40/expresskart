package com.expresskart.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expresskart.exceptions.LoginException;
import com.expresskart.model.CurrentUserSession;
import com.expresskart.model.LoginDTO;
import com.expresskart.model.User;
import com.expresskart.repository.SessionDao;
import com.expresskart.repository.UserRepo;

import net.bytebuddy.utility.RandomString;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private UserRepo ur;

	@Autowired
	private SessionDao sd;

	@Override
	public CurrentUserSession logIntoAccount(LoginDTO dto) throws LoginException {
		
		User u = ur.findByUseremail(dto.getUseremail());
		
		if (u != null){
			if(dto.getUserpassword().equals(u.getUserpassword())) {
			String key = RandomString.make(6);

			CurrentUserSession currentUserSession = new CurrentUserSession(u.getUserid(), key, dto.getUseremail(), LocalDateTime.now());
            sd.save(currentUserSession);
			return currentUserSession;
			}
			else {
				throw new LoginException("Wrong Password!");
			}
		}
		else {
			throw new LoginException("Wrong Email!");
		}
	
	}

	@Override
	public String logOutFromAccount(String key) throws LoginException {
		CurrentUserSession validCustomerSession = sd.findByUuid(key);

		if (validCustomerSession == null) {
			throw new LoginException("User Not Logged In with this User name");

		}

		sd.delete(validCustomerSession);

		return "Logged Out !";
	}

}
