package com.sendroids.website.service;

import com.sendroids.website.domain.Comment;
import com.sendroids.website.domain.Product;
import com.sendroids.website.repository.CommentRepository;
import com.sendroids.website.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final CommentRepository commentRepository;

    @Autowired
    public ProductService(ProductRepository productRepository,
                          CommentRepository commentRepository) {
        this.productRepository = productRepository;
        this.commentRepository = commentRepository;
    }

    public Optional<Product> findById(long id){
        return productRepository.findById(id);
    }

    public Optional<List<Product>> findAll(){
        return Optional.of(productRepository.findAll());
    }

    public Optional<Product> add(Product product){
        return Optional.of(productRepository.save(product));
    }

    public Optional<Product> update(Product product){
        return Optional.of(productRepository.saveAndFlush(product));
    }

    public void delete(long id){
        productRepository.deleteById(id);
    }

    public Optional<Comment> addComment(Comment comment){
        return Optional.of(commentRepository.save(comment));
    }
}
