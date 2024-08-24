package com.TrendZ.Ecomm.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.TrendZ.Ecomm.model.Category;

public interface categoryRepository extends JpaRepository<Category, Long> {

	public Category findByName(String name);

	@Query("SELECT c FROM Category c WHERE c.name = :name AND c.parentCategory.name = :parentCategoryName")
	public Category findByNameAndParent(@Param("name") String name,
			@Param("parentCategoryName") String parentCategoryName);

	@Query("SELECT c FROM Category c WHERE c.name = :name AND c.parentCategory.name = :parentCategoryName "
			+ "AND c.parentCategory.parentCategory.name = :grandparentCategoryName")
	public Category findByNameAndParentAndGrandparent(@Param("name") String name,
			@Param("parentCategoryName") String parentCategoryName,
			@Param("grandparentCategoryName") String grandparentCategoryName);
}
