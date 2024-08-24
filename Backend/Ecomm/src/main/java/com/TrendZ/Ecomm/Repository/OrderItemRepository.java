package com.TrendZ.Ecomm.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TrendZ.Ecomm.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{

}
