package com.TrendZ.Ecomm.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.TrendZ.Ecomm.Repository.OrderItemRepository;
import com.TrendZ.Ecomm.model.OrderItem;

public class OrderItemServiceImplementation implements OrderItemService {
	@Autowired
	private OrderItemRepository orderItemRepository;

	@Override
	public OrderItem createOrderItem(OrderItem orderItem) {
		return orderItemRepository.save(orderItem);
	}

}
