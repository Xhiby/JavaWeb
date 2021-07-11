package main.web;

import java.util.Iterator;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.mapper.UserMapper;
import main.pojo.User;
import net.sf.json.JSONObject;
   
@RestController
public class LoginController {
    @Autowired 
    UserMapper usermapper;
    
    /*
    @RequestMapping("/addTextTis")
    public String addTis(@RequestBody Tis c) throws Exception {
    	tismapper.add(c);
    	return "发布成功";
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
    */

      
    @RequestMapping("/userLogin")
    public List<User> userTis(@Param("username") String username,@Param("password") String password) throws Exception {
        List<User> cs = usermapper.userLogin(username,password);

		Iterator<User> it = cs.iterator();
		// 判断能否移动
		if (it.hasNext()) {
			while (it.hasNext()) {
				// 移动指针到下一条数据，同时获取数据
				User p = it.next();
				System.out.println(p.toString());
			}
		} else {
			usermapper.add(username, password);
			cs = usermapper.userLogin(username,password);
			return cs;
		}
		return cs;
	}

}