package com.expresskart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expresskart.exceptions.CategoryException;
import com.expresskart.model.Category;
import com.expresskart.repository.CategoryRepo;

@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryRepo cr;

	@Override
	public Category addCategory(Category category) throws CategoryException {
		Category c=cr.findByCategorytitle(category.getCategorytitle());
		if(c!=null) {
			throw new CategoryException("Category with same title present already!");
		}
		else {
			Category cat=cr.save(category);
			return cat;
		}
	}

	@Override
	public Category updateCategory(Category category) throws CategoryException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Category deleteCategory(Integer cid) throws CategoryException {
		Optional<Category> cat=cr.findById(cid);
		if(cat.isPresent()) {
			cr.delete(cat.get());
			return cat.get();
		}
		else {
			throw new CategoryException("Wrong Category ID");
		}
	}

	@Override
	public List<Category> viewAllCategories() throws CategoryException {
		List<Category> categories=cr.findAll();
		if(categories.size()>0) {
			return categories;
		}
		else {
			throw new CategoryException("There is no category to show at this time !");
		}
	}

}
