package com.sendroids.website.util;

import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.util.Calendar;

public class UploadUtil {

    public static String uploadImage(MultipartFile file) throws IOException {
        return startUpload(file);
    }

    private static String startUpload(MultipartFile multipartFile) throws IOException {
        String stateCodeOrTransferFileName;
        String fileName = multipartFile.getOriginalFilename();
            Calendar cal = Calendar.getInstance();
            File file = new File("");
            String realPath = file.getAbsolutePath() + "/product/" + cal.get(Calendar.YEAR) + "/";
            try {
                File targetFile = new File(realPath + fileName);
                File fileParent = targetFile.getParentFile();
                if (!fileParent.exists()) { //没有就新建
                    fileParent.mkdirs();
                }else if(targetFile.isFile()){  //有的话删掉
                    targetFile.delete();
                }
                multipartFile.transferTo(targetFile);
            } catch (IOException ex) {
                System.out.println("上传失败...");
                ex.printStackTrace();
            } finally {
                stateCodeOrTransferFileName = fileName;
            }
        return stateCodeOrTransferFileName;
    }
}
