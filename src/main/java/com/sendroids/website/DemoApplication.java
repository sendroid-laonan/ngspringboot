package com.sendroids.website;

import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.annotation.OnEvent;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.sendroids.website.domain.ContactMsg;
import com.sendroids.website.domain.MessageInfo;
import org.apache.tomcat.jni.Socket;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.EventListener;

@SpringBootApplication
public class DemoApplication {


    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);

         /*
         * 创建Socket，并设置监听端口
         */
        Configuration config = new Configuration();
        //设置主机名
        config.setHostname("localhost");
        //设置监听端口
        config.setPort(9090);
        // 协议升级超时时间（毫秒），默认10秒。HTTP握手升级为ws协议超时时间
        config.setUpgradeTimeout(10000);
        // Ping消息超时时间（毫秒），默认60秒，这个时间间隔内没有接收到心跳消息就会发送超时事件
        config.setPingTimeout(180000);
        // Ping消息间隔（毫秒），默认25秒。客户端向服务器发送一条心跳消息间隔
        config.setPingInterval(60000);
        // 连接认证，这里使用token更合适
        config.setAuthorizationListener(new AuthorizationListener() {
            @Override
            public boolean isAuthorized(HandshakeData data) {
                // String token = data.getSingleUrlParam("token");
                // String username = JWTUtil.getSocketUsername(token);
                // return JWTUtil.verifySocket(token, "secret");
                return true;
            }
        });

        final SocketIOServer server = new SocketIOServer(config);

        /*
         * 添加连接监听事件，监听是否与客户端连接到服务器
         */
        server.addConnectListener(new ConnectListener() {
            @Override
            public void onConnect(SocketIOClient client) {
                // 判断是否有客户端连接
                if (client != null) {
                    System.out.println("连接成功。clientId = " + client.getSessionId().toString());
                    client.joinRoom("1");
                    server.getBroadcastOperations().sendEvent("status", client.getSessionId().toString());
                } else {
                    System.out.println("并没有人连接上。。。");
                    server.getBroadcastOperations().sendEvent("status", "failed");
                }
            }
        });

        // 添加事件监听
        server.addEventListener("join", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String user,
                               AckRequest ackRequest)
                    throws Exception {
                System.out.println("收到客户端加入消息：" + user);
                server.getBroadcastOperations().sendEvent("user", user + "加入房间");
            }
        });

        // 添加事件监听
        server.addEventListener("chatMessage", MessageInfo.class, new DataListener<MessageInfo>() {
            @Override
            public void onData(SocketIOClient socketIOClient, MessageInfo message,
                               AckRequest ackRequest)
                    throws Exception {
                System.out.println("收到客户端消息：" + message.toString());
                server.getBroadcastOperations().sendEvent("message", message.toString().replace('\'','\"'));
            }
        });

        // 添加事件监听
        server.addEventListener("Broadcast information", ContactMsg.class, new DataListener<ContactMsg>() {
            @Override
            public void onData(SocketIOClient socketIOClient, ContactMsg message,
                               AckRequest ackRequest)
                    throws Exception {
                System.out.println("收到发送一方的消息：" + message.toString().replace('\'','\"'));
                server.getBroadcastOperations().sendEvent("Receive information", message.toString().replace('\'','\"'));
                System.out.println("广播给同一房间的其他用户");
            }
        });


        /*
         * 断开连接
         */
        server.addDisconnectListener(new DisconnectListener() {
            @Override
            public void onDisconnect(SocketIOClient client) {
                System.out.println("服务器收到断线通知... sessionId=" + client.getSessionId());
            }
        });

        //启动服务
        server.start();
    }

}
