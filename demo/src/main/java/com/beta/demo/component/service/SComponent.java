package com.beta.demo.component.service;

import com.beta.demo.bean.Goods;
import com.beta.demo.bean.TempUser;
import com.beta.demo.bean.Trolley;
import com.beta.demo.component.action.AComponent;
import com.beta.demo.component.mapper.MComponent;
import com.beta.demo.global.Tools;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@Slf4j
public class SComponent implements AComponent {

    @Autowired
    MComponent user;

    /*
     * 功能:用户登录
     * 参数:tempUser:包含用户账号密码的Entity类
     * */
    @Override
    public Boolean login(TempUser tempUser, HttpServletRequest request) {
        System.out.println(tempUser.getUsername() + tempUser.getPasswd());
        String username = tempUser.getUsername();
        String remoteAddr = Tools.getRemoteAddr(request);

        String id = Tools.getId();
        TempUser dataUser = user.findTmpUserByName(username);
        if (StringUtils.isEmpty(dataUser)) {
            tempUser.setMkey(id);
            tempUser.setIp(remoteAddr);
            user.insertTempUser(tempUser);
            return true;
        } else if (dataUser.getPasswd().equals(tempUser.getPasswd())) {
            return true;
        }
        return false;
    }

    @Override
    public TempUser userInfo(String username) {
        TempUser tempUser = user.findTmpUserByName(username);
        return tempUser;
    }

    @Override
    public Boolean updateName(String updatename, String username) {
        try {
            user.updateUsername(updatename, username);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public Boolean addMoney(String username,Float money) {
        log.info(username+money);
        try {
            user.addMoney(username, money);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

    @Override
    public Boolean addGoods(Goods goods) {
        try {
            user.addGoods(goods);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }

    }

    @Override
    public List<Goods> findGoods() {
        return user.findGoods();
    }
    /*
     * 功能:购买商品
     * 参数:
     *       (Integer)username:用户名
     *       (Integer)goodsname:商品名
     * 返回值:
     *       true：成功添加
     *       false:添加失败
     * */

    /*
     * 购买商品
     *       1.查询余额是否大于商品的价格
     *           true:仓库添加商品和用户的关系
     *           false:不准添加
     *       2.钱减少
     *       3.如果购物车中间有商品，增加数量
     * */
    @Transactional
    @Override
    public Boolean buy(String username, String goodsname, Integer count) {
        System.out.println(username + "--" + goodsname);
        Goods goods = user.findPrice(goodsname);
        Float price = goods.getPrice();
        TempUser tmpuser = user.findTmpUserByName(username);
        Integer money = tmpuser.getMoney();
        Trolley trolley = user.findTrolley(username,goodsname);
        if (money > price) {
//            如果购物车中存在商品，更新数量
            user.minMoney(username, price);
            if (StringUtils.isEmpty(trolley)) {

                user.addTrolley(username, goodsname);
                user.updateCount(count, goodsname, username);
            } else {

                user.updateCount(count, goodsname, username);
            }
            return true;
        }
        return false;
    }

    @Override
    public List<Trolley> userTrolley(String username) {
        try {
           return user.userTrolley(username);
        }
       catch (Exception e){
            log.warn(e.toString());
           return null;
       }

    }
}
