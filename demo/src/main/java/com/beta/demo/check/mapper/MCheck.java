package com.beta.demo.check.mapper;


import com.beta.demo.bean.Check;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface MCheck {
    /*
     * 功能 :  执行任意函数
     * 参数 :
     *      参数一(sql):任意Sql语句
     *      返回值:数据库中的任意数据
     * */
    @Select("${sql}")
    public List<String> execSql(@Param("sql") String sql);


}
