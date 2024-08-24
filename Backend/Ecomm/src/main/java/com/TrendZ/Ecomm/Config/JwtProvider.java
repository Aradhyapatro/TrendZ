package com.TrendZ.Ecomm.Config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtProvider {

	public String generateToken(Authentication auth) {
		SecretKey key=Keys.hmacShaKeyFor(JwtConstants.SECRET_KEY.getBytes());
		
		String jwt=Jwts.builder() 
				.setIssuedAt(new Date())
				.setExpiration(new Date(new Date().getTime()+864000000))
				.claim("email", auth.getName())
				.signWith(key).compact();
		
		return jwt;
	}
	
	public String getUserIdFromToken(String jwt) {
		if(jwt!=null && jwt.startsWith("Bearer ")) {
			jwt=jwt.substring(7);
		}
		
		SecretKey key=Keys.hmacShaKeyFor(JwtConstants.SECRET_KEY.getBytes());
		
		Claims claims=Jwts.parser().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
		String email=String.valueOf(claims.get("email"));
		
		return email;
	}
}
