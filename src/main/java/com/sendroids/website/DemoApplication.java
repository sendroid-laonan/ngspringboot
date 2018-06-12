package com.sendroids.website;

import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.annotation.OnEvent;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.sendroids.website.controller.WebSocketController;
import com.sendroids.website.domain.ContactMsg;
import com.sendroids.website.domain.MessageInfo;
import com.sun.xml.internal.bind.v2.TODO;
import org.apache.tomcat.jni.Socket;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.server.ServletServerHttpRequest;

import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.util.EventListener;
import java.util.UUID;

@SpringBootApplication
public class DemoApplication {


    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        WebSocketController.startServer();
    }

}
