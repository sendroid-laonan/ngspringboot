package com.sendroids.website.controller;

import com.sendroids.website.domain.Comment;
import com.sendroids.website.domain.HttpMsg;
import com.sendroids.website.domain.Product;
import com.sendroids.website.service.ProductService;
import com.sendroids.website.util.UploadUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
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
        product.getComments().forEach(comment -> comment.setProduct(null));
        response.setHeader("Access-Control-Allow-Origin", "*");
        return product;
    }

    @GetMapping("/batch")
    @ResponseBody
    public List<Product> searchProducts(HttpServletResponse response){
        List<Product> products = productService.findAll().orElse(new ArrayList<>());
        products.forEach(
                product -> product.getComments().forEach(
                        comment -> comment.setProduct(null)));
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

    /**
     * 修改商品信息
     * @param product       商品对象
     * @param response      response
     * @return              如果修改成功返回success
     */
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

    /**
     * 根据ID删除商品
     * @param id            商品ID
     * @param response      response
     * @return              默认删除成功
     */
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

    /**
     * 根据商品ID获取与本商品相关的所有评论
     * @param id            商品ID
     * @param response      response
     * @return              评论集合
     */
    @GetMapping(value = "/comments")
    @ResponseBody
    public List<Comment> searchComments(@RequestParam("id")long id,
                                        HttpServletResponse response){
        Product product = productService.findById(id).orElseThrow(NullPointerException::new);
        product.getComments().forEach(comment -> comment.setProduct(null));
        response.setHeader("Access-Control-Allow-Origin", "*");
        return product.getComments();
    }

    /**
     * 添加商品评论
     * @param comment       评论
     * @param response      response
     * @return              如果评论插入成功就返回success
     */
    @PostMapping(value = "/comment", produces = {"application/json;charset=utf-8"})
    @ResponseBody
    public HttpMsg addComment(@RequestBody Comment comment,
                              HttpServletResponse response){
        String msg = "error";
        Product product = productService.findById(comment.getProduct().getId()).orElse(new Product());
        comment.setProduct(product);
        Comment newComment = productService.addComment(comment).orElse(new Comment());
        response.setHeader("Access-Control-Allow-Origin", "*");
        if(newComment.getId() != null){
            msg = "success";
        }
        HttpMsg httpMsg = new HttpMsg();
        httpMsg.setInfo(msg);
        return httpMsg;
    }

    /**
     * 上传聊天图片
     * 如需加密，参考惠东PlanController上传加密
     * @param file              图片
     * @param response          response
     * @return                  上传成功或者失败的信息
     * @throws IOException      IO异常
     */
    @PostMapping(value = "/upload")
    @ResponseBody
    public HttpMsg uploadChatImage(MultipartFile file,
                                   HttpServletResponse response) throws IOException {
        Calendar cal = Calendar.getInstance();
        String url = UploadUtil.uploadImage(file);
        url = "http://www.meixiangdaoba.com/product/preview?urlPath=product/" + cal.get(Calendar.YEAR) + "/" + url;
        response.setHeader("Access-Control-Allow-Origin", "*");
        HttpMsg httpMsg = new HttpMsg();
        httpMsg.setInfo(url);
        return httpMsg;
    }

    /**
     * 浏览图片
     * 截止 2018/06/21 发送方和接收方都各自访问一次，之后去掉发送方的请求（三级缓存）
     * 截止 2018/06/28 只有接收方访问一次，发送方本地转存，在上传成功之前就显示，无需访问此接口
     * 如需解密，参考惠东项目PlanController解密下载
     * @param urlPath           文件相对路径
     * @return                  图片
     * @throws IOException      IO异常
     */
    @GetMapping(value = "/preview", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<org.springframework.core.io.Resource> preview(String urlPath) throws IOException {
        String filePath = new File("").getCanonicalPath() + "/" + urlPath;
        InputStream inputStream = new FileInputStream(new File(filePath));
        InputStreamResource inputStreamResource = new InputStreamResource(inputStream);
        HttpHeaders httpHeaders = new HttpHeaders();
        return new ResponseEntity<>(inputStreamResource, httpHeaders, HttpStatus.OK);
    }
}
