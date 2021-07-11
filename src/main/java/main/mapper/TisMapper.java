package main.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
 
import main.pojo.Tis;
 
@Mapper
public interface TisMapper {
    @Insert(" insert into index_tis ( username,imgsrc,title,content ) values (#{username},#{imgsrc},#{title},#{content}) ")
    public int add(Tis tis);
    
     
    @Delete(" delete from index_tis where id= #{id} ")
    public void del(int id);
    
    
    @Select("SELECT index_tis.id,index_tis.username,index_tis.imgsrc,index_tis.title,index_tis.content,user_tis.userimg FROM index_tis,user_tis WHERE index_tis.username=user_tis.username ORDER BY index_tis.id DESC" + 
    		"")
    public List<Tis> findAll();
    @Select("select * from index_tis where username= #{username} ")
    public List<Tis> findByUserName(String username);
       
    
    @Update("update index_tis set username=#{username},imgsrc=#{imgsrc},title=#{title},content=#{content} where id=#{id} ")
    public int update(Tis tis); 
}