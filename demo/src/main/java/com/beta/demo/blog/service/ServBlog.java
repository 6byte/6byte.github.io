package com.beta.demo.blog.service;

import com.beta.demo.bean.Article;
import com.beta.demo.blog.action.ActBlog;
import com.beta.demo.blog.mapper.MpBlog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServBlog implements ActBlog {

    @Value("${limit.count}")
    Integer count;

    @Autowired
    MpBlog mpBlog;

    @Override
    public Boolean addArticle(Article article) {
        try{
            mpBlog.addArticle(article);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public List<Article> findArticle(Integer start,Integer count1) {
      return  mpBlog.findArticle(start ,count );
    }

    @Override
    public void deleteArticle(Integer id) {
        mpBlog.deleteAritcle(id);
    }

    @Override
    public void updateArticle(Article article) {
        mpBlog.updateArticle(article);
    }

    @Override
    public Article findArticleById(Integer id) {
       return mpBlog.findArticleById(id);
    }
}
