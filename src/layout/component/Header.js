// import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";


function Header()
{
  

    return (

<nav className="navbar navbar-expand-lg  bg-silver border-bottom   ">
  
  <Link className="navbar-brand" to={'/'} style={{font:'small',color:'Highlight',  fontWeight:'6px',}}>
  <img style={{borderRadius:'15px', borderStyle:'outset',}} src="https://media.istockphoto.com/vectors/majestic-eagle-head-with-three-wing-flap-for-airline-business-vector-vector-id1266129229?k=20&m=1266129229&s=612x612&w=0&h=PldJ1zKrDu2E-sxmY7HFXp5dGaIAtzcr3a1D5pzUJIg="
   width="70px"   height="40px" alt="Capgemini"  /> CG ON AIR
 </Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    {/* <li className="nav-item active ">
        <Link className="nav-link text-danger" to={'/Home'}>Home <span class="sr-only">(current)</span></Link>
      </li> */}
    <li className="nav-item active ">
        <Link className="nav-link text-dark " to={'flight/all'}>All flights <span class="sr-only">(current)</span></Link>
      </li>
      <li >
    
</li>
<div>
<li className="nav-item active">
        <Link className="nav-link text-dark" to={'flight/add'}> Add flights <span class="sr-only">(current)</span></Link>
      </li>
      </div>
    </ul>
    <ul class="nav justify-content-center">
    <li class="nav-item">
    <Link className="nav-link  " to={'/viewscfflight'} >ViewScheduledFlight</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link  btn-sm btn-outline-info" aria-current="page" to={'/login'} >LOGIN</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link  btn-sm btn-outline-success" aria-current="page" to={'/signup'} >SIGNUP</Link>
  </li>
  </ul>
  
    
   
     

  </div>
  
</nav>
    );

 }
export default Header;
