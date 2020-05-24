package com.beta.demo.check.Service;

import com.beta.demo.check.action.ACheck;
import com.beta.demo.check.mapper.MCheck;
import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import redis.clients.jedis.Jedis;

import java.util.List;

@Slf4j
@Service
public class ServiceCheck implements ACheck {
    @Autowired
    MCheck mCheck;

    @Autowired
    Jedis jedis;

    //    MD5加密
    @Override
    public String toMd5(String md5) {
        String result = DigestUtils.md5DigestAsHex(md5.getBytes());
        return result;
    }

    @Override
    public List<String> execSql(String sql) {
        return mCheck.execSql(sql);
    }

    @Override
    public Boolean setData(String key, String value) {
        try {
            jedis.set(key, value);
        }
        catch (Exception e) {
            return false;
        }
        return true;
    }

    @Override
    public String getData(String key) {

        return jedis.get(key);
    }
}
