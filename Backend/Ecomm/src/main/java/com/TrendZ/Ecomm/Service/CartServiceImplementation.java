package com.TrendZ.Ecomm.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TrendZ.Ecomm.DTO.AddItemRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Repository.CartRepository;
import com.TrendZ.Ecomm.model.Cart;
import com.TrendZ.Ecomm.model.CartItem;
import com.TrendZ.Ecomm.model.Product;
import com.TrendZ.Ecomm.model.User;

@Service
public class CartServiceImplementation implements CartService {
	@Autowired
	private CartRepository cartRepository;
	@Autowired
	private CartItemService cartItemService;
	@Autowired
	private ProductService productService;

	@Override
	public Cart createCart(User user) {
		Cart cart = new Cart();
		cart.setUser(user);
		return cartRepository.save(cart);
	}

	@Override
	public String addCartItem(Long userid, AddItemRequest req) throws ProductException {
		Cart cart = cartRepository.findByUserId(userid);
		Product product = productService.findProductById(req.getProductId());

		CartItem isPresent = cartItemService.isCartItemExist(cart, product, req.getSize(), userid);

		if (isPresent == null) {
			CartItem cartitem = new CartItem();
			cartitem.setProduct(product);
			cartitem.setCart(cart);
			System.out.println("\n\n"+req.getQuantity()+"\n\n");
			cartitem.setQuantity(req.getQuantity());
			cartitem.setUserid(userid);
			cartitem.setPrice(req.getQuantity() * product.getPrice());
			cartitem.setSize(req.getSize());
			cartitem.setDiscountedPrice(req.getQuantity() * product.getDiscountedPrice());

			CartItem createdCartItem = cartItemService.createCartItem(cartitem);
			cart.getCartitem().add(createdCartItem);
			
		}

		return "Item Add To Cart";
	}

	@Override
	public Cart findUserCart(Long userId) throws ProductException {
		Cart cart = cartRepository.findByUserId(userId);

		int totalPrice = 0;
		int totalDiscountedPrice = 0;
		int totalItem = 0;

		for (CartItem cartitem : cart.getCartitem()) {
			totalPrice = totalPrice + cartitem.getPrice();
			totalDiscountedPrice = totalDiscountedPrice + cartitem.getDiscountedPrice();
			totalItem = totalItem + cartitem.getQuantity();
		}

		cart.setTotalPrice(totalPrice);
		cart.setTotalDiscountPrice(totalDiscountedPrice);
		cart.setTotalItem(totalItem);
		cart.setDiscount(totalPrice-totalDiscountedPrice);
		
		return cartRepository.save(cart);
	}

}
