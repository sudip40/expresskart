package com.expresskart.model;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	@NotNull(message = "field should not be null")
	private String productName;
	@NotNull(message = "field should not be null")
	private Integer productQty;
}
