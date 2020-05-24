package com.beta.demo.global;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import redis.clients.jedis.Jedis;

@Component
public class Config {
    /*
    * 功能:配置Redis
    * */
    @Bean
    public Jedis getRedis(){
        return  new Jedis("localhost", 6379);
    }
}
