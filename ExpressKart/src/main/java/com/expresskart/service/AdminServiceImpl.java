package com.expresskart.service;

import org.springframework.stereotype.Service;

import com.expresskart.exceptions.UserException;
import com.expresskart.model.AdminDTO;

@Service
public class AdminServiceImpl implements AdminService{

	@Override
	public AdminDTO adminLogin(AdminDTO adto) throws UserException{
		if(adto.getEmail().equals("admin@gmail.com") && adto.getPassword().equals("Admin1234") && adto.getAdminid().equals("Adminid1234")) {
			return adto;
		}
		else {
			throw new UserException("You are not an Admin");
		}
	}

}
