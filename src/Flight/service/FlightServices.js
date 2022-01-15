import axios from "axios";
class FlightServices{

    addFlight(flight)
    {
        alert(JSON.stringify(flight))
        return axios.post(`http://localhost:9432/flight/add`,flight);
    }
    viewAllFlight()
    {
        return axios.get(`http://localhost:9432/flight/all`);
    }
    DeleteFlightByNum(flightNumber)
    {
        alert(JSON.stringify(flightNumber))
        return axios.delete(`http://localhost:9432/flight/delete/${flightNumber}`);
    }
    modifyFlight(flightNumber, flight)

    {
        console.log(`http://localhost:9432/flight/modify/${flightNumber}`, flight);
        return axios.put(`http://localhost:9432/flight/modify/${flightNumber}`, flight);

    }

    ViewFlightByNumber(flightNumber)
    {
    return axios.get(`http://localhost:9432/flight/${flightNumber}`);
    }
    
    

}
export default FlightServices;