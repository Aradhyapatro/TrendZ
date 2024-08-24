package com.TrendZ.Ecomm.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.TrendZ.Ecomm.model.Product;

public interface productRepository extends JpaRepository<Product, Long> {
	
	public Optional<Product> findById(Long Id);

	@Query("SELECT p FROM Product p WHERE "
	        + "(:category IS NULL OR p.category.name = :category) AND "
	        + "((:minPrice IS NULL AND :maxPrice IS NULL) OR (p.discountedPrice BETWEEN :minPrice AND :maxPrice)) AND "
	        + "(:minDiscount IS NULL OR p.discountPresent >= :minDiscount) "
	        + "ORDER BY "
	        + "CASE WHEN :sort = 'price_low' THEN p.discountedPrice END ASC, "
	        + "CASE WHEN :sort = 'price_high' THEN p.discountedPrice END DESC")
	public List<Product> filterProducts(@Param("category") String category, 
	                                     @Param("minPrice") Integer minPrice,
	                                     @Param("maxPrice") Integer maxPrice, 
	                                     @Param("minDiscount") Integer minDiscount, 
	                                     @Param("sort") String sort);

	@Query("select p from Product p where p.category.name=:category")
	public List<Product> findByCategory(@Param("category") String category);
}
