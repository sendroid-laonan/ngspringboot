package com.sendroids.website.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "size")
public class Size {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private double width;

    private double height;

    @OneToOne(mappedBy="size")
    private MessageInfo messageInfo;

    public String toString(){
        return "'width':" + width +
                ",'height':" + height +
                "";
    }
}
