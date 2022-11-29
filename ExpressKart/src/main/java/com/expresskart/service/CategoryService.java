package com.expresskart.service;

import java.util.List;

import com.expresskart.exceptions.CategoryException;
import com.expresskart.model.Category;

public interface CategoryService {
	public Category addCategory(Category category) throws CategoryException;

	public Category updateCategory(Category category) throws CategoryException;

	public Category deleteCategory(Integer cid) throws CategoryException;
	
	public List<Category> viewAllCategories() throws CategoryException;
}
