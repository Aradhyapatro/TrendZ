package com.TrendZ.Ecomm.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TrendZ.Ecomm.DTO.ReviewRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Repository.ReviewRepository;
import com.TrendZ.Ecomm.Repository.productRepository;
import com.TrendZ.Ecomm.model.Product;
import com.TrendZ.Ecomm.model.Review;
import com.TrendZ.Ecomm.model.User;

@Service
public class ReviewServiceImplementation implements ReviewService {
	@Autowired
	private ReviewRepository reviewRepository;
	@Autowired
	private ProductService productService;
	@Autowired
	private productRepository productRepository;

	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		Product product=productService.findProductById(req.getProductId());
		
		Review review=new Review();
		review.setProduct(product);
		review.setUser(user);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getAllReview(long productId) {
		return reviewRepository.getAllReviewOfProduct(productId);
	}

}
