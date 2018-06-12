package com.sendroids.website.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.ServletListenerRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
@Order(Ordered.HIGHEST_PRECEDENCE)
public class MultiHttpScecurityConfig {

    private static final String[] UNSECURED_RESOURCE_LIST = new String[]{
            "/dist/**.js",
            "/dist/**"

    };

    private static final String[] UNAUTHORIZED_RESOURCE_LIST = new String[]{
            "/",
            "/index",
            "/user/login",
            "/login"
    };


    @Order(Ordered.HIGHEST_PRECEDENCE)
    @Configuration
    protected static class ExternalAuthenticationSecurity extends GlobalAuthenticationConfigurerAdapter {

        @Qualifier("dataSource")
        @Autowired
        private DataSource dataSource;

        @Override
        public void init(final AuthenticationManagerBuilder auth) throws Exception {
            final String usersByUsernameQuery = "SELECT username, password, enabled " +
                    "FROM users WHERE username = ? ";
            final String authoritiesByUsernameQuery = "SELECT username, authority " +
                    "FROM user_authority INNER JOIN users ON user_authority.user_id = users.id " +
                    "INNER JOIN authority ON user_authority.authority_id = authority.id " +
                    "WHERE username = ? ";

            final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            JdbcUserDetailsManager userDetailsService = new JdbcUserDetailsManager();
            userDetailsService.setDataSource(dataSource);
            userDetailsService.setAuthoritiesByUsernameQuery(authoritiesByUsernameQuery);
            userDetailsService.setUsersByUsernameQuery(usersByUsernameQuery);
            userDetailsService.setRolePrefix("ROLE_");
            auth
                    .userDetailsService(userDetailsService)
                    .passwordEncoder(passwordEncoder)
                    .and()
                    .jdbcAuthentication()
                    .dataSource(dataSource)
                    .usersByUsernameQuery(usersByUsernameQuery)
                    .passwordEncoder(passwordEncoder)
                    .authoritiesByUsernameQuery(authoritiesByUsernameQuery)
                    .rolePrefix("ROLE_")
            ;
        }

        @Override
        public void configure(AuthenticationManagerBuilder auth) throws Exception {

        }
    }

    @Configuration
    @Order(1)
    @Profile({"dev", "test", "live"})
    public static class WebSecurityConfig extends WebSecurityConfigurerAdapter {

        @Value("${spring.profiles.active}")
        private String activeProfile;


        @Qualifier(value = "loginSuccessHandler")
        @Autowired
        LoginSuccessHandler loginSuccessHandler;

        @Override
        public void configure(WebSecurity web) throws Exception {
            web
                    .ignoring()
                    .antMatchers(UNSECURED_RESOURCE_LIST);
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .csrf().disable()
//                    // ignore our stomp endpoints since they are protected using Stomp headers
//                    .ignoringAntMatchers("/ws/**")
//                    .ignoringAntMatchers("/wss/**")
//                    .ignoringAntMatchers("/app/**")
//                    .ignoringAntMatchers("/queue/**")
//                    .ignoringAntMatchers("/topic/**")
//                    .ignoringAntMatchers("/exchange/**")
//                    .and()
                    .headers()
                    // allow same origin to frame our site to support iframe SockJS
                    .frameOptions()
                    .sameOrigin()
                    .and()
                    .authorizeRequests()
                    .antMatchers(UNAUTHORIZED_RESOURCE_LIST)
                    .permitAll()
                    .antMatchers("/git", "/manage", "/manage/**", "/product/**", "/user/**")
                    .permitAll()
//                    .antMatchers("/town/**", "/town")
//                    .hasRole(Authority.Role.USER.toString())
//                    .antMatchers("/forestry", "/forestry/**")
//                    .hasAnyRole(Authority.Role.SUPER_FORESTRY.toString(), Authority.Role.FORESTRY_AUDIT.toString(), Authority.Role.FORESTRY_CREATER.toString(),
//                            Authority.Role.FORESTRY_DOCUMENT.toString())
//                    .antMatchers("/admin","/ratio")
//                    .hasRole(Authority.Role.SUPER_FORESTRY.toString())
//                    .antMatchers("/archive")
//                    .hasRole(Authority.Role.FORESTRY_DOCUMENT.toString())
                    .anyRequest()
                    .authenticated()
                    .and()
                    .formLogin()
                    .loginPage("/index").permitAll()
                    .loginProcessingUrl("/index")
                    .defaultSuccessUrl("/index", true)
                    .and()
                    .headers()
                    .cacheControl()
                    .and()
                    .frameOptions()
                    .deny()
                    .and()
                    .exceptionHandling()
                    .accessDeniedPage("/error")
                    .and()
                    .logout()
                    .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                    .logoutSuccessUrl("/?logout")
                    .and()
                    .sessionManagement()
                    .maximumSessions(1)
                    .expiredUrl("/login?expired");
        }
    }

    @Bean
    public static ServletListenerRegistrationBean<HttpSessionEventPublisher> httpSessionEventPublisher() {
        return new ServletListenerRegistrationBean<>(new HttpSessionEventPublisher());
    }
}
