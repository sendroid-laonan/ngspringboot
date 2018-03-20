package com.sendroids.website.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;

@MappedSuperclass
@Data
public class NamedEntity extends BaseEntity {

    @Column
    @NotNull
    protected String name;

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (!super.equals(obj))
            return false;
        if (getClass() != obj.getClass())
            return false;
        NamedEntity other = (NamedEntity) obj;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "NamedEntity@" + hashCode() +
                "(" + (isNew() ? "transient" : "persistent") + ")" +
                "[id=" + id +
                ", name=" + name +
                "]";
    }
}
