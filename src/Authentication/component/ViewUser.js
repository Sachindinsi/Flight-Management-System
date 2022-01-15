import React from "react";
import { Link } from "react-router-dom";
import UserService from "../../service/UserService";

class ViewUser extends React.Component {
    constructor() {
        super();
        this.service = new UserService();
        this.state = { Users: [] }
    }
    componentDidMount() {
        this.service.findAllUsers().then((result) => {
            this.setState({ Users: result.data });
        })
    }
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>User Type</th>
                            <th>User Phone</th>
                            <th>User Mail</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Users.map((u) => (
                            <tr>
                                <td>{u.userId}</td>
                                <td>{u.userName}</td>
                                <td>{u.userType}</td>
                                <td>{u.userPhone}</td>
                                <td>{u.email}</td>
                                
                                <td><Link className="btn btn-outline-dark" onClick={()=>{alert('Are you sure '+u.userId);
                                                                                            // this.service.updateUser(u.userId);
                                                                                            }} to={`/updateUser/${u.userId}`}>Update</Link> </td>
      
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ViewUser;