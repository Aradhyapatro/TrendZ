package com.TrendZ.Ecomm.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.TrendZ.Ecomm.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

	@Query("select o from Order o where o.user.id=:userid And (o.orderStatus='PLACED' OR o.orderStatus='CONFIRMED' "
			+ "OR o.orderStatus='SHIPPED' OR o.orderStatus='DELIVERED')")
	public List<Order> getUsersOrders(@Param("userid") Long userid);
}
