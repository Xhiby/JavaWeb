package main.web;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import main.mapper.TisMapper;
import main.pojo.Tis;
import main.mapper.UserMapper;
import main.pojo.User;
import net.sf.json.JSONObject;
   
@RestController
public class IndexController {
    @Autowired 
    TisMapper tismapper;
    @Autowired 
    UserMapper usermapper;
    
    
    @RequestMapping("/addTextTis")
    public String addTis(@RequestBody Tis c) throws Exception {
    	tismapper.add(c);
    	return "发布成功";
    }
    
    @RequestMapping(value = "/uploadUserImg", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, String> uploadPhoto(MultipartFile photo, HttpServletRequest request) {
        Map<String, String> ret = new HashMap<String, String>();
        if (photo == null) {
            ret.put("type", "error");
            ret.put("msg", "选择要上传的文件！");
            return ret;
        }
        if (photo.getSize() > 1024 * 1024 * 10) {
            ret.put("type", "error");
            ret.put("msg", "文件大小不能超过10M！");
            return ret;
        }
        //获取文件后缀
        String suffix = photo.getOriginalFilename().substring(photo.getOriginalFilename().lastIndexOf(".") + 1, photo.getOriginalFilename().length());
        if (!"jpg,jpeg,gif,png".toUpperCase().contains(suffix.toUpperCase())) {
            ret.put("type", "error");
            ret.put("msg", "请选择jpg,jpeg,gif,png格式的图片！");
            return ret;
        }
        //获取项目根目录加上图片目录
        String savePath = request.getSession().getServletContext().getRealPath("/") + "/user_upload_img/";
        File savePathFile = new File(savePath);
        if (!savePathFile.exists()) {
            //若不存在该目录，则创建目录
            savePathFile.mkdir();
        }
        String filename = new Date().getTime() + "." + suffix;
        try {
            //将文件保存指定目录
            photo.transferTo(new File(savePath + filename));
        } catch (Exception e) {
            ret.put("type", "error");
            ret.put("msg", "保存文件异常！");
            e.printStackTrace();
            return ret;
        }
        
        ret.put("type", "success");
        ret.put("msg", "上传图片成功！");
        ret.put("filepath", request.getSession().getServletContext().getContextPath() + "/user_upload_img/");
        ret.put("filename", filename);
        return ret;
    }
    
    @RequestMapping("/uploadUserSure")
    public String uploadUserSure(@Param("src") String src,@Param("userid") int userid) throws Exception {
    	usermapper.updateimg(src,userid);
    	return "头像修改成功";
    }
    
    
    @RequestMapping(value = "/uploadTitImg", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, String> uploadTisPhoto(MultipartFile photo, HttpServletRequest request) {
        Map<String, String> ret = new HashMap<String, String>();
        if (photo == null) {
            ret.put("type", "error");
            ret.put("msg", "选择要上传的文件！");
            return ret;
        }
        if (photo.getSize() > 1024 * 1024 * 10) {
            ret.put("type", "error");
            ret.put("msg", "文件大小不能超过10M！");
            return ret;
        }
        //获取文件后缀
        String suffix = photo.getOriginalFilename().substring(photo.getOriginalFilename().lastIndexOf(".") + 1, photo.getOriginalFilename().length());
        if (!"jpg,jpeg,gif,png".toUpperCase().contains(suffix.toUpperCase())) {
            ret.put("type", "error");
            ret.put("msg", "请选择jpg,jpeg,gif,png格式的图片！");
            return ret;
        }
        //获取项目根目录加上图片目录
        String savePath = request.getSession().getServletContext().getRealPath("/") + "/user_upload_tis/";
        File savePathFile = new File(savePath);
        if (!savePathFile.exists()) {
            //若不存在该目录，则创建目录
            savePathFile.mkdir();
        }
        String filename = new Date().getTime() + "." + suffix;
        try {
            //将文件保存指定目录
            photo.transferTo(new File(savePath + filename));
        } catch (Exception e) {
            ret.put("type", "error");
            ret.put("msg", "保存文件异常！");
            e.printStackTrace();
            return ret;
        }
        
        ret.put("type", "success");
        ret.put("msg", "上传图片成功！");
        ret.put("filepath", request.getSession().getServletContext().getContextPath() + "/user_upload_tis/");
        ret.put("filename", filename);
        return ret;
    }
    
    @RequestMapping("/uploadTisUserSure")
    public String uploadTisUserSure(@Param("src") String src,@Param("userid") int userid) throws Exception {
    	usermapper.updateimg(src,userid);
    	return "头像修改成功";
    }
    
    
    
    @RequestMapping("/deleteTis")
    public String deleteTis(@RequestParam("id") int id) throws Exception {
    	tismapper.del(id);
    	return "删除成功";
    }
    
    
    @RequestMapping("/updateTis")
    public String updateTis(Tis c) throws Exception {
    	tismapper.update(c);
    	return "update success";
    }

      
    @RequestMapping("/listTis")
    public List<Tis> listTis(Model m) throws Exception {
        List<Tis> cs = tismapper.findAll();
        return cs;
    }
    @RequestMapping("/userTis")
    public List<Tis> userTis(@RequestParam("username") String username) throws Exception {
        List<Tis> cs = tismapper.findByUserName(username);
        return cs;
    }
      
}