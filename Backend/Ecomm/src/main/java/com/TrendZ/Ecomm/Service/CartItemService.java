package com.TrendZ.Ecomm.Service;

import com.TrendZ.Ecomm.Exception.CartItemException;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.model.Cart;
import com.TrendZ.Ecomm.model.CartItem;
import com.TrendZ.Ecomm.model.Product;

public interface CartItemService {

	public CartItem createCartItem(CartItem cartitem);

	public CartItem updateCartItem(Long userid, Long id, CartItem cartitem) throws CartItemException, UserException;

	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userid);

	public void removeCartItem(Long userid, Long cartitemid) throws UserException, CartItemException;

	public CartItem findCartItemById(Long id) throws CartItemException;
}
