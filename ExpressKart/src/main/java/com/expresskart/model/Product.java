package com.expresskart.model;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer pid;
	@NotNull
	private String pname;
	@NotNull
	@Column(length = 3000)
	private String pdesc;
	private String pphoto;
	@NotNull
	private Integer pprice;
	private Integer pdiscount;
	private Integer pquantity;
	@NotNull
	@ManyToOne
	private Category category;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name ="orderid")
	@JsonIgnore
	private OrderDetails orderdetails;
}
