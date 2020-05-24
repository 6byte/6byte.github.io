package com.beta.demo.check.center;

import com.beta.demo.check.Service.ServiceCheck;
import com.beta.demo.check.mapper.MCheck;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/check")
public class CenterCheck {

    @Autowired
    ServiceCheck scheck;

    @Autowired
    MCheck mCheck;

    //MD5加密
    @RequestMapping("/tomd5")
    public String tomd5(String md5) {
        if (!StringUtils.isEmpty(md5)) {
            return scheck.toMd5(md5);
        } else {
            throw new NullPointerException();
        }
    }

    /*
     * 功能:执行任意mysql语句
     * */
    @RequestMapping("/mysql")
    public List<String> execmysql(String mysql) {
        if (!StringUtils.isEmpty(mysql)) {
            return scheck.execSql(mysql);
        } else {
            throw new NullPointerException();
        }
    }

    /*
     * 功能:添加数据
     * */
    @RequestMapping("/setData")
    public Boolean setData( String key,  String value) {
        return scheck.setData(key, value);
    }

    /*
     * 功能:获取Key
     * */
    @RequestMapping("/getData")
    public String getData( String key) {
        return scheck.getData(key);
    }
}
