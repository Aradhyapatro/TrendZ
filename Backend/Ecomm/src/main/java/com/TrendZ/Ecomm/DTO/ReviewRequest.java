package com.TrendZ.Ecomm.DTO;

public class ReviewRequest {
	private long productId;
	private String review;

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public ReviewRequest(long productId, String review) {
		super();
		this.productId = productId;
		this.review = review;
	}

	public ReviewRequest() {
		super();
	}

}
