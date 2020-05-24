package com.beta.demo.component.center;

import com.beta.demo.bean.Goods;
import com.beta.demo.bean.TempUser;
import com.beta.demo.bean.Trolley;
import com.beta.demo.component.service.SComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequestMapping("/component")
@RestController
@CrossOrigin
public class CComponent {
    @Autowired
    SComponent component;

    @GetMapping("/login")
    public Boolean login(TempUser tempUser, HttpServletRequest request) {
        String username = tempUser.getUsername();
        if (username.length() > 0) {
            return component.login(tempUser, request);
        }
        return false;
    }

    @GetMapping("/userInfo")
    public TempUser userInfo(String username) {
        return component.userInfo(username);
    }

    @GetMapping("/updateName")
    public Boolean updateName(String updatename, String username) {
        return component.updateName(updatename, username);
    }

    @GetMapping("/addMoney")
    public Boolean addMoney(String username, Float money) {
        if(!StringUtils.isEmpty(money)){
            return component.addMoney(username, money);
        }
        return false;
    }

    @GetMapping("/addGoods")
    public Boolean addGoods(Goods goods) {
        return component.addGoods(goods);
    }

    @GetMapping("/findGoods")
    public List<Goods> findGoods() {
        return component.findGoods();
    }

    @GetMapping("/buy")
    public Boolean buy(Integer count, String username, String goodsname) {
        return component.buy(username, goodsname, count);
    }

    @GetMapping("/userTrolley")
    public List<Trolley> userTrolley(String username) {
        return component.userTrolley(username);
    }
}
