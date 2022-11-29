package com.expresskart.service;

import com.expresskart.exceptions.UserException;
import com.expresskart.model.AdminDTO;

public interface AdminService {
 public AdminDTO adminLogin(AdminDTO adto) throws UserException;
}
