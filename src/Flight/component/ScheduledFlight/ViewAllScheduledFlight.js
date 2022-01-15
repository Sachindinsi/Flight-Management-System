import { useEffect, useState } from "react";
import scheduleFlightServices from "../../service/ScheduledFlightServices";



 export default function ViewScheduledFlight()
{
       
    const [state,setState]=useState({scheduledflights:[]})
   let scfservices = new scheduleFlightServices();
// formula.....
   useEffect(() => {
    scfservices.findAllScheduledFlights().then((result)=>{
        setState({scheduledflights:result.data})
        alert('click ok');
    }).catch((error)=>{
        alert("Something went wrong...."+error); })
   })

    return(

        // <div 
        // style={{
        //     backgroundImage: " url(" + process.env.PUBLIC_URL + '/adda.jpg' + ")",
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     height:'750px',
        //     backgroundRepeat: 'no-repeat'
        // }}>
        <div>
            <div className="   ">
                
    
        <div className="row align-items-center">
           <div className="col-md-10 ml-5 my-4">
             <table className="table table-light bg-light  " >
                 <thead >
                     <tr className="text-dark">
                        <th>Scheduled Flight ID</th>
                        <th>Flight Number</th>
                        <th>Flight Model</th>
                        <th>Carrier Name</th>
                        <th>Source Airport</th>
                        <th>Source Airport code</th>
                        <th>Destination Airport</th>
                        <th>Destination AirportCode</th>
                        <th>Arrival Time</th>
                        <th>Departure Time</th>
                        <th>Seat Capacity</th>
                        <th>Available Seat</th>
                        <th>Ticket Cost</th>


                        <th></th>
                        {/* <th>Update?</th> */}

                     </tr>
                 </thead>
                 <tbody>
                     {/* {
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
                     } */}
                 </tbody>
             </table>
             </div>
           
             
          
            </div>
        </div>
        
    </div>
    // </div>

       
        
    );

}
