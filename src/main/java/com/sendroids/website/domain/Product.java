package com.sendroids.website.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
public class Product extends BaseEntity implements Serializable{

    private String title;

    private double price;

    private String url;

    private String remark;

    private double rating;

    @OneToMany(mappedBy = "product", cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE, CascadeType.REMOVE})
    private List<Comment> comments;

    public String toString(){
        return "" + id +
                "," + title +
                "," + price +
                "," + url +
                "," + remark +
                "," + rating +
                "";
    }
}
