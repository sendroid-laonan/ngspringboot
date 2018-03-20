package com.sendroids.website.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    @Query("SELECT authority FROM Authority authority WHERE authority.authority = :role")
    @Transactional(readOnly = true)
    Authority findByAuthority(@Param("role") String role);
}
