package main.pojo;

public class User {
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserimg() {
		return userimg;
	}
	public void setUserimg(String userimg) {
		this.userimg = userimg;
	}
	public int userid;
	public String username;
	public String password;
	public String userimg;
	
	@Override
    public String toString() {
        return "User [userid=" + userid + ", username=" + username + ", password=" + password + ", userimg=" + userimg + "]";
    }
}
