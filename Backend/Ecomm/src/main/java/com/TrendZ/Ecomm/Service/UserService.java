package com.TrendZ.Ecomm.Service;

import com.TrendZ.Ecomm.Exception.UserException;
import com.TrendZ.Ecomm.model.User;

public interface UserService {
	
	public User findUserById(long userid) throws UserException;
	public User findUserProfileByJwt(String jwt) throws UserException;
}
