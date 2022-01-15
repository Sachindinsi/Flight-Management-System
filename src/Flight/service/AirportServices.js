import axios from "axios";
class AirportServicess{
    viewAllAirport()
    {
        return axios.get(`/airport/all`);
    }
}
export default AirportServicess;