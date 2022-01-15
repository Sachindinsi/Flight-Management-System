import { useState } from "react";
// import Schedule from "../model/Schedule";
import scheduleFlightServices from "../service/ScheduledFlightServices";


function AddscheduleFlight()
{
    let scfservices=new scheduleFlightServices();
    const [state,setState]= useState({scf:new scheduleFlight()})
     // const[state,setState]= useState({sc: new Schedule()})
     let flights=[];
}
export default AddscheduleFlight;
//list of flights
//list of schedule
// 