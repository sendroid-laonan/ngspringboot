package com.sendroids.website.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sendroids.website.domain.NamedEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.util.Collection;

@Entity
@Table(name = "users")
@Slf4j
@Getter
@Setter
@JsonIgnoreProperties(value = {"authorities", "notifies"})
public class LoginUser extends NamedEntity implements UserDetails, Serializable {

    @NotNull
    @Column(unique = true)
    @Pattern(regexp = "^(?![A-Z]+$)(?![a-z]+$)(?!\\d+$)(?![\\W_]+$)\\S{8,20}$", message = "请输入8-20位由字母和数字组成的用户名")
    private String username;

    @NotNull
    private String password;

    @NotNull
    private String organization;    //机构名称

    @Transient
    private String uiPassword;

    @Transient
    private String verifyPassword;

    @Column
    private boolean enabled = true;


    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinTable(
            name = "user_authority",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "authority_id")
    )
    private Collection<Authority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    @Override
    public String toString() {
        return "LoginUser@" + hashCode() +
                "(" + (isNew() ? "transient" : "persistent") + ")" +
                "[id=" + id +
                ", username=" + username +
                ", password=" + password +
                ", name=" + name +
                ", organization=" + organization +
                "]";
    }
}
