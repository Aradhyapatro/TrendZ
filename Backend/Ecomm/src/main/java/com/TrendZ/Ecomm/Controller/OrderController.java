package com.TrendZ.Ecomm.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TrendZ.Ecomm.Exception.OrderException;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.Service.OrderService;
import com.TrendZ.Ecomm.Service.UserService;
import com.TrendZ.Ecomm.model.Address;
import com.TrendZ.Ecomm.model.Order;
import com.TrendZ.Ecomm.model.User;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	@Autowired
	private OrderService orderService;
	@Autowired
	private UserService userService;

	@PostMapping("/")
	public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress,
			@RequestHeader("Authorization") String jwt) throws UserException, ProductException {
		User user = userService.findUserProfileByJwt(jwt);
		Order order = orderService.createOrder(user, shippingAddress);

		return new ResponseEntity<Order>(order, HttpStatus.CREATED);
	}

	@GetMapping("/user")
	public ResponseEntity<List<Order>> userOrderHistory(@RequestHeader("Authorization") String jwt)
			throws UserException{
		User user = userService.findUserProfileByJwt(jwt);
		
		List<Order> orders=orderService.userOrderHistory(user.getId());
		
		return new ResponseEntity<List<Order>>(orders,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Order> findOrderById(@PathVariable("id") Long Id,@RequestHeader("Authorization") String jwt) throws UserException, OrderException{
		User user = userService.findUserProfileByJwt(jwt);
		
		Order order = orderService.findOrderById(Id);
		
		return new ResponseEntity<Order>(order,HttpStatus.OK);
	}
}
