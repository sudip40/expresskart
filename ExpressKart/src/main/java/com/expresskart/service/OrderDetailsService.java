package com.expresskart.service;

import java.util.ArrayList;
import java.util.List;

import com.expresskart.exceptions.LoginException;
import com.expresskart.exceptions.OrderException;
import com.expresskart.model.OrderDetails;
import com.expresskart.model.Orders;
import com.expresskart.model.ProductQuantity;
import com.expresskart.model.UserDTO;

public interface OrderDetailsService {
	public Orders placeOrder(String key,Integer totalcost,ProductQuantity pq) throws OrderException, LoginException;

	public Orders getorderbyId(Integer id, String key) throws OrderException, LoginException;

	public Orders deleteOrder(Integer id) throws OrderException;

	public List<Orders> viewAllOrder() throws OrderException;
}
