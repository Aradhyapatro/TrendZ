package com.TrendZ.Ecomm.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TrendZ.Ecomm.Config.JwtProvider;
import com.TrendZ.Ecomm.DTO.AuthResponse;
import com.TrendZ.Ecomm.DTO.LoginUser;
import com.TrendZ.Ecomm.Exception.UsernameAlreadyExistException;
import com.TrendZ.Ecomm.Exception.WrongPasswordException;
import com.TrendZ.Ecomm.Repository.UserRepository;
import com.TrendZ.Ecomm.Service.CartService;
import com.TrendZ.Ecomm.Service.CustomUserService;
import com.TrendZ.Ecomm.model.User;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JwtProvider jwt;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private CustomUserService customUserService;
	@Autowired
	private CartService cartService;

	@PostMapping(path = "/signup")
	public ResponseEntity<AuthResponse> registerUser(@RequestBody User user)
			throws UsernameNotFoundException, UsernameAlreadyExistException {
//		Extraction of data
		String firstName = user.getFirstName();
		String lastName = user.getLastName();
		String email = user.getEmail();
		String password = user.getPassword();

//		Checking if the username exisats or not
		User searchedUser = userRepository.findByEmail(email);
		if (searchedUser != null) {
			throw new UsernameAlreadyExistException("Username Already Exists" + email);
		}

//		Saving to the database & encoding the password before storing
		User new_user = new User();
		new_user.setEmail(email);
		new_user.setPassword(passwordEncoder.encode(password));
		new_user.setFirstName(firstName);
		new_user.setLastName(lastName);

		User createdUser = userRepository.save(new_user);
		cartService.createCart(new_user);

//		storing the email/username & password in spring security context 
		Authentication authentication = new UsernamePasswordAuthenticationToken(createdUser.getEmail(),
				createdUser.getPassword());
		SecurityContextHolder.getContext().setAuthentication(authentication);

//		Creating the jwt for the user
		String token = jwt.generateToken(authentication);

//		Returning data in standard responseEntity format
		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Sign Up Success!");
		
		
		
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
	}

	@PostMapping(path = "/signin")
	public ResponseEntity<AuthResponse> loginUser(@RequestBody LoginUser user) throws WrongPasswordException {
//		extracting the details
		String email = user.getEmail();
		String password = user.getPassword();

//		Verification and obtaining authentication with authorities
		Authentication authentication = authenticate(email, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);

//		Creating the jwt for the user
		String token = jwt.generateToken(authentication);

//		Returning data in standard responseEntity format
		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Sign in Success!");
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.ACCEPTED);
	}

	private Authentication authenticate(String email, String password) {
//		Verifing if username exists
		UserDetails userDetail = customUserService.loadUserByUsername(email);

		if (userDetail == null) {
			throw new BadCredentialsException("Invalid username");
		}

//		Verifing if the password is correct
		if (!passwordEncoder.matches(password, userDetail.getPassword())) {
			throw new BadCredentialsException("Invalid Password");
		}

		return new UsernamePasswordAuthenticationToken(userDetail, null, userDetail.getAuthorities());
	}
}
