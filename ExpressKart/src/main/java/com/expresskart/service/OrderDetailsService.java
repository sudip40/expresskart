package com.expresskart.service;

import java.util.ArrayList;
import java.util.List;

import com.expresskart.exceptions.LoginException;
import com.expresskart.exceptions.OrderException;
import com.expresskart.model.OrderDetails;
import com.expresskart.model.UserDTO;

public interface OrderDetailsService {
	public OrderDetails placeOrder(ArrayList<UserDTO> udto, String key) throws OrderException, LoginException;

	public OrderDetails getorderbyId(Integer id, String key) throws OrderException, LoginException;

	public OrderDetails deleteOrder(Integer id) throws OrderException;

	public List<OrderDetails> viewAllOrder() throws OrderException;
}
