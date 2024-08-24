package com.TrendZ.Ecomm.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TrendZ.Ecomm.Config.JwtProvider;
import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.Repository.UserRepository;
import com.TrendZ.Ecomm.model.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Service
public class UserServiceImplementation implements UserService{
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JwtProvider jwtProvider;
	
	@Override
	public User findUserById(long userid) throws UserException {
		Optional<User> user=userRepository.findById(userid);
		if(user.isEmpty()) {
			throw new UserException("User not found for id "+userid);
		}
		return user.get();
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		String userEmail = jwtProvider.getUserIdFromToken(jwt);
		User user=userRepository.findByEmail(userEmail);
		return user;
	}

}
