package com.sendroids.website.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "message_info")
public class MessageInfo {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @OneToOne
    @JoinColumn(name="path_id")
    private Path path;

    @OneToOne
    @JoinColumn(name="size_id")
    private Size size;

    private String drawer;

    public String toString(){
        return "{'path':{" + path.toString() +
                "},'size':{"+ size.toString() +
                "},'drawer':\""+ drawer +
                "\"}";
    }
}
