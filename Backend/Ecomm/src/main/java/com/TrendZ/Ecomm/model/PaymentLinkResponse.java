package com.TrendZ.Ecomm.model;

public class PaymentLinkResponse {
	private String payment_link_id;
	private String payment_link_url;
	
	
	
	
	@Override
	public String toString() {
		return "PaymentLinkResponse [payment_link_id=" + payment_link_id + ", payment_link_url=" + payment_link_url
				+ "]";
	}


	public PaymentLinkResponse(String payment_link_id, String payment_link_url) {
		super();
		this.payment_link_id = payment_link_id;
		this.payment_link_url = payment_link_url;
	}
	
	
	public PaymentLinkResponse() {
		super();
	}


	public String getPayment_link_id() {
		return payment_link_id;
	}
	public void setPayment_link_id(String payment_link_id) {
		this.payment_link_id = payment_link_id;
	}
	public String getPayment_link_url() {
		return payment_link_url;
	}
	public void setPayment_link_url(String payment_link_url) {
		this.payment_link_url = payment_link_url;
	}
	
	
}
