package main.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.web.bind.annotation.RequestParam;

import main.pojo.User;
 
@Mapper
public interface UserMapper {
	
    @Insert(" insert into user_tis ( username,password ) values (#{username},#{password}) ")
    public int add(@Param("username") String username,@Param("password") String password);
    
    
    /*
    @Delete(" delete from user_tis where id= #{id} ")
    public void del(int id);
    */
    
    
    @Update("update user_tis set userimg=#{0} where userid=#{1} ")
    public int updateimg(String userimg,int userid); 
    
    
    
    @Select("select * from user_tis where username= #{username} and password= #{password} ")
    public List<User> userLogin(@Param("username") String username,@Param("password") String password);

}