package com.sendroids.website.controller;

import com.sendroids.website.domain.HttpMsg;
import com.sendroids.website.domain.Product;
import com.sendroids.website.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Slf4j
@RestController
@RequestMapping(value = "/product", produces = MediaType.APPLICATION_JSON_VALUE)
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

    @PostMapping(value = "/", produces = {"application/json;charset=utf-8"})
    @ResponseBody
    public HttpMsg addProduct(@RequestBody Product product,
                             HttpServletResponse response){
        String msg = "error";
        if(product.getUrl() == null || Objects.equals(product.getUrl(), "")){
            product.setUrl("http://placehold.it/820x230");
        }
        Product  newProduct = productService.add(product).orElse(new Product());
        response.setHeader("Access-Control-Allow-Origin", "*");
        if(newProduct.getId() != null){
            msg = "success";
        }
        HttpMsg httpMsg = new HttpMsg();
        httpMsg.setInfo(msg);
        return httpMsg;
    }

    @PutMapping(value = "/", produces = {"application/json;charset=utf-8"})
    @ResponseBody
    public HttpMsg updateProduct(@RequestBody Product product,
                                HttpServletResponse response){
        String  msg = "error";
        Product newProduct = productService.update(product).orElse(new Product());
        if(newProduct.getId() != null){
            msg = "success";
        }
        HttpMsg httpMsg = new HttpMsg();
        httpMsg.setInfo(msg);
        return httpMsg;
    }

    @DeleteMapping(value = "/")
    @ResponseBody
    public HttpMsg deleteProduct(@RequestParam("id") long id,
                                 HttpServletResponse response){
        String  msg = "success";
        productService.delete(id);
        HttpMsg httpMsg = new HttpMsg();
        httpMsg.setInfo(msg);
        return httpMsg;
    }
}
