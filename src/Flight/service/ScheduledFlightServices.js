import axios from "axios"

class scheduleFlightServices{
scheduleFlights (scf)
{
      alert (JSON.stringify(scf))
    return axios.post(`http://localhost:9833/schedule-a-flight/`,scf);
}
findAllScheduledFlights(){

    return axios.get (`http://localhost:9833/schedules/all`);
}

}
export default scheduleFlightServices;