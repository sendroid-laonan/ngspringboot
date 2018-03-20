package com.sendroids.website.domain.user;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service(value = "userService")
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /**
     * @param username username
     * @return Optional may be empty.
     */
    public Optional<LoginUser> findByUsername(final String username) {
        return Optional.ofNullable(userRepository.findByUsername(username));
    }

    public Optional<List<LoginUser>> findAllUser() {
        return Optional.ofNullable(userRepository.findAll());
    }

    public Optional<LoginUser> saveUser(LoginUser loginUser) {
        return Optional.ofNullable(userRepository.save(loginUser));
    }

    public Optional<LoginUser> findById(Long userId){
        return Optional.ofNullable(userRepository.getOne(userId));
    }

    public void deleteUser(long userId) {
        userRepository.deleteById(userId);
    }
}
