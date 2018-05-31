package com.sendroids.website.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * 二手交易平台用的
 * 聊天信息
 * 2018/05/30 劳楠
 * */

@Getter
@Setter
@Entity
@Table(name = "contact_msg")
public class ContactMsg {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    private String msg;

    private String  sendDate;

    private String sessionId;

    public String toString(){
        return "{'id':" + id + "," +
                "'msg':\"" + msg + "\"," +
                "'sendDate':\"" + sendDate + "\"," +
                "'sessionId':\"" + sessionId + "\"}";
    }
}
