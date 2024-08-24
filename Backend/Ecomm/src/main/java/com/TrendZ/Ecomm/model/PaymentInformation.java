package com.TrendZ.Ecomm.model;

import java.time.LocalDate;

import jakarta.persistence.Column;

public class PaymentInformation {
	@Column(name = "cardholder_name")
	private String cardHolderName;
	
	@Column(name = "card_number")
	private String cardNumber;
	
	@Column(name = "expiration_date")
	private LocalDate expirationDate;
	
	@Column(name = "CVV")
	private String cvv;
}
