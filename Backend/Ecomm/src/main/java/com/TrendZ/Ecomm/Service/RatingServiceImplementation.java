package com.TrendZ.Ecomm.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TrendZ.Ecomm.DTO.RatingRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Repository.RatingRepository;
import com.TrendZ.Ecomm.model.Product;
import com.TrendZ.Ecomm.model.Rating;
import com.TrendZ.Ecomm.model.User;

@Service
public class RatingServiceImplementation implements RatingService{
	@Autowired
	private RatingRepository ratingRepository;
	@Autowired
	private ProductService productService;

	@Override
	public Rating createRating(RatingRequest req, User user) throws ProductException {
		Product product=productService.findProductById(req.getProductId());
		
		Rating rating=new Rating();
		rating.setProduct(product);
		rating.setUser(user);
		rating.setRating(req.getRating());
		rating.setCreatedAt(LocalDateTime.now());
		return ratingRepository.save(rating);
	}

	@Override
	public List<Rating> getProductsRating(Long productId) {
		List<Rating> ratings=ratingRepository.getAllRatingOfProduct(productId);
		return ratings;
	}
	
}
