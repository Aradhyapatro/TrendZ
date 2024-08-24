package com.TrendZ.Ecomm.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TrendZ.Ecomm.DTO.ApiResponse;
import com.TrendZ.Ecomm.Exception.OrderException;
import com.TrendZ.Ecomm.Service.OrderService;
import com.TrendZ.Ecomm.model.Order;

@RestController
@RequestMapping("/api/admin/orders")
public class AdminOrderController {
	@Autowired
	private OrderService orderService;

	@GetMapping("/")
	public ResponseEntity<List<Order>> getAllOrders() {
		List<Order> orders = orderService.getAllOrder();
		return new ResponseEntity<List<Order>>(orders, HttpStatus.ACCEPTED);
	}

	@PutMapping("/{orderId}/confirm")
	public ResponseEntity<Order> ConfirmOrderHandler(@PathVariable long orderId,
			@RequestHeader("Authorization") String jwt) throws OrderException {
		Order order = orderService.confirmedOrder(orderId);
		return new ResponseEntity<Order>(order, HttpStatus.OK);
	}

	@PutMapping("/{orderId}/ship")
	public ResponseEntity<Order> ShippedOrderHandler(@PathVariable Long orderId,
			@RequestHeader("Authorization") String jwt) throws OrderException {
		Order order = orderService.shippedOrder(orderId);
		return new ResponseEntity<Order>(order, HttpStatus.OK);
	}

	@PutMapping("/{orderid}/deliver")
	public ResponseEntity<Order> DeliverOrderHandler(@PathVariable Long orderid,
			@RequestHeader("Authorization") String jwt) throws OrderException {
		Order order = orderService.deliveredOrder(orderid);
		return new ResponseEntity<Order>(order, HttpStatus.OK);
	}

	@PutMapping("/{orderid}/cancel")
	public ResponseEntity<Order> CancelOrderHandler(@PathVariable Long orderid,
			@RequestHeader("Authorization") String jwt) throws OrderException {
		Order order = orderService.canceledOrder(orderid);
		return new ResponseEntity<Order>(order, HttpStatus.OK);
	}

	@PutMapping("/{orderid}/delete")
	public ResponseEntity<ApiResponse> DeleteOrderHandler(@PathVariable Long orderid,
			@RequestHeader("Authorization") String jwt) throws OrderException {
		orderService.deleteOrder(orderid);

		ApiResponse res = new ApiResponse();
		res.setMessage("order Deleted successfully");
		res.setStatus(true);

		return new ResponseEntity<ApiResponse>(res, HttpStatus.OK);
	}
}
