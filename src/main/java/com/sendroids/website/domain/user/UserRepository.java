package com.sendroids.website.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository<LoginUser, Long> {

    /**
     * @param username username
     * @return LoginUser or null
     */
    @Query("SELECT user FROM LoginUser user WHERE user.username = :username")
    @Transactional(readOnly = true)
    LoginUser findByUsername(@Param("username") String username);


    @Query("select user from LoginUser user where user.id = :user_id")
    @Transactional(readOnly = true)
    LoginUser findByUserId(@Param("user_id") Long user_id);
}
