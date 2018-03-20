package com.sendroids.website.domain.user;


public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long userId) {
        super("could not find user(" + userId + ").");
    }

    public UserNotFoundException(String username) {
        super("could not find user(" + username + ").");
    }
}
