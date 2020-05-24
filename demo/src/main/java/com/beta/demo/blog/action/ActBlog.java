package com.beta.demo.blog.action;

import com.beta.demo.bean.Article;

import java.util.List;

public interface ActBlog {
    public Boolean addArticle(Article article);
    public List<Article> findArticle(Integer start,Integer count);
    public void deleteArticle(Integer id);
    public void updateArticle(Article article);
    public Article findArticleById(Integer id);
}
