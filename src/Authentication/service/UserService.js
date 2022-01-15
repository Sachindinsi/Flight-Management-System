import axios from "axios";
class UserService{
    baseUrl="http://localhost:9833/user/";
    login(uid,ps){
        //alert("logging in");
        return axios.post(this.baseUrl+"login/"+uid+"/"+ps);
        //alert(uid+ps);
    }
    addUser(user){
        // console.log(JSON.stringify(user));
        user.userId=null;
        user.userPassword.id=null;
        return axios.post(this.baseUrl+"add",user);
    }
    findAllUsers(){
        return axios.get(this.baseUrl+"all");
    }
    findUserById(userId){
        return axios.get(this.baseUrl+userId);
    }
    UpdateUser(user){
        // console.log("called");
        alert(JSON.stringify(user));
        return axios.put(this.baseUrl+"update",user);
    }
    
}
export default UserService;

////

// http://localhost:4321/user/login