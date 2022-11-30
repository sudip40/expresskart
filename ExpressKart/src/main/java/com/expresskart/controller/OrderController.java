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
import com.expresskart.model.UserDTO;
import com.expresskart.service.OrderDetailsServiceImpl;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderDetailsServiceImpl odr;
	
	@CrossOrigin
	@PostMapping("/create/{key}")
	public ResponseEntity<OrderDetails> placeOrder(@RequestBody ArrayList<UserDTO> udto,@PathVariable("key") String key) throws OrderException, LoginException{
		OrderDetails od=odr.placeOrder(udto, key);
		return new ResponseEntity<OrderDetails>(od,HttpStatus.CREATED);
	}

	@CrossOrigin
	@GetMapping("/get/{id}/{key}")
	public ResponseEntity<OrderDetails> getorderbyId(@PathVariable("id") Integer id,@PathVariable("key") String key) throws OrderException, LoginException{
		OrderDetails od=odr.getorderbyId(id, key);
		return new ResponseEntity<OrderDetails>(od,HttpStatus.FOUND);
	}

	@CrossOrigin
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<OrderDetails> deleteOrder(@PathVariable("id") Integer id) throws OrderException{
		OrderDetails od=odr.deleteOrder(id);
		return new ResponseEntity<OrderDetails>(od,HttpStatus.FOUND);
	}

	@CrossOrigin
	@GetMapping("/viewall")
	public ResponseEntity<List<OrderDetails>> viewAllOrder() throws OrderException{
		List<OrderDetails> ods=odr.viewAllOrder();
		return new ResponseEntity<List<OrderDetails>>(ods,HttpStatus.FOUND);
	}
}
