import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Flight from "../../model/Flight";
import FlightServices from "../../service/FlightServices";

function AddFlight() {
  const [state, setState] = useState({ flight: new Flight() });
  const [errors, setErrors] = useState({
    isFliteNumberValid: true,
    isFliteModelValid: true,
    isFliteCarrierValid: true,
    isFliteSeatNumberValid: true,
  });

  let fservice = new FlightServices();
  // const[state]=useState({flights:[]});

  const handleValidation = () => {
    let formIsValid = true;

    console.log("validation");
    if (state.flight.flightNumber == 0) {
      formIsValid = false;
      setErrors( (prevState) => (
       {
        ...prevState,
        isFliteNumberValid: false,
       }
      ));
      console.log("flight number is not valid ");
    }
    else{
       setErrors( (prevState) => (
      {
       ...prevState,
       isFliteNumberValid: true,
      }
     ));

    }
    if (state.flight.flightModel == "") {
      formIsValid = false;
      
      setErrors( (prevState) => (
        {
         ...prevState,
         isFliteModelValid: false,
        }
       ));
      console.log("flight Model is not valid ");
    }
    else{
      setErrors( (prevState) => (
      {
       ...prevState,
       isFliteModelValid: true,
      }
     ));

    }
    if (state.flight.carrierName == "") {
      formIsValid = false;
      
      setErrors( (prevState) => (
        {
         ...prevState,
         isFliteCarrierValid: false,
        }
       ));
      console.log("flight Carrier Name is not valid ");
    }
    else{
      setErrors( (prevState) => (
        {
         ...prevState,
         isFliteCarrierValid: true,
        }
       ));
    }
    if (state.flight.seatCapacity <100) {
      formIsValid = false;
      
      setErrors( (prevState) => (
        {
         ...prevState,
         isFliteSeatNumberValid: false,
        }
       ));
      console.log("flight seat capacity is not valid ");
    }
    else{
      setErrors( (prevState) => (
        {
         ...prevState,
         isFliteSeatNumberValid: true,
        }
       ));
    }

    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit called");
    if (handleValidation()) {
      fservice
        .addFlight(state.flight)
        .then(() => {
          toast.success("Flight added in database successfully...");
        })
        .catch((error) => {
          toast.warn("Error occured, Flight Not Added...!!!");
        });
    } else {
      toast.warn("Please Enter Valid details");
    }
    console.log(errors)
  };
  return (
    <div
      style={{
        backgroundImage: " url(" + process.env.PUBLIC_URL + "/add2.jpeg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "500px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <form
          className=" col-5 col-center "
          style={{
            paddingTop: "35px",
            alignSelf: "center",
            alignItems: "center",
            marginLeft: "300px",
          }}
          onSubmit={handleSubmit}
        >
          <p
            style={{
              marginLeft: "100px",
              color: "white",
              fontSize: "20px",
              wordSpacing: "1px",
            }}
          >
            <b>A d d F l i g h t s</b>
          </p>
          <div className="form-group row">
            <label for="Fnum" class="col-sm-5 col-form-label ">
              Flight Number
            </label>
            <div className="col-sm-7">
              <input
                type="number"
                className="form-control"
                id="fnum"
                placeholder="Enter Flight Number"
                value={state.flight.flightNumber}
                onChange={(e) =>
                  setState({
                    flight: { ...state.flight, flightNumber: e.target.value },
                  })
                }
              />
              {!errors.isFliteNumberValid ? (
                <div style={{
                  fontSize: "12px", 
                  color: "red"
                }}>Please Enter Valid Flight Number*</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="form-group row">
            <label for="fmodel" className="col-sm-5 col-form-label">
              Flight Model
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="fmodel"
                placeholder="Enter Model"
                value={state.flight.flightModel}
                onChange={(e) =>
                  setState({
                    flight: { ...state.flight, flightModel: e.target.value },
                  })
                }
              />
              {!errors.isFliteModelValid ? (
                <div style={{
                  fontSize: "12px", 
                  color: "red"
                }}>Please Enter Valid Flight Model*</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="form-group row">
            <label for="Cname" className="col-sm-5 col-form-label">
              Carrier Name
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="cName"
                placeholder="Enter Carrier Name"
                value={state.flight.carrierName}
                onChange={(e) =>
                  setState({
                    flight: { ...state.flight, carrierName: e.target.value },
                  })
                }
              />
              {!errors.isFliteCarrierValid ? (
                <div style={{
                  fontSize: "12px", 
                  color: "red"
                }}>Please Enter Valid Flight carrierName*</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="form-group row">
            <label for="seatc" className="col-sm-5 col-form-label">
              Seat capacity
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="seatc"
                placeholder="Enter Seat capacity"
                value={state.flight.seatCapacity}
                onChange={(e) =>
                  setState({
                    flight: { ...state.flight, seatCapacity: e.target.value },
                  })
                }
              />
               {!errors.isFliteSeatNumberValid ? (
                <div style={{
                  fontSize: "12px", 
                  color: "red"
                }}>Please Enter Valid Flight Seat Capacity*</div>
              ) : (
                ""
              )} 
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-7">
              <button
                className="btn btn-success btn-block mx-5 my-4"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
            <div className="col-sm-3">
              <Link
                className="btn btn-outline-danger  mx-5 my-4"
                to={"/flight/all"}
              >
                CANCEL
              </Link>
            </div>
          </div>
          <ToastContainer position={toast.POSITION.TOP_CENTER} />
        </form>
      </div>
    </div>
  );
}
export default AddFlight;
