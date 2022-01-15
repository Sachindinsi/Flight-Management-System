import { Link } from "react-router-dom";
import React from 'react';
import User from "../../model/User";
import UserService from "../../service/UserService";
class AddUser extends React.Component {
    
    constructor() {
        super();
        this.service = new UserService();
        this.state = {
            user: new User(),
        };
    }
    render() {
        return (
            <form>
                <div>
                    <label>User Id</label>
                    <input className="form-control" type="text" id="userId" placeholder="Enter User Id"
                        value={this.user.userId}
                        onChange={(e) => {
                            this.setState({
                                User: {
                                    ...this.state.user, userId:e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div>
                    <label>User name</label>
                    <input className="form-control" type="text" id="userName" placeholder="Enter User Name"
                        value={this.state.user.userName}
                        onChange={(e) => this.setState({ User: { ...this.state.user, userName: e.target.value } })}
                    />
                </div>
                
                <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="actions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </a>
 
  <div class="dropdown-menu" aria-labelledby="actions">
    <a class="dropdown-item" href="#">Admin</a>
    <a class="dropdown-item" href="#">Customer</a>
      
                    <label>User Type</label>
                    <input className="form-control" type="text" id="userType" placeholder="Enter User Type"
                        value={this.state.user.userType}
                        onChange={(e) => this.setState({ User: { ...this.state.user, userType: e.target.value } })}
                                    />
                </div>
                </div>

                <div>
                    <label>User Password</label>
                    <input className="form-control" type="text" id="password" placeholder="Enter Password"
                        value={this.state.user.password}
                        onChange={(e) => this.setState({ User: { ...this.state.user, password: e.target.value } })}
                                    />
                </div>


                <button className="btn btn-outline-primary mt-3" onClick={
                    (e) => {
                        e.preventDefault();
                        this.service.addUser(this.state.user)
                            .then((result) => {
                                alert('User is added in database.');
                            })
                            .catch((error) => {
                                alert(error)
                            })
                    }
                }>Add User</button>
                <Link className="btn btn-outline-primary mt-3 ml-3" to='/home'>Cancel</Link>
            </form>
        );
    }
}
export default AddUser;