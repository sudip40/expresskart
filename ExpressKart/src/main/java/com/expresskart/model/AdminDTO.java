package com.expresskart.model;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class AdminDTO {
	@NotNull
	private String email;
	@NotNull
	private String password;
	@NotNull
	private String adminid;
}
