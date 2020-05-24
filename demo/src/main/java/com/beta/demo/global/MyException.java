package com.beta.demo.global;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

//@RestControllerAdvice
public class MyException {
    @ExceptionHandler(value = Exception.class)
    public Map error(Exception e){
        Map err = new HashMap<>();
        if(e instanceof  NullPointerException){
            err.put("DemoErr","NullPointerException");
        }
        return err;
    }
}
