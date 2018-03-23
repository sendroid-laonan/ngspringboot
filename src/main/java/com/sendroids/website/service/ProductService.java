package com.sendroids.website.service;

import com.sendroids.website.domain.Product;
import com.sendroids.website.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Optional<Product> findById(long id){
        return productRepository.findById(id);
    }

    public Optional<List<Product>> findAll(){
        return Optional.of(productRepository.findAll());
    }

    public void add(Product product){
        productRepository.save(product);
    }
}
