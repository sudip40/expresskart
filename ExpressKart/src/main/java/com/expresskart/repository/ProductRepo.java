package com.expresskart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expresskart.model.Category;
import com.expresskart.model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer>{

	public Product findByPname(String pname);
	
	public List<Product> findByCategory(Category category);
}
