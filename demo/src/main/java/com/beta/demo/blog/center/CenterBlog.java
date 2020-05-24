package com.beta.demo.blog.center;

import com.beta.demo.bean.Article;
import com.beta.demo.blog.service.ServBlog;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("/blog")
@RestController
public class CenterBlog {
    @Autowired
    ServBlog servBlog;

    @GetMapping("/addArticle")
    public Boolean addArticle(@NonNull Article article) {
        return servBlog.addArticle(article);
    }

    @GetMapping("/findArticle")
    public List<Article> findArticle(@NonNull Integer start) {
        return servBlog.findArticle(start, 0);
    }

    @GetMapping("/deleteArticle")
    public void deleteArtcle(@NonNull Integer id) {
        System.out.println(id);
        servBlog.deleteArticle(id);
    }

    @GetMapping("/updateArticle")
    public void updateArticle(Article article) {
        servBlog.updateArticle(article);
    }

    @GetMapping("/findArticleById")
    public Article findArticleById(@NonNull Integer id) {
        return servBlog.findArticleById(id);
    }

}
