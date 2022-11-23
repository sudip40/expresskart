package com.expresskart.service;

import java.util.List;

import javax.xml.catalog.CatalogException;

import com.expresskart.exceptions.CategoryException;
import com.expresskart.exceptions.ProductException;
import com.expresskart.exceptions.UserException;
import com.expresskart.model.Product;
import com.expresskart.model.User;

public interface UserService {

	public User addCustomer(User user) throws UserException;

	public User updateCustomer(User user) throws UserException;

	public User deleteCustomer(Integer id) throws UserException;
	
	public List<Product> viewAllProducts() throws ProductException;
	
	public List<Product> getProductByCategory(String cname) throws ProductException,CategoryException;
	
	public Product getProductByName(String name) throws ProductException;
}
