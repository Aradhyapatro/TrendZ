package com.TrendZ.Ecomm.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id",nullable = false)
	private User user;
	
	@OneToMany(mappedBy = "cart",cascade = CascadeType.ALL,orphanRemoval = true)
	@Column(name = "cart_items")
	private Set<CartItem> cartitem=new HashSet<>();

	@Column(name = "total_price")
	private double totalPrice;
	
	@Column(name = "total_item")
	private int totalItem;
	
	private int totalDiscountPrice;
	
	private int discount;

	public Cart() {
		super();
	}

	public Cart(Long id, User user, Set<CartItem> cartitem, double totalPrice, int totalItem, int totalDiscountPrice,
			int discount) {
		super();
		this.id = id;
		this.user = user;
		this.cartitem = cartitem;
		this.totalPrice = totalPrice;
		this.totalItem = totalItem;
		this.totalDiscountPrice = totalDiscountPrice;
		this.discount = discount;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", user=" + user + ", cartitem=" + cartitem + ", totalPrice=" + totalPrice
				+ ", totalItem=" + totalItem + ", totalDiscountPrice=" + totalDiscountPrice + ", discount=" + discount
				+ "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Set<CartItem> getCartitem() {
		return cartitem;
	}

	public void setCartitem(Set<CartItem> cartitem) {
		this.cartitem = cartitem;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public int getTotalItem() {
		return totalItem;
	}

	public void setTotalItem(int totalItem) {
		this.totalItem = totalItem;
	}

	public int getTotalDiscountPrice() {
		return totalDiscountPrice;
	}

	public void setTotalDiscountPrice(int totalDiscountPrice) {
		this.totalDiscountPrice = totalDiscountPrice;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}
}
