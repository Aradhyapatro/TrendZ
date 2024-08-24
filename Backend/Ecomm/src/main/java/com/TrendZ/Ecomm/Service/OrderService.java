package com.TrendZ.Ecomm.Service;

import java.util.List;

import com.TrendZ.Ecomm.Exception.OrderException;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.model.Address;
import com.TrendZ.Ecomm.model.Order;
import com.TrendZ.Ecomm.model.User;

public interface OrderService {
	public Order createOrder(User user, Address shippingAddress) throws ProductException;

	public Order findOrderById(Long id) throws OrderException;

	public Order placedOrder(Long orderId) throws OrderException;

	public Order confirmedOrder(Long orderid) throws OrderException;

	public Order shippedOrder(Long orederid) throws OrderException;

	public Order deliveredOrder(Long orderid) throws OrderException;

	public Order canceledOrder(Long orderid) throws OrderException;

	public List<Order> getAllOrder();

	public void deleteOrder(Long orderid) throws OrderException;
	
	public List<Order> userOrderHistory(Long userId) throws UserException;
}
