package com.sendroids.website.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sendroids.website.domain.NamedEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.io.Serializable;
import java.util.Collection;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@JsonIgnoreProperties(value = {"users"})
public class Authority extends NamedEntity implements GrantedAuthority, Serializable {

    private String authority;

    @ManyToMany(mappedBy = "authorities")
    private Collection<LoginUser> users;

    public Authority() {
    }

    @Override
    public String getAuthority() {
        return this.authority;
    }

    public enum Role {
        // Others can be added here manually in the future.
        USER, SUPERUSER
    }
}
