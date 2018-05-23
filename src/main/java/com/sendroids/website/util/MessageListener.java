package com.sendroids.website.util;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.listener.DataListener;

public class MessageListener implements DataListener<String> {


    @Override
    public void onData(SocketIOClient client, String data, AckRequest ackSender) throws Exception {
        System.out.println(data);
    }


}
