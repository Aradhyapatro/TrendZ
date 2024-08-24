package com.TrendZ.Ecomm.Service;

import java.util.List;

import com.TrendZ.Ecomm.DTO.ReviewRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.model.Review;
import com.TrendZ.Ecomm.model.User;

public interface ReviewService {
	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(long productId);
}
