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

import com.expresskart.exceptions.CategoryException;
import com.expresskart.model.Category;
import com.expresskart.service.CategoryServiceImpl;

@RestController
@RequestMapping("/category")
public class CategoryController {
	@Autowired
	private CategoryServiceImpl cs;

	@CrossOrigin
	@PostMapping("/addcategory")
	public ResponseEntity<Category> addCategory(@RequestBody Category category) throws CategoryException {
      Category c=cs.addCategory(category);
      return new ResponseEntity<Category>(c,HttpStatus.ACCEPTED);
	}

	@CrossOrigin
	@PostMapping("/updatecategory")
	public Category updateCategory(Category category) throws CategoryException {
		return category;

	}

	@CrossOrigin
	@DeleteMapping("/deletecategory/{id}")
	public ResponseEntity<Category> deleteCategory(@PathVariable("id") Integer cid) throws CategoryException {
		Category c=cs.deleteCategory(cid);
		return new ResponseEntity<Category>(c,HttpStatus.ACCEPTED);
	}

	@CrossOrigin
	@GetMapping("/viewallcategory")
	public ResponseEntity<List<Category>> viewAllCategories() throws CategoryException {
		List<Category> categories=cs.viewAllCategories();
		return new ResponseEntity<List<Category>>(categories,HttpStatus.FOUND);
	}
}
