package com.TrendZ.Ecomm.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.TrendZ.Ecomm.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

	@Query("select r from Review r where r.product.id=:id")
	public List<Review> getAllReviewOfProduct(@Param("id") Long productId);
}
