package com.sendroids.website.service;

import com.sendroids.website.domain.user.LoginUser;
import com.sendroids.website.domain.user.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final UserRepository userRepository;

    public LoginService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public LoginUser findUserByUsername(String username){
        return userRepository.findByUsername(username);
    }
}
