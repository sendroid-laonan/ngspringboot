package com.sendroids.website.config;

import org.hibernate.validator.HibernateValidator;
import org.springframework.beans.BeansException;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.http.MediaType;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.filter.HiddenHttpMethodFilter;
import org.springframework.web.servlet.config.annotation.*;
import org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver;

import javax.validation.Validator;
import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer, ApplicationContextAware {
    private ApplicationContext applicationContext;

    /**
     * 解决resultful风格API
     * @return
     */
    @Bean
    public FilterRegistrationBean filterRegistration() {
        final FilterRegistrationBean filterRegistration = new FilterRegistrationBean();
        filterRegistration.setFilter(new HiddenHttpMethodFilter());
        return filterRegistration;
    }

    /**
     * 注入application
     * @param applicationContext
     * @throws BeansException
     */
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    /**
     * 添加controller
     * @param registry
     */
    @Override
    public void addViewControllers(final ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/index").setViewName("index");
    }


    /**
     * 内容裁决参数  需要启用 ViewResolverRegistry  enableContentNegotiation
     * @param
     */
    @Override
    public void configureContentNegotiation(final ContentNegotiationConfigurer configurer) {
        final Map<String, MediaType> mediaTypes = new HashMap<>(5);
        //.json 后缀 当成application/json
        mediaTypes.put("json", MediaType.APPLICATION_JSON);
        mediaTypes.put("xml", MediaType.APPLICATION_XML);

        configurer
                .mediaTypes(mediaTypes)
                .favorPathExtension(true)
                .favorParameter(true)
                .ignoreAcceptHeader(false)
        ;
    }

    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/dist/**").addResourceLocations("classpath:/dist/");
    }

    @Bean
    public ResourceBundleMessageSource messageSource() {
        final ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.setBasename("messages/messages");
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }

    @Bean
    public Validator validator() {
        LocalValidatorFactoryBean validatorFactory = new LocalValidatorFactoryBean();
        validatorFactory.setProviderClass(HibernateValidator.class);
        validatorFactory.setValidationMessageSource(messageSource());
        return validatorFactory;
    }

//    @Bean
//    public DispatcherServlet getDispatcherServlet(){
//
//        DispatcherServlet dispatcherServlet = new DispatcherServlet();
//        dispatcherServlet.setDetectAllViewResolvers(getDispatcherServlet());
//        return  dispatcherServlet;
//    }
//
//    public InternalResourceViewResolver getInternalResourceViewResolver(){
//        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
//        resolver.setPrefix("/WEB-INF/");
//        resolver.setSuffix(".html");
//        return resolver;
//    }

    @Bean
    public SpringResourceTemplateResolver templateResolver() {
        SpringResourceTemplateResolver templateResolver = new SpringResourceTemplateResolver();

        templateResolver.setApplicationContext(this.applicationContext);
        templateResolver.setPrefix("classpath:/dist/");
        templateResolver.setSuffix(".html");
        //LEGACY
        templateResolver.setTemplateMode("HTML");
        templateResolver.setCacheable(false);
        templateResolver.setCharacterEncoding("UTF-8");
        return templateResolver;
    }


//    @Bean
//    public SpringTemplateEngine templateEngine() {
//        final SpringTemplateEngine templateEngine = new SpringTemplateEngine();
//        templateEngine.setTemplateResolver(templateResolver());
//
//        final Set<IDialect> dialects = new LinkedHashSet<>();
//        dialects.add(new TilesDialect());
//        dialects.add(new SpringSecurityDialect());
//        dialects.add(new ConditionalCommentsDialect());
//
//        templateEngine.setAdditionalDialects(dialects);
//
//        final StandardCacheManager cacheManager = new StandardCacheManager();
//        cacheManager.setTemplateCacheMaxSize(50);
//
//        templateEngine.setCacheManager(cacheManager);
//        return templateEngine;
//    }


}
