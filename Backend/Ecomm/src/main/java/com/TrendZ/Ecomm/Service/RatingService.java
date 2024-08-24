package com.TrendZ.Ecomm.Service;

import java.util.List;

import com.TrendZ.Ecomm.DTO.RatingRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.model.Rating;
import com.TrendZ.Ecomm.model.User;

public interface RatingService {

	public Rating createRating(RatingRequest req, User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);
}
