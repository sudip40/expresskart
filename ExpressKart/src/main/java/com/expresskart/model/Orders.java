package com.expresskart.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer orderid;

	@NonNull
	private LocalDate orderDate;

	private Integer totalCost;
	
	private String status;

	@ManyToOne
	@JoinColumn(name = "usrid")
	@JsonProperty(access = Access.WRITE_ONLY)
	private User customer;
    
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "order")
	private List<OrderDetails> orderDetails=new ArrayList<>();
	
}
