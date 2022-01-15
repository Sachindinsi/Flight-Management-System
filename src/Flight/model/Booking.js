import User from "../../Authentication/model/User";
import Flight from "./Flight";

class Booking 
{
    bookingId=0;
    user = new User();
    bookingDate =new Date();
    passengerList =[];
    ticketCost=0;
    flight = new Flight();
    noOfPassenger=0;


}
export default Booking;