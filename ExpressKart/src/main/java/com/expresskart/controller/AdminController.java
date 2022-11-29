package com.expresskart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expresskart.exceptions.UserException;
import com.expresskart.model.AdminDTO;
import com.expresskart.service.AdminServiceImpl;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminServiceImpl asi;
	
	@PostMapping("/login")
	@CrossOrigin
	public ResponseEntity<AdminDTO> adminLogin(@RequestBody AdminDTO adto) throws UserException{
		AdminDTO adt= asi.adminLogin(adto);
		return new ResponseEntity<AdminDTO>(adt,HttpStatus.OK);
	}
}
