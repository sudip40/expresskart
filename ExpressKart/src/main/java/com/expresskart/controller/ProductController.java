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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expresskart.exceptions.ProductException;
import com.expresskart.model.Product;
import com.expresskart.service.ProductServiceImpl;

@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductServiceImpl psi;
	
	@PostMapping("/addproduct/{id}")
	@CrossOrigin
	public ResponseEntity<Product> addProduct(@PathVariable("id") Integer id,@RequestBody Product product) throws ProductException{
	Product p= psi.addProduct(id,product);
	return new ResponseEntity<Product>(p,HttpStatus.ACCEPTED);
	}

	public ResponseEntity<Product> updateProduct(Product product) throws ProductException{
		return null;
		
	}
    
	@DeleteMapping("/deleteproduct/{id}")
	@CrossOrigin
	public ResponseEntity<Product> deleteProduct(@PathVariable("id") Integer pid) throws ProductException{
		Product p=psi.deleteProduct(pid);
		return new ResponseEntity<Product>(p,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/viewallproduct")
	@CrossOrigin
	public ResponseEntity<List<Product>> viewAllProduct() throws ProductException{
		List<Product> list=psi.viewAllProduct();
		return new ResponseEntity<List<Product>>(list,HttpStatus.FOUND);
		
	}
	@GetMapping("/viewproductbyname/{name}")
	@CrossOrigin
	public ResponseEntity<Product> viewByProductName(@PathVariable("name") String name) throws ProductException{
		Product p=psi.viewByProductName(name);
		return new ResponseEntity<Product>(p,HttpStatus.FOUND);
		
	}
}
