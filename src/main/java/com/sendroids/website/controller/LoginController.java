package com.sendroids.website.controller;

import com.sendroids.website.domain.HttpMsg;
import com.sendroids.website.domain.Product;
import com.sendroids.website.domain.user.LoginUser;
import com.sendroids.website.service.LoginService;
import com.sendroids.website.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Objects;

@Slf4j
@RestController
@RequestMapping(value = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping(value = "/login", produces = {"application/json;charset=utf-8"})
    @ResponseBody
    public HttpMsg loginUser(@RequestBody LoginUser user,
                              HttpServletResponse response){
        HttpMsg msg = new HttpMsg();
        LoginUser loginUser = loginService.findUserByUsername(user.getUsername());
        response.setHeader("Access-Control-Allow-Origin", "*");
        if(loginUser != null && Objects.equals(loginUser.getPassword(), user.getPassword())){
            msg.setInfo("success");
        }else {
            msg.setInfo("error");
        }
        return msg;
    }
}
