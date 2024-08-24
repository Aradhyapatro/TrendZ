package com.TrendZ.Ecomm.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TrendZ.Ecomm.DTO.AddItemRequest;
import com.TrendZ.Ecomm.DTO.ApiResponse;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.Service.CartService;
import com.TrendZ.Ecomm.Service.UserService;
import com.TrendZ.Ecomm.model.Cart;
import com.TrendZ.Ecomm.model.User;

@RestController
@RequestMapping("/api/cart")
public class CartController {
	@Autowired
	private CartService cartService;
	@Autowired
	private UserService userService;

	@GetMapping("/")
	public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt)
			throws UserException, ProductException {
		User user = userService.findUserProfileByJwt(jwt);
		Cart cart = cartService.findUserCart(user.getId());

		return new ResponseEntity<Cart>(cart, HttpStatus.OK);
	}

	@PutMapping("/add")
	public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,
			@RequestHeader("Authorization") String jwt) throws UserException, ProductException {
		User user=userService.findUserProfileByJwt(jwt);
		cartService.addCartItem(user.getId(), req);
		
		ApiResponse res=new ApiResponse();
		res.setMessage("Item added to cart");
		res.setStatus(true);
		
		return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
	}

}
