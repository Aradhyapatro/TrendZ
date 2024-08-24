package com.TrendZ.Ecomm.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TrendZ.Ecomm.Exception.CartItemException;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.Repository.CartItemRepository;
import com.TrendZ.Ecomm.Repository.CartRepository;
import com.TrendZ.Ecomm.model.Cart;
import com.TrendZ.Ecomm.model.CartItem;
import com.TrendZ.Ecomm.model.Product;
import com.TrendZ.Ecomm.model.User;

@Service
public class CartItemServiceImplementation implements CartItemService{
	@Autowired
	private CartItemRepository cartitemRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private CartRepository cartRepository;
	
	@Override
	public CartItem createCartItem(CartItem cartitem) {
		cartitem.setQuantity(1);
		cartitem.setPrice(cartitem.getProduct().getPrice()*cartitem.getQuantity());
		cartitem.setDiscountedPrice(cartitem.getProduct().getDiscountedPrice()*cartitem.getQuantity());
		CartItem createdCartItem=cartitemRepository.save(cartitem);
		return createdCartItem;
	}

	@Override
	public CartItem updateCartItem(Long userid, Long id, CartItem cartitem) throws CartItemException, UserException {
		CartItem item=findCartItemById(id);
		User user=userService.findUserById(userid);
		
		if(user.getId().equals(item.getUserid())) {
			item.setQuantity(cartitem.getQuantity());
			item.setPrice(item.getQuantity()*item.getProduct().getPrice());
			item.setDiscountedPrice(item.getProduct().getDiscountedPrice()*item.getQuantity());
		}
		
		return cartitemRepository.save(item);
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userid) {
		CartItem cartitem = cartitemRepository.isCartitemExist(cart,product,size,userid);
		return cartitem;
	}

	@Override
	public void removeCartItem(Long userid, Long cartitemid) throws UserException, CartItemException {
		CartItem cartitem=findCartItemById(cartitemid);
		
		User user = userService.findUserById(cartitem.getUserid());
		
		User reqUser=userService.findUserById(userid);
		
		if(user.getId().equals(reqUser.getId())) {
			cartitemRepository.deleteById(cartitemid);
			return;
		}
		
		throw new UserException("You can't remove another User's item");
		
	}

	@Override
	public CartItem findCartItemById(Long id) throws CartItemException {
		Optional<CartItem> item=cartitemRepository.findById(id);
		if(item.isEmpty()) {
			throw new CartItemException("CartItem Not found");
		}
		return item.get();
	}

}
