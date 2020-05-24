package com.beta.demo.blog.mapper;

import com.beta.demo.bean.Article;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface MpBlog {

    @Insert("insert into article (src,title,author,content,intro)values(#{src},#{title},#{author},#{content},#{intro})")
    public void addArticle(Article articleList);

    @Select("select * from article limit #{start} ,#{count}")
    public List<Article> findArticle(@Param("start") Integer start ,@Param("count")  Integer count);

    /*
    *   功能:根据id删除文章
    * */

    @Delete("delete from  article where id = #{id}")
    public void deleteAritcle(Integer id);

    /*
    *       功能:更新文章
    * */
    @Update("update article set title = #{title} , time = now() , intro = #{intro} ,src = #{src} ,content = #{content} where id = #{id}")
    public void updateArticle(Article article);

    /*
    *
    *       功能:根据ID查找文章
    * */
    @Select("select * from article where id = #{id}")
    public Article findArticleById(Integer id);
}
