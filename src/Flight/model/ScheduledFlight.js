import Flight from "./Flight";
import Schedule from "./Schedule";


class SceduledFlight
{
    SceduledFlightId=0;
    availableSeats=0;
    ticketCost=0;
    flight=new Flight();
    schedule= new Schedule();
}
export default SceduledFlight;
//////

// {
//     "scheduledFlightId": 10,
//     "flight": {
//       "flightNumber": 13,
//       "flightModel": "AirIndia",
//       "carrierName": "Air124",
//       "seatCapacity": 300
//     },
//     "availableSeats": 300,
//     "schedule": {
//       "scheduledId": 9,
//       "sourceAirport": {
//         "airportName": "puneAir",
//         "airportCode": "p11",
//         "airportLocation": "Pune"
//       },
//       "destinationAirport": {
//         "airportName": "nashikAir",
//         "airportCode": "n22",
//         "airportLocation": "Nashik"
//       },
//       "arrivalTime": "2022-01-12T12:00:00",
//       "departureTime": "2022-01-12T12:00:00"
//     },
//     "ticketCost": 1000
//   }
// ]