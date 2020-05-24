package com.beta.demo.component.mapper;

import com.beta.demo.bean.Goods;
import com.beta.demo.bean.TempUser;
import com.beta.demo.bean.Trolley;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MComponent {
    //    根据用户名查找
    @Select("select * from temp_users where username = #{username}")
    public TempUser findTmpUserByName(@Param("username") String username);

    //    添加实体类
    @Insert("insert into temp_users (username,passwd,ip,mkey,header) values (#{username},#{passwd},#{ip},#{mkey},#{header})")
    public void insertTempUser(TempUser tempUser);

    //    添加页面访问数量,总用户人数
    @Select("select count(username) as `userCount` , count(ip) as `ip` FROM `temp_users`")
    public List pageInfo();


    //    修改用户名
    @Update("update temp_users set username = #{updatename} where username = #{username}")
    public void updateUsername(@Param("updatename") String updatename, @Param("username") String username);

    //    加钱
    @Update("update temp_users set money = #{money} + money where username = #{username}")
    public void addMoney(@Param("username") String username, @Param("money") Float money);

    //    添加商品
    @Insert("insert into goods (name,price,img,`describe`)values(#{name},#{price},#{img},#{describe})")
    public void addGoods(Goods goods);

    //    查询所有商品
    @Select("select * from goods")
    public List<Goods> findGoods();

    /*
     * 购买商品
     *       1.查询余额是否大于商品的价格
     *           true:仓库添加商品和用户的关系
     *           false:不准添加
     *       2.
     * */


    /*
     * 1.根据商品名获取价钱
     * 2.根据用户名获取用户余额 √
     * 3.对比
     *       true：加入购物车
     *       false:禁止
     * */
//根据商品名获取价钱
    @Select("select * from goods where name = #{goodsname}")
    public Goods findPrice(String goodsname);

    //添加至购物车
    @Insert("insert into trolley (user_name,goods_name)values(#{user_name},#{goods_name})")
    public Boolean addTrolley(@Param("user_name") String username, @Param("goods_name") String goodsname);

//    查找购物车中是否有商品
    @Select(" select * from trolley where user_name = #{username} and goods_name = #{goodsname}")
    public Trolley findTrolley(@Param("username") String username, @Param("goodsname") String goodsname);

    @Update("update trolley set count = count + #{count} where goods_name = #{goodsname} and user_name = #{username}")
    public void updateCount(@Param("count")Integer count,@Param("goodsname") String goodsname,@Param("username") String username);

    @Update("update temp_users set money =money -  #{money} where username = #{username}")
    public void minMoney(@Param("username") String username, @Param("money") Float money);

    @Select("select goods_name,count from `trolley` where user_name = #{username} ")
    public List<Trolley> userTrolley(String username);
}

