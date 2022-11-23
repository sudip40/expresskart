package com.expresskart.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.UniqueElements;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer pId;
	@NotNull
	@UniqueElements
	private String pName;
	@NotNull
	@Column(length = 3000)
	private String pDesc;
	private String pPhoto;
	@NotNull
	private Integer pPrice;
	private Integer pDiscount;
	private Integer pQuantity;

	@ManyToOne
	private Category category;
}
