package com.TrendZ.Ecomm.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.TrendZ.Ecomm.model.Cart;
import com.TrendZ.Ecomm.model.CartItem;
import com.TrendZ.Ecomm.model.Product;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

	@Query("SELECT ci FROM CartItem ci WHERE ci.cart = :cart AND ci.product = :product AND ci.size = :size AND ci.userid = :userId")
	public CartItem isCartitemExist(@Param("cart") Cart cart, @Param("product") Product product,
			@Param("size") String size, @Param("userId") Long userId);

}
