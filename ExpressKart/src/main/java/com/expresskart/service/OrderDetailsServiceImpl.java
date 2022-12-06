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
import com.expresskart.model.LoginDTO;
import com.expresskart.model.OrderDetails;
import com.expresskart.model.Orders;
import com.expresskart.model.Product;
import com.expresskart.model.ProductQuantity;
import com.expresskart.model.User;
import com.expresskart.model.UserDTO;
import com.expresskart.repository.OrderDRepo;
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

	@Autowired
	private OrderDRepo or;
	
	@Override
	public Orders placeOrder(String key,Integer totalcost,ProductQuantity pq) throws OrderException, LoginException {
		CurrentUserSession c =sd.findByUuid(key);
		if(c!=null) {
			User u=ur.findByUseremail(c.getEmail());
			Orders o=new Orders();
			o.setCustomer(u);
			o.setOrderDate(LocalDate.now());
			o.setTotalCost(totalcost);
			o.setStatus("Processing");
			OrderDetails orr=new OrderDetails();
			orr.setOrder(o);
			Product prr=pr.findByPname(pq.getName());
			prr.setPquantity(prr.getPquantity()-pq.getQuantity());
			Product p= pr.save(prr);
			orr.setProduct(p);
			orr.setQuantity(pq.getQuantity());
			Orders odd=odr.save(o);
			or.save(orr);
			return odd;
		}
		else {
			throw new LoginException("User not logged in");
		}
	}

	@Override
	public Orders getorderbyId(Integer id, String key) throws OrderException, LoginException {
		CurrentUserSession c =sd.findByUuid(key);
		if(c!=null) {
			Optional<Orders> o=odr.findById(id);
			if(o.isPresent()) {
				return o.get();
			}
			else {
				throw new OrderException("There is no order with id "+id);
			}
		}
		else {
			throw new LoginException("User not logged in");
		}
	}

	@Override
	public Orders deleteOrder(Integer id) throws OrderException {
		Optional<Orders> o=odr.findById(id);
		if(o.isPresent()) {
			odr.delete(o.get());
			return o.get();
		}
		else {
			throw new OrderException("There is no order with id "+id);
		}
	}

	@Override
	public List<Orders> viewAllOrder() throws OrderException {
		List<Orders> orders=odr.findAll();
		if(orders.size()>0) {
			return orders;
		}
		throw new OrderException("No order to show");
	}
	
	

}
