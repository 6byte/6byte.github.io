package com.beta.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
        //配置类注解
class WebConfig extends WebMvcConfigurationSupport {

    @Override
    public void addResourceHandlers( ResourceHandlerRegistry registry ) {
        /**
         把F:\temp作为静态资源路径
         1.配置本地路径                 addResourceLocations
         addResourceLocations("file:" +"F:\temp" )
         2.配置静态资源访问路径         addResourceHandler
         addResourceHandler("/static/**")
         3.访问F:\temp中的img.jpg
         localhost:80/static/img.jpg
         ！！！
         addResourceLocations的参数要么要加上“classpath”表示相对路径，要么用file+绝对路径
         * */
        registry.addResourceHandler( "/static/**" ).addResourceLocations( "file:" + "D:\\Source\\Image\\" );
        super.addResourceHandlers( registry );
    }
}
