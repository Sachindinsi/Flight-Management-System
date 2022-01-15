import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlightServices from "../../service/FlightServices";

// import { useNavigate } from "react-router";


function ViewAllFlight()
{
    const [state, setState] = useState({ flights: [] });
    let fservice =new FlightServices();

  
    useEffect(() => {
        fservice.viewAllFlight().then((result)=>{
              setState({flights:result.data})
        }).catch((error) => {
            alert(error);})
            
    },[])
    return (
        
        <div 
            style={{
                backgroundImage: " url(" + process.env.PUBLIC_URL + '/adda.jpg' + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height:'750px',
                backgroundRepeat: 'no-repeat'
            }}>
            <div>
                <div className=" container  ">
                    
        
            <div className="row align-items-center">
               <div className="col-md-10 ml-5 my-4">
                 <table className="table table-light table-striped bg-light  " style={{ opacity:'0.7', }}>
                     <thead >
                         <tr className="text-dark">
                            <th>Flight Number</th>
                            <th>Flight Model</th>
                            <th>Carrier Name</th>
                            <th>Seat capacity</th>
                            <th> Delete?</th>
                            {/* <th>Update?</th> */}

                         </tr>
                     </thead>
                     <tbody>
                         {
                             state.flights.map((fm) =>
                             ( // start
                                 <tr className="text-primary">
                                   <td>{fm.flightNumber}</td>
                                   <td>{fm.flightModel}</td>
                                   <td>{fm.carrierName}</td>
                                   <td>{fm.seatCapacity}</td>
                                   <td><Link className="btn btn-danger btn-sm" to={{ pathname: `/flight/delete/${fm.flightNumber}` }}>Delete</Link></td>
                                 </tr>
                             )
                             )
                         }
                     </tbody>
                 </table>
                 </div>
               
                 
              
                </div>
            </div>
            
        </div>
        </div>
    )

}
export default ViewAllFlight;