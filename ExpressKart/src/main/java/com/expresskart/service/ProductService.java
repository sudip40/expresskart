package com.expresskart.service;

import java.util.List;

import com.expresskart.exceptions.ProductException;
import com.expresskart.model.Product;

public interface ProductService {
	public Product addProduct(Integer id,Product product) throws ProductException;

	public Product updateProduct(Product product) throws ProductException;

	public Product deleteProduct(Integer pid) throws ProductException;
	
	public List<Product> viewAllProduct() throws ProductException;
	
	public Product viewByProductName(String name) throws ProductException;
}
