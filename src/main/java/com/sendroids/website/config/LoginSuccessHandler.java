package com.sendroids.website.config;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 自定义登录请求类
 */
@Component
public class LoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    //实现保存请求的逻辑

    private RequestCache requestCache = new HttpSessionRequestCache();

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)
            throws ServletException, IOException {
//        SavedRequest savedRequest = requestCache.getRequest(request, response);
//        生成host
        String host = request.getHeader("origin");
        if (host == null) {
            host = request.getHeader("referer").substring(0, request.getHeader("referer").lastIndexOf("/"));
        }
        //生成targetUrl
//        String targetUrl = host + "/town/todolist";
//        if (savedRequest != null) {
//            targetUrl = savedRequest.getRedirectUrl();
//        }
        //get目标url参数
        String targetUrlParameter = getTargetUrlParameter();
        if (isAlwaysUseDefaultTargetUrl()
                || (targetUrlParameter != null
                && StringUtils.hasText(request.getParameter(targetUrlParameter)))) {
            requestCache.removeRequest(request, response);
            super.onAuthenticationSuccess(request, response, authentication);

            return;
        }

        clearAuthenticationAttributes(request);
        //重定向
//        request.setAttribute("redirectUrl", targetUrl);
        String defaultUrl = host + "/postLogin";
        logger.debug("Redirecting to DefaultSaveRequest Url: " + defaultUrl);

//        targetUrl = defaultUrl + "?link=" + targetUrl;
        getRedirectStrategy().sendRedirect(request, response, defaultUrl);
    }

    @Override
    public void setRequestCache(RequestCache requestCache) {
        this.requestCache = requestCache;
    }
}
