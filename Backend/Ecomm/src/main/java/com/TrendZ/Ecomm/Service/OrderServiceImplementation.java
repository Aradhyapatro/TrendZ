package com.TrendZ.Ecomm.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TrendZ.Ecomm.Exception.OrderException;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.Repository.AddressRepository;
import com.TrendZ.Ecomm.Repository.OrderItemRepository;
import com.TrendZ.Ecomm.Repository.OrderRepository;
import com.TrendZ.Ecomm.Repository.UserRepository;
import com.TrendZ.Ecomm.model.Address;
import com.TrendZ.Ecomm.model.Cart;
import com.TrendZ.Ecomm.model.CartItem;
import com.TrendZ.Ecomm.model.Order;
import com.TrendZ.Ecomm.model.OrderItem;
import com.TrendZ.Ecomm.model.User;

@Service
public class OrderServiceImplementation implements OrderService {
	@Autowired
	private CartService cartService;
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private OrderItemRepository orderItemRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private UserRepository userRepository;

	@Override
	public Order createOrder(User user, Address shippingAddress) throws ProductException {
		shippingAddress.setUser(user);
		Address address = addressRepository.save(shippingAddress);
		user.getAddress().add(address);

		userRepository.save(user);

		Cart cart = cartService.findUserCart(user.getId());
		List<OrderItem> orderitems = new ArrayList<>();

		for (CartItem item : cart.getCartitem()) {
			OrderItem orderitem = new OrderItem();
			orderitem.setPrice(item.getPrice());
			orderitem.setQuantity(item.getQuantity());
			orderitem.setProduct(item.getProduct());
			orderitem.setSize(item.getSize());
			orderitem.setUserId(item.getUserid());
			orderitem.setDiscountedPrice(item.getDiscountedPrice());

			OrderItem createdOrderItem = orderItemRepository.save(orderitem);
			orderitems.add(createdOrderItem);
		}

		Order order = new Order();
		order.setUser(user);
		order.setOrderItem(orderitems);
		order.setTotalPrice(cart.getTotalPrice());
		order.setTotalDiscountedPrice(cart.getTotalDiscountPrice());
		order.setDiscount(cart.getDiscount());
		order.setTotalItem(cart.getTotalItem());

		order.setShippingAddress(shippingAddress);
		order.setOrderedAt(LocalDateTime.now());
		order.setOrderStatus("PENDING");
		order.getPaymentDetails().setStatus("PENDING");
		order.setCreatedAt(LocalDateTime.now());

		Order savedOrder = orderRepository.save(order);

		for (OrderItem item : orderitems) {
			item.setOrder(savedOrder);
			orderItemRepository.save(item);
		}

		return savedOrder;
	}

	@Override
	public Order findOrderById(Long id) throws OrderException {
		Optional<Order> order = orderRepository.findById(id);
		if (order.isEmpty()) {
			throw new OrderException("Order Does'nt exist");
		}

		return order.get();
	}

	@Override
	public Order placedOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("PLACED");
		order.getPaymentDetails().setStatus("COMPLETED");
		return order;
	}

	@Override
	public Order confirmedOrder(Long orderid) throws OrderException {
		Order order = findOrderById(orderid);
		order.setOrderStatus("CONFIRMED");
		return orderRepository.save(order);
	}

	@Override
	public Order shippedOrder(Long orederid) throws OrderException {
		Order order = findOrderById(orederid);
		order.setOrderStatus("SHIPPED");
		return orderRepository.save(order);
	}

	@Override
	public Order deliveredOrder(Long orderid) throws OrderException {
		Order order = findOrderById(orderid);
		order.setOrderStatus("DELIVERED");
		return orderRepository.save(order);
	}

	@Override
	public Order canceledOrder(Long orderid) throws OrderException {
		Order order = findOrderById(orderid);
		order.setOrderStatus("CANCELLED");
		return orderRepository.save(order);
	}

	@Override
	public List<Order> getAllOrder() {
		List<Order> orders = orderRepository.findAll();
		return orders;
	}

	@Override
	public void deleteOrder(Long orderid) throws OrderException {
		orderRepository.deleteById(orderid);
	}

	@Override
	public List<Order> userOrderHistory(Long userId) throws UserException {
		List<Order> orders = orderRepository.getUsersOrders(userId);
		return orders;
	}

}
