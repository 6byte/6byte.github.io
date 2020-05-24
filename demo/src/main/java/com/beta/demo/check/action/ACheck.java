package com.beta.demo.check.action;

import java.util.List;

public interface ACheck {
    //   md5转换
    String toMd5(String string);

    //    sql
    List<String> execSql(String sql);

    /*
     * 功能:
     *      1.往Redis添加数据
     * 参数:
     *      (String)key:需要添加的key
     *      (String)value:需要添加的值
     * 返回值:Boolean
     *      true:成功
     *      false:失败
     * */
    Boolean setData(String key,String value);


    /*
     * 功能:
     *      1.查询Redis数据
     * 参数:
     *      (String)data:需要查询的Key
     * 返回值:
     *      String:key对应的值
     * */
    String getData(String data);
}
