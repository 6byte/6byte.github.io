package com.beta.demo.global.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
public class Error {
    //匹配com.learn.service.impl包及其子包下的所有类的所有方法
    @Pointcut("execution(* com.beta.demo.blog.service.*.*(..))")
    public void executeService() {
    }

    @AfterThrowing(throwing = "ex", pointcut = "executeService()")
    public Boolean throwError(Exception ex) {
        log.info(ex.toString());
        return false;
    }
}
