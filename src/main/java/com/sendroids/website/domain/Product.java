package com.sendroids.website.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import java.io.Serializable;

@Entity
@Getter
@Setter
public class Product extends BaseEntity implements Serializable{

    private String title;

    private double price;

    private String url;

    private String remark;

    private int rating;

    public String toString(){
        return "" + id +
                "," + title +
                "," + price +
                "," + url +
                "," + rating +
                "," + remark +
                "";
    }
}
