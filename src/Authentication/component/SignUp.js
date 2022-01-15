import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import UserService from "../service/UserService";
import User from "../model/User";
import { useState } from "react";

const theme = createTheme();

export default function SignUp() {
  const [state, setState] = useState({
    // selection : "",
    user: new User(),
    confirmPassword: "",
  });
  const userS = new UserService();
  const [errors, setErrors] = useState({
    isUserNameValid: true,
    isUserEmailValid: true,
    isPhoneNumberValid: true,
    userNameErrorMessage: "",
    emailErrorMessage: "",
    phoneNumberErrorMessage: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleValidation = () => {
    let isFormValid = true;
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if ((state.user.userName = "")) {
      isFormValid = false;
      setErrors((prevState) => ({
        ...prevState,
        isUserNameValid: false,
        userNameErrorMessage: "UserName Cannot be Empty*",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        isUserNameValid: true,
        userNameErrorMessage: "UserName Cannot be Empty*",
      }));
    }

    if (state.user.email == "") {
      isFormValid = false;
      setErrors((prevState) => ({
        ...prevState,
        isUserEmailValid: false,
        emailErrorMessage: "Email Cannot be Empty*",
      }));
    } else if (state.user.email != "") {
      if (!mailformat.test(state.userMail)) {
        setErrors((prevState) => ({
          ...prevState,
          isUserEmailValid: false,
          emailErrorMessage: "Please Enter Valid Email Address*",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          isUserEmailValid: true,
        }));
      }
    }
    if ((state.user.userPhone = "")) {
      isFormValid = false;
      setErrors((prevState) => ({
        ...prevState,
        isPhoneNumberValid: false,
        userNameErrorMessage: "User Phone Number Cannot be Empty*",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        isPhoneNumberValid: true,
        userNameErrorMessage: "User Phone Number Cannot be Empty*",
      }));
    }
    return isFormValid;
  };
  const onClickSignUp = (event) => {
    event.preventDefault();
    console.log(state.user)
    if (handleValidation()) {
        console.log("Validated")
      }

  }
  // /////

  // this.handleChange = this.handleChange.bind(this);

  // function handleChange(value) {
  //   //set selection to the value selected
  //   setState({ selection : value });

  // }
  ///////

  // /////
  return (
    <div
      align="center"
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1560142454-b818f9dd9fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" +
          ")",
        // backgroundImage: "url(" + " https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/539523/airplane-takeoff-getty.jpg&w=2000&op=resize" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // height:750px
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    tabIndex={-1}
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    onChange={(event) => {
                      setState({
                        ...state,
                        user: { ...state.user, userName: event.target.value },
                      });
                    }}
                  />
                  {!errors.isUserNameValid ? (
                    <div>{errors.userNameErrorMessage} </div>
                  ) : (
                    ""
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event) => {
                      setState({
                        ...state,
                        user: { ...state.user, email: event.target.value },
                      });
                    }}
                  />
                  {!errors.isUserEmailValid ? (
                    <div>{errors.emailErrorMessage} </div>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="phoneNumber"
                    required
                    fullWidth
                    id="phoneNumber"
                    label="Phone Number"
                    // type="number"
                    // min="7000000000"
                    autoFocus
                    onChange={(event) => {
                      setState({
                        ...state,
                        user: { ...state.user, userPhone: event.target.value },
                      });
                    }}
                  />
                  {!errors.isPhoneNumberValid ? (
                    <div>{errors.phoneNumberErrorMessage} </div>
                  ) : (
                    ""
                  )}
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <FormControl  fullWidth>
                      <InputLabel id="demo-simple-select-label">Type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state.selection}
                        label="Type"
                        onChange={(event)=>{
                                            setState({user:{...state.user, userType:event.target.value}})
                                                    }}
                      >
                        <MenuItem value={"admin"}>Admin</MenuItem>
                        <MenuItem value={"customer"}>Customer</MenuItem>
                      </Select>
                    </FormControl>
              </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    // onChange={(event)=>{setState({user:{...state.user, userPassword:{...state.user.userPassword,password:event.target.value}}})}}
                    onChange={(event) => {
                      setState({
                        ...state,
                        confirmPassword: event.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                    onChange={(event) => {
                      setState({
                        ...state,
                        user: {
                          ...state.user,
                          userPassword: {
                            ...state.user.userPassword,
                            password: event.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Remember Me"
                  />
                </Grid>
              </Grid>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onClickSignUp
                  //     (event) => {
                  //   event.preventDefault();

                  //   setState({
                  //     ...state,
                  //     user: { ...state.user, userType: "customer" },
                  //   });
                  //   if (
                  //     state.user.userPassword.password == state.confirmPassword
                  //   ) {
                  //     userS
                  //       .addUser(state.user)
                  //       .then(() => alert("sign up complete"))
                  //       .catch(() => alert("unknown error occured"));
                  //   } else {
                  //     alert("password didnt matched");
                  //   }
                  // }
                }

              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={"/loginui"} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}