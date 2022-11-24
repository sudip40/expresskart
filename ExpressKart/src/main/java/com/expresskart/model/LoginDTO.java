package com.expresskart.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class LoginDTO {

	@NotNull(message = "Username should not null")
	@Email
	private String useremail;
	@NotNull(message = "Password should not be null")
	private String userpassword;

}
