package com.TrendZ.Ecomm.Service;

import com.TrendZ.Ecomm.DTO.AddItemRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.model.Cart;
import com.TrendZ.Ecomm.model.User;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userid,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId) throws ProductException;
}
