package com.expresskart.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expresskart.exceptions.LoginException;
import com.expresskart.exceptions.OrderException;
import com.expresskart.model.CurrentUserSession;
import com.expresskart.model.OrderDetails;
import com.expresskart.model.Product;
import com.expresskart.model.User;
import com.expresskart.model.UserDTO;
import com.expresskart.repository.OrderDetailsRepo;
import com.expresskart.repository.ProductRepo;
import com.expresskart.repository.SessionDao;
import com.expresskart.repository.UserRepo;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService{

	@Autowired
	private OrderDetailsRepo odr;
	
	@Autowired
	private UserRepo ur;
	
	@Autowired
	private ProductRepo pr;
	
	@Autowired
	private SessionDao sd;
	
	@Override
	public OrderDetails placeOrder(ArrayList<UserDTO> udto, String key) throws OrderException, LoginException {
		CurrentUserSession validCustomerSession = sd.findByUuid(key);

		if (validCustomerSession == null) {

			throw new LoginException("Please login first");

		}
		else {
		OrderDetails od=new OrderDetails();
		User usr=ur.findByUseremail(validCustomerSession.getEmail());
		int total=0;
		int tq=0;
		for(UserDTO u:udto) {
			Product p=pr.findByPname(u.getProductName());
			p.setPquantity(p.getPquantity()-u.getProductQty());
			pr.save(p);
			total=total+(p.getPprice()-(p.getPprice()*p.getPdiscount()/100))*u.getProductQty();
			tq=tq+u.getProductQty();
		}
		od.setCustomer(usr);
		od.setOrderDate(LocalDate.now());
		od.setQuantity(tq);
		od.setTotalCost(total);
		OrderDetails ods= odr.save(od);
		if(ods!=null) {
			return ods;
		}
		else {
			throw new OrderException("Order not placed succesfully");
		}
		}
	}

	@Override
	public OrderDetails getorderbyId(Integer id, String key) throws OrderException, LoginException {
		Optional<OrderDetails> od= odr.findById(id);
		if(od.isPresent()) {
			return od.get();
		}
		else {
			throw new OrderException("No order found with id "+id);
		}
	}

	@Override
	public OrderDetails deleteOrder(Integer id) throws OrderException {
		Optional<OrderDetails> od= odr.findById(id);
		if(od.isPresent()) {
			odr.delete(od.get());
			return od.get();
		}
		else {
			throw new OrderException("No order found with id "+id);
		}
	}

	@Override
	public List<OrderDetails> viewAllOrder() throws OrderException {
		List<OrderDetails> ods=odr.findAll();
		if(ods.size()>0) {
			return ods;
		}
		else {
			throw new OrderException("No order to show");
		}
	}

}
