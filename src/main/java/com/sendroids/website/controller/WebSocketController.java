package com.sendroids.website.controller;

import com.corundumstudio.socketio.*;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.sendroids.website.domain.ContactMsg;
import com.sendroids.website.domain.MessageInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/webSocket")
public class WebSocketController {

    public static void startServer(){
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
                    String roomName = client.getHandshakeData().getSingleUrlParam("room"); //传入的房间名，格式为（XXXXX-YYYYYY,分别指代双方的ID，谁ID谁就是XXXX，谁的ID大谁就是YYYYY）
                    client.joinRoom(roomName);
                    server.getRoomOperations(roomName)
                            .sendEvent("status", roomName); //向指定房间全员广播
                    System.out.println("连接成功。clientId = " + client.getSessionId().toString());
                } else {
                    System.out.println("并没有人连接上。。。");
                }
            }
        });

        // 添加事件监听
        server.addEventListener("join", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient client, String user,
                               AckRequest ackRequest)
                    throws Exception {
                String roomId;
                Long myId = Long.parseLong(user.substring(0, user.indexOf("-")));
                Long otherId = Long.parseLong(user.substring(user.indexOf("-") + 1));
                if(myId > otherId){
                    roomId = otherId + "-" + myId;
                }else {
                    roomId = myId + "-" + otherId;
                }
                System.out.println("收到客户端加入消息：" + myId);
                server.getRoomOperations(roomId).sendEvent("user", myId + "加入房间");
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

        /*
          添加发送信息事件监听，根据信息里面的sessionId向同一个房间里面的用户广播信息
         */
        server.addEventListener("Broadcast information", ContactMsg.class, new DataListener<ContactMsg>() {
            @Override
            public void onData(SocketIOClient socketIOClient, ContactMsg message,
                               AckRequest ackRequest)
                    throws Exception {
                System.out.println("收到发送一方的消息：" + message.toString().replace('\'','\"'));
                String sessionId = message.getSessionId();  //判断是否在同一个房间
                server.getRoomOperations(sessionId)         //向同一个房间内的人广播信息
                        .sendEvent("Receive information", message.toString().replace('\'', '\"'));
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

    @GetMapping("/join/{userId}")
    public void joinRoom(@PathVariable("userId") long userId){

    }
}
