package com.expresskart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expresskart.model.OrderDetails;

public interface OrderDRepo extends JpaRepository<OrderDetails,Integer>{

}
