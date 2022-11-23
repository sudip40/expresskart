package com.expresskart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expresskart.exceptions.CategoryException;
import com.expresskart.exceptions.ProductException;
import com.expresskart.exceptions.UserException;
import com.expresskart.model.Category;
import com.expresskart.model.Product;
import com.expresskart.model.User;
import com.expresskart.repository.CategoryRepo;
import com.expresskart.repository.ProductRepo;
import com.expresskart.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo ur;

	@Autowired
	private ProductRepo pr;

	@Autowired
	private CategoryRepo cr;

	@Override
	public User addCustomer(User user) throws UserException {
		User us = ur.save(user);
		if (us != null) {
			return us;
		} else {
			throw new UserException("User can not be added");
		}
	}

	@Override
	public User updateCustomer(User user) throws UserException {
		User us = ur.save(user);
		if (us != null) {
			return us;
		} else {
			throw new UserException("Invalid user details");
		}
	}

	@Override
	public User deleteCustomer(Integer id) throws UserException {
		Optional<User> us = ur.findById(id);
		if (us.isPresent()) {
			ur.delete(us.get());
			return us.get();
		} else {
			throw new UserException("Invalid user details");
		}
	}

	@Override
	public List<Product> viewAllProducts() throws ProductException {
		List<Product> products = pr.findAll();
		if (products.size() > 0) {
			return products;
		} else {
			throw new ProductException("There is no product to be shown");
		}
	}

	@Override
	public List<Product> getProductByCategory(String cname) throws ProductException,CategoryException{
		Category c=cr.findByCategoryTitle(cname);
		if(c!=null) {
			List<Product> products=pr.findByCategory(c);
			if(products.size()>0) {
				return products;
			}
			else {
				throw new ProductException("There is no product to be shown");
			}
		}
		else {
			throw new CategoryException("Category does not exists");
		}
	}

	@Override
	public Product getProductByName(String name) throws ProductException {
		Product p = pr.findByPName(name);
		if (p != null) {
			return p;
		} else {
			throw new ProductException("Product does not exists");
		}
	}

}
