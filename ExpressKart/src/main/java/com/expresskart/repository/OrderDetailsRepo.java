package com.expresskart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expresskart.model.OrderDetails;
import com.expresskart.model.Orders;

public interface OrderDetailsRepo extends JpaRepository<Orders,Integer>{

}
