package com.TrendZ.Ecomm.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TrendZ.Ecomm.DTO.ReviewRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.Service.ReviewService;
import com.TrendZ.Ecomm.Service.UserService;
import com.TrendZ.Ecomm.model.Rating;
import com.TrendZ.Ecomm.model.Review;
import com.TrendZ.Ecomm.model.User;

@RestController
@RequestMapping("/api/review")
public class ReviewController {
	@Autowired
	private ReviewService reviewService;
	@Autowired
	private UserService userService;
	
	@PostMapping("/create")
	public ResponseEntity<Review> createReview(@RequestBody ReviewRequest req,@RequestHeader("Authorization") String jwt) throws UserException, ProductException{
		User user = userService.findUserProfileByJwt(jwt);
		Review review= reviewService.createReview(req, user);
		
		return new ResponseEntity<Review>(review,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/product/{productId}")
	public ResponseEntity<List<Review>> getProductRatings(@PathVariable Long productId) {
		List<Review> ratings = reviewService.getAllReview(productId);

		return new ResponseEntity<List<Review>>(ratings, HttpStatus.OK);
	}
}
