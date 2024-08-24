package com.TrendZ.Ecomm.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TrendZ.Ecomm.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public User findByEmail(String email);
}
