package com.expresskart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expresskart.model.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer>{

	public Category findByCategoryTitle(String categoryTitle);
}
