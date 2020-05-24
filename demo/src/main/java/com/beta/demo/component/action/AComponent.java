package com.beta.demo.component.action;

import com.beta.demo.bean.Goods;
import com.beta.demo.bean.TempUser;
import com.beta.demo.bean.Trolley;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface AComponent {
    Boolean login(TempUser tempUser,HttpServletRequest request);
    TempUser userInfo(String username);
    Boolean updateName(String updatename,String username);
    Boolean addMoney(String username,Float money);
    Boolean addGoods(Goods goods);
    List<Goods> findGoods();
    Boolean buy(String  username,String  goodsname,Integer count);
    List<Trolley> userTrolley(String username);
}
