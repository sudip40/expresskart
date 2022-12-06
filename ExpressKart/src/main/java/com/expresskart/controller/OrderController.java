package com.expresskart.controller;

import java.util.ArrayList;
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

import com.expresskart.exceptions.LoginException;
import com.expresskart.exceptions.OrderException;
import com.expresskart.model.OrderDetails;
import com.expresskart.model.Orders;
import com.expresskart.model.ProductQuantity;
import com.expresskart.model.UserDTO;
import com.expresskart.service.OrderDetailsServiceImpl;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderDetailsServiceImpl odr;
	
	@CrossOrigin
	@PostMapping("/create/{key}/{tc}")
	public ResponseEntity<Orders> placeOrder(@PathVariable("key") String key,@PathVariable("tc") Integer totalcost,@RequestBody ProductQuantity pq) throws OrderException, LoginException{
		Orders od=odr.placeOrder(key,totalcost,pq);
		return new ResponseEntity<Orders>(od,HttpStatus.CREATED);
	}

	@CrossOrigin
	@GetMapping("/get/{id}/{key}")
	public ResponseEntity<Orders> getorderbyId(@PathVariable("id") Integer id,@PathVariable("key") String key) throws OrderException, LoginException{
		Orders od=odr.getorderbyId(id, key);
		return new ResponseEntity<Orders>(od,HttpStatus.FOUND);
	}

	@CrossOrigin
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Orders> deleteOrder(@PathVariable("id") Integer id) throws OrderException{
		Orders od=odr.deleteOrder(id);
		return new ResponseEntity<Orders>(od,HttpStatus.FOUND);
	}

	@CrossOrigin
	@GetMapping("/viewall")
	public ResponseEntity<List<Orders>> viewAllOrder() throws OrderException{
		List<Orders> ods=odr.viewAllOrder();
		return new ResponseEntity<List<Orders>>(ods,HttpStatus.FOUND);
	}
}
