package com.sendroids.website.controller;

import com.sendroids.website.domain.Product;
import com.sendroids.website.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Controller
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/product")
    @ResponseBody
    Product searchProduct(@RequestParam("id")long id,
                          HttpServletResponse response){
        Product product = productService.findById(id).orElseThrow(NullPointerException::new);
        response.setHeader("Access-Control-Allow-Origin", "*");
        return product;
    }

    @GetMapping("/products")
    @ResponseBody
    List<Product> searchProducts(HttpServletResponse response){
        List<Product> products = productService.findAll().orElse(new ArrayList<>());
        response.setHeader("Access-Control-Allow-Origin", "*");
        return products;
    }
}
