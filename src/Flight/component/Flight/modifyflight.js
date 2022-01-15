import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import FlightServices from "../../service/FlightServices";
import Flight from "../../model/Flight";
function ModifyFlight() {
  const [state, setState] = useState({ flight: new Flight() });
  let service = new FlightServices();
  const { flightNumber } = useParams();
  const [errors, setErrors] = useState({
    isFlightNumberValid: true,
    isCarrierNameValid: true,
    isFlightModelValid: true,
    isSeatCapacityValid: true,
    flightNumberErrorMessage: "",
    carrierNameErrorMessage: "",
    flightModelErrorMessage: "",
    flightCapacityErrorMessage: "",
  });

  const handleValidation = () => {
    let isFormValid = true;

    if (state.flight.flightNumber == "" || state.flight.flightNumber == 0) {
      isFormValid = false;
      setErrors((prevState) => ({
        ...prevState,
        isFlightNumberValid: false,
        flightNumberErrorMessage: "Flight Number Cannot be Empty or 0*",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        isFlightNumberValid: true,
      }));
    }

    if (state.flight.carrierName == "") {
      isFormValid = false;
      setErrors((prevState) => ({
        ...prevState,
        isCarrierNameValid: false,
        carrierNameErrorMessage: "Flight Carrier Name Cannot be Empty*",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        isCarrierNameValid: true,
      }));
    }

    if (state.flight.flightModel == "") {
      isFormValid = false;
      setErrors((prevState) => ({
        ...prevState,
        isFlightModelValid: false,
        flightModelErrorMessage: "Flight Model Cannot be Empty*",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        isFlightModelValid: true,
      }));
    }

    if (state.flight.seatCapacity == "" || state.flight.seatCapacity == 0) {
      isFormValid = false;
      setErrors((prevState) => ({
        ...prevState,
        isSeatCapacityValid: false,
        flightCapacityErrorMessage: "Flight Seat Capacity Cannot be Empty or 0*",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        isSeatCapacityValid: true,
      }));
    }

    return isFormValid;
  };

  const navigate = useNavigate();
  const onModifyFlight = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      service
        .modifyFlight(state.flight.flightNumber, state.flight)
        .then(() => {
          alert("Flight is updated.");
          setState({ flight: {} });
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
      console.log(state.flight);
    }
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "35%",
        }}
      >
        <label>Flight Number</label>
        <input
          className="form-control"
          type="text"
          id="flightNumber"
          placeholder="Enter Flight Number"
          value={state.flight.flightNumber}
          onChange={(e) =>
            setState({
              flight: { ...state.flight, flightNumber: e.target.value },
            })
          }
        />
        {!errors.isFlightNumberValid ? (
          <div style={{
            fontSize: "12px",
            color: "red",
      
          }}>{errors.flightNumberErrorMessage}</div>
        ) : (
          ""
        )}
      </div>
      <div
        style={{
          width: "35%",
        }}
      >
        <label>Carrier Name</label>
        <input
          className="form-control"
          type="text"
          id="carrierName"
          placeholder="Enter carrier Name"
          value={state.flight.carrierName}
          onChange={(e) =>
            setState({
              flight: { ...state.flight, carrierName: e.target.value },
            })
          }
        />
        {!errors.isCarrierNameValid ? (
          <div style={{
            fontSize: "12px",
            color: "red",
      
          }}>{errors.carrierNameErrorMessage}</div>
        ) : (
          ""
        )}
      </div>
      <div
        style={{
          width: "35%",
        }}
      >
        <label>Flight Model</label>
        <input
          className="form-control"
          type="text"
          id="flightModel"
          placeholder="Enter Flight Model"
          value={state.flight.flightModel}
          onChange={(e) =>
            setState({
              flight: { ...state.flight, flightModel: e.target.value },
            })
          }
        />
        {!errors.isFlightModelValid ? (
          <div style={{
            fontSize: "12px",
            color: "red",
      
          }}>{errors.flightModelErrorMessage}</div>
        ) : (
          ""
        )}
      </div>
      <div
        style={{
          width: "35%",
        }}
      >
        <label>Seat Capacity</label>
        <input
          className="form-control"
          type="text"
          id="seatCapacity"
          placeholder="Seat Capacity"
          value={state.flight.seatCapacity}
          onChange={(e) =>
            setState({
              flight: { ...state.flight, seatCapacity: e.target.value },
            })
          }
        />
        {!errors.isSeatCapacityValid ? (
          <div style={{
            fontSize: "12px",
            color: "red",
      
          }}>{errors.flightCapacityErrorMessage}</div>
        ) : (
          ""
        )}
      </div>

      <button
        className="btn btn-outline-primary mt-3"
        onClick={onModifyFlight}
        style={{
          width: "35%",
        }}
      >
        Modify Flight
      </button>
      <Link
        className="btn btn-outline-primary mt-3"
        to="/"
        style={{
          width: "35%",
          marginLeft: "0px",
        }}
      >
        Cancel
      </Link>
    </form>
  );
}
export default ModifyFlight;