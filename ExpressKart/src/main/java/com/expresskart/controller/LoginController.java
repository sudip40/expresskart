package com.expresskart.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.expresskart.exceptions.LoginException;
import com.expresskart.model.CurrentUserSession;
import com.expresskart.model.LoginDTO;
import com.expresskart.service.LoginService;

@RestController
@RequestMapping("/user")
public class LoginController {

	@Autowired
	private LoginService customerLogin;
	
	@CrossOrigin
	@PostMapping("/login")
	public ResponseEntity<CurrentUserSession> logInCustomer(@RequestBody LoginDTO dto) throws LoginException {
		
		CurrentUserSession cus = customerLogin.logIntoAccount(dto);
	
		return new ResponseEntity<CurrentUserSession>(cus,HttpStatus.FOUND);
		
		
	}
	
	@CrossOrigin
	@PostMapping("/logout")
	public String logoutCustomer(@RequestParam(required = false) String key) throws LoginException {
		return customerLogin.logOutFromAccount(key);
	}
	
	
	
}
