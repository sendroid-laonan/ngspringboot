package com.sendroids.website.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "path")
public class Path {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private String color;

    private int width;

    private String[] data;

    @OneToOne(mappedBy="path")
    private MessageInfo messageInfo;

    public String toString(){
        return "'id':" + id +
                ",'color':'" + color +
                "','width':" + width +
                ",'data':[" + formatData(data) +
                "]";
    }

    public String formatData(String[] data){
        String finalData;
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("\"").append(data[0]).append("\"");
        for(int i = 1; i < data.length; i++){
            stringBuilder.append(",\"").append(data[i]).append("\"");
        }
        finalData = stringBuilder.toString();
        return finalData;
    }
}
