package com.sendroids.website.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@Getter
@Setter
public class Comment extends BaseEntity {

    private String info;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE})
    @PrimaryKeyJoinColumn(name = "comment_id")
    private Product product;

    public String toString() {
        return "" + id +
                "," + info +
                "";
    }
}
