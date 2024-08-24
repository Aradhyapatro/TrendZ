package com.TrendZ.Ecomm.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.TrendZ.Ecomm.model.Rating;

public interface RatingRepository extends JpaRepository<Rating, Long>{
	
	@Query("select r from Rating r where r.product.id=:id")
	public List<Rating> getAllRatingOfProduct(@Param("id") Long productId);

}
