package com.TrendZ.Ecomm.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TrendZ.Ecomm.DTO.ApiResponse;
import com.TrendZ.Ecomm.Exception.CartItemException;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.Service.CartItemService;
import com.TrendZ.Ecomm.Service.UserService;
import com.TrendZ.Ecomm.model.CartItem;
import com.TrendZ.Ecomm.model.User;

@RestController
@RequestMapping("/api/cartitem")
public class CartItemController {
	@Autowired
	private CartItemService cartItemService;
	@Autowired
	private UserService userService;

	@DeleteMapping("/{cartitemid}")
	public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartitemid,
			@RequestHeader("Authorization") String jwt) throws UserException, CartItemException {
		User user = userService.findUserProfileByJwt(jwt);
		cartItemService.removeCartItem(user.getId(), cartitemid);

		ApiResponse api = new ApiResponse();
		api.setMessage("Cart item deleted");
		api.setStatus(true);

		return new ResponseEntity<ApiResponse>(api, HttpStatus.ACCEPTED);
	}

	@PutMapping("/{cartitemid}")
	public ResponseEntity<CartItem> updateCartItem(@RequestBody CartItem cartitem, @PathVariable Long cartitemid,
			@RequestHeader("Authorization") String jwt) throws CartItemException, UserException {
		User user = userService.findUserProfileByJwt(jwt);

		CartItem updatedCartitem = cartItemService.updateCartItem(user.getId(), cartitemid, cartitem);
		
		return new ResponseEntity<CartItem>(updatedCartitem,HttpStatus.ACCEPTED);

	}
}
