import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import User from "../../model/User";
import UserService from "../../service/UserService";

function UpdateUser() {
    const [state, setState] = useState({ User: new User() });
    let service = new UserService();
    const { userId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        service.findUserById(userId).then((result) => {
            setState({ User: result.data })
        }).catch((error) => {
            alert(error);
        })
    }, []);
    return (
        <div className="container"  >

<form className=" col-5 col-center " style={{ paddingTop:'35px',  alignSelf:'center', alignItems:'center', marginLeft:'300px'}}>
            <div>
                <label>User Id</label>
                <input className="form-control" type="text" id="userId" placeholder="Enter User Id"
                    value={state.User.userId}
                    readOnly={true}
                />
            </div>
            <div>
                <label>User Name</label>
                <input className="form-control" type="text" id="userName" placeholder="Enter User Name"
                    value={state.User.userName}
                    onChange={(e) => setState({ User: { ...state.User, userName: e.target.value } })}
                />
            </div>
            <div>
                <label>User Type</label>
                <input className="form-control" type="text" id="userType" placeholder="Enter User Type"
                    value={state.User.userType}
                    onChange={(e) => setState({ User: { ...state.User, userType: e.target.value } })}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="text" placeholder="Enter Password"
                    value={state.User.password}
                    onChange={(e) => setState({
                        User: {
                            ...state.User,
                            password: { ...state.User.password, password: e.target.value }
                        }
                    })}
                ></input>
            </div>

            <div className="form-group">
                <label>Phone Number</label>
                <input className="form-control" type="text" placeholder="Enter Phone Number"
                    value={state.User.userPhone}
                    onChange={(e) => this.setState({
                        User: {
                            ...state.User,
                            userPhone: { ...state.User.userPhone, userPhone: e.target.value }
                        }
                    })}
                ></input>
            </div>

            <div>
                <label>User Email</label>
                <input className="form-control" type="text" id="email" placeholder="Enter User Mail"
                    value={state.User.email}
                    onChange={(e) => setState({ User: { ...state.User, email: e.target.value } })}
                />
            </div>
            <div>
            <button className="btn btn-outline-primary mt-3 mx-5" onClick={
                (e) => {
                    e.preventDefault();
                    service.UpdateUser(state.User).then(() => {
                        alert('User Info updated.');
                        setState({ User: new User() })
                        navigate('/home');
                    }).catch((error) => {
                        alert(error);
                    })
                }
            }>Update User</button>
            <Link className="btn btn-outline-primary mt-3 mx-5" to='/home'>Cancel</Link>
            </div>
        </form>
        </div>
    );
}
export default UpdateUser;