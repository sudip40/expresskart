package com.expresskart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expresskart.exceptions.ProductException;
import com.expresskart.model.Category;
import com.expresskart.model.Product;
import com.expresskart.repository.CategoryRepo;
import com.expresskart.repository.ProductRepo;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepo pr;
	
	@Autowired
	private CategoryRepo cr;
	
	@Override
	public Product addProduct(Integer id,Product product) throws ProductException {
		Product prdct=pr.findByPname(product.getPname());
		if(prdct!=null) {
			throw new ProductException("Product with same name already present!");
		}
		else {
			Optional<Category> cat=cr.findById(id);
			if(cat.isPresent()) {
			product.setCategory(cat.get());
			Product p= pr.save(product);
			return p;
			}
			else {
				throw new ProductException("Product can not be added, Category is not present");
			}
		}
	}

	@Override
	public Product updateProduct(Product product) throws ProductException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product deleteProduct(Integer pid) throws ProductException {
		Optional<Product> p=pr.findById(pid);
		if(p.isPresent()) {
			pr.delete(p.get());
			return p.get();
		}
		else {
			throw new ProductException("There is no product with id "+pid);
		}
	}

	@Override
	public List<Product> viewAllProduct() throws ProductException {
		List<Product> products=pr.findAll();
		if(products.size()>0) {
			return products;
		}
		else {
			throw new ProductException("No product available to display");
		}
	}

	@Override
	public Product viewByProductName(String name) throws ProductException {
		Product p=pr.findByPname(name);
		if(p!=null) {
			return p;
		}
		else {
			throw new ProductException("There is no product with name "+name);
		}
	}

}
