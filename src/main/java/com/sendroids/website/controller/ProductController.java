package com.sendroids.website.controller;

import com.sendroids.website.domain.Product;
import com.sendroids.website.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Controller
@Slf4j
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/single")
    @ResponseBody
    public Product searchProduct(@RequestParam("id")long id,
                          HttpServletResponse response){
        Product product = productService.findById(id).orElseThrow(NullPointerException::new);
        response.setHeader("Access-Control-Allow-Origin", "*");
        return product;
    }

    @GetMapping("/batch")
    @ResponseBody
    public List<Product> searchProducts(HttpServletResponse response){
        List<Product> products = productService.findAll().orElse(new ArrayList<>());
        response.setHeader("Access-Control-Allow-Origin", "*");
        return products;
    }

    @PostMapping("/add")
    public @ResponseBody String addProduct(@Param("product") Product product,
                             HttpServletResponse response){
        System.out.println(666);
        response.setHeader("Access-Control-Allow-Origin", "*");
        return "success";
    }
}
