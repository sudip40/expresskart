package com.expresskart.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer userid;
	
	@Column(unique = true)
	@Size(min = 2, max = 50, message = "Minimun Username size must be greater than 2 and less than 6")
	private String username;
	@Email
	@Column(unique = true)
	private String useremail;
	@NotNull
	@Pattern(regexp = "[a-zA-Z0-9]{6,12}", message = "Password must contain between 6 to 12 characters. Must be alphanumeric with both Upper and lowercase characters.")
	private String userpassword;
	private String userphone;
	@Column(length=1500)
	private String useraddress;
	
	@OneToMany(mappedBy = "customer")
	private List<Orders> orders=new ArrayList<>();
}
