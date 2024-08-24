package com.TrendZ.Ecomm.DTO;

import java.util.HashSet;
import java.util.Set;

import com.TrendZ.Ecomm.model.Size;

public class CreateProductRequest {
	private String title;
	private String description;
	private int price;
	private int discountedPrice;
	public int getDiscountedPrice() {
		return discountedPrice;
	}

	public void setDiscountedPrice(int discountedPrice) {
		this.discountedPrice = discountedPrice;
	}

	public int getDiscountPercent() {
		return discountPercent;
	}

	public void setDiscountPercent(int discountPercent) {
		this.discountPercent = discountPercent;
	}

	private int discountPercent;
	private int Quantity;
	private String brand;
	private String color;
	private Set<Size> size = new HashSet<>();
	private String imageUrl;
	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	private String topLevelCategory;
	private String secondLevelCategory;
	private String thirdLevelCategory;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getQuantity() {
		return Quantity;
	}

	public void setQuantity(int quantity) {
		Quantity = quantity;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Set<Size> getSize() {
		return size;
	}

	public void setSize(Set<Size> size) {
		this.size = size;
	}

	public String getTopLevelCategory() {
		return topLevelCategory;
	}

	public void setTopLevelCategory(String topLevelCategory) {
		this.topLevelCategory = topLevelCategory;
	}

	public String getSecondLevelCategory() {
		return secondLevelCategory;
	}

	public void setSecondLevelCategory(String secondLevelCategory) {
		this.secondLevelCategory = secondLevelCategory;
	}

	public String getThirdLevelCategory() {
		return thirdLevelCategory;
	}

	public void setThirdLevelCategory(String thirdLevelCategory) {
		this.thirdLevelCategory = thirdLevelCategory;
	}

	public CreateProductRequest(String title, String description, int price, int discountedPrice, int discountPresent,
			int quantity, String brand, String color, Set<Size> size, String imageUrl, String topLevelCategory,
			String secondLevelCategory, String thirdLevelCategory) {
		super();
		this.title = title;
		this.description = description;
		this.price = price;
		this.discountedPrice = discountedPrice;
		this.discountPercent = discountPercent;
		Quantity = quantity;
		this.brand = brand;
		this.color = color;
		this.size = size;
		this.imageUrl=imageUrl;
		this.topLevelCategory = topLevelCategory;
		this.secondLevelCategory = secondLevelCategory;
		this.thirdLevelCategory = thirdLevelCategory;
	}

	public CreateProductRequest() {
		super();
	}

	@Override
	public String toString() {
		return "CreateProductRequest [title=" + title + ", description=" + description + ", price=" + price
				+ ", discountedPrice=" + discountedPrice + ", discountPercent=" + discountPercent + ", Quantity=" + Quantity
				+ ", brand=" + brand + ", color=" + color + ", size=" + size + ", Url=" + imageUrl + ", topLevelCategory="
				+ topLevelCategory + ", secondLevelCategory=" + secondLevelCategory + ", thirdLevelCategory="
				+ thirdLevelCategory + "]";
	}
	
	
}
