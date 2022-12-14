package com.expresskart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expresskart.exceptions.CategoryException;
import com.expresskart.exceptions.ProductException;
import com.expresskart.exceptions.UserException;
import com.expresskart.model.Product;
import com.expresskart.model.User;
import com.expresskart.service.UserService;
import com.expresskart.service.UserServiceImpl;

@RestController
@RequestMapping("/user")
public class UserController {
    
	@Autowired
	private UserServiceImpl us;
	
	@CrossOrigin
	@PostMapping("/register")
	public ResponseEntity<User> addCustomer(@RequestBody User user) throws UserException{
		User u=us.addCustomer(user);
		return new ResponseEntity<User>(u,HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@PutMapping("/update")
	public ResponseEntity<User> updateCustomer(@RequestBody User user) throws UserException{
		User u=us.updateCustomer(user);
		return new ResponseEntity<User>(u,HttpStatus.ACCEPTED);
	}
	
	@CrossOrigin
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<User> deleteCustomer(@PathVariable("id") Integer id) throws UserException{
		User u=us.deleteCustomer(id);
		return new ResponseEntity<User>(u,HttpStatus.ACCEPTED);
	}
	
	@CrossOrigin
	@GetMapping("/viewall")
	public ResponseEntity<List<Product>> viewAllProducts() throws ProductException{
		List<Product> products=us.viewAllProducts();
		return new ResponseEntity<List<Product>>(products,HttpStatus.FOUND);
	}
	
	@CrossOrigin
	@GetMapping("/viewbycategory/{cname}")
	public ResponseEntity<List<Product>> getProductByCategory(@PathVariable("cname") String cname) throws ProductException,CategoryException{
		List<Product> products=us.getProductByCategory(cname);
		return new ResponseEntity<List<Product>>(products,HttpStatus.FOUND);
	}
	
	@CrossOrigin
	@GetMapping("/viewbyname/{name}")
	public ResponseEntity<Product> getProductByName(@PathVariable("name") String name) throws ProductException{
		Product p=us.getProductByName(name);
		return new ResponseEntity<Product>(p,HttpStatus.FOUND);
	}
	
	@CrossOrigin
	@GetMapping("/viewallusers")
	public ResponseEntity<List<User>> viewAllUser() throws UserException{
		List<User> users=us.viewAllUser();
		return new ResponseEntity<List<User>>(users,HttpStatus.FOUND);
	}
}
