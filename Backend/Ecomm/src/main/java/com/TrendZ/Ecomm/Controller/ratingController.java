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

import com.TrendZ.Ecomm.DTO.RatingRequest;
import com.TrendZ.Ecomm.Exception.ProductException;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.Service.RatingService;
import com.TrendZ.Ecomm.Service.UserService;
import com.TrendZ.Ecomm.model.Rating;
import com.TrendZ.Ecomm.model.User;

@RestController
@RequestMapping("/api/rating")
public class ratingController {
	@Autowired
	private UserService userService;
	@Autowired
	private RatingService ratingService;

	@PostMapping("/create")
	public ResponseEntity<Rating> createRating(@RequestHeader("Authorization") String jwt,
			@RequestBody RatingRequest req) throws UserException, ProductException {
		User user = userService.findUserProfileByJwt(jwt);
		Rating rating = ratingService.createRating(req, user);

		return new ResponseEntity<Rating>(rating, HttpStatus.CREATED);
	}

	@GetMapping("/product/{productId}")
	public ResponseEntity<List<Rating>> getProductRatings(@PathVariable Long productId) {
		List<Rating> ratings = ratingService.getProductsRating(productId);

		return new ResponseEntity<List<Rating>>(ratings, HttpStatus.OK);
	}
}
