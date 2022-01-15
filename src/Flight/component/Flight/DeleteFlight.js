
import { useEffect } from "react";
import FlightServices from "../../service/FlightServices";
import {  useParams ,useNavigate} from "react-router";
function DeleteFlight()
{
    // const [flight, setFlight] = useState({});
    let { flightNumber } = useParams();
     const navigate = useNavigate();
    let fservice = new FlightServices();
    // let result = '';
    // componentDidMount
    // componentDidUpdate
    useEffect(() => {
        fservice.DeleteFlightByNum(flightNumber).then(() => {
        
            alert(`Flight with id ${flightNumber} is deleted.`);
             navigate('/flight/all');
        }).catch((error) => {alert(error)
            
        })
    })
    return (
        <div className="alert alert-danger">Flight Number = {flightNumber} deleted.</div>
    );
}
export default DeleteFlight;