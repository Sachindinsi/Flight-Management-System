import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import { Link } from 'react-router-dom';
// import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserService from "../service/UserService";

const theme = createTheme();

export default function SignIn() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const [state, setState] = useState({
    userMail: "",
    password: "",
    userType: "",
  });

  const [errors, setErrors] = useState({
    isUserEmailValid: true,
    isUserPasswordValid: true,
    emailErrorMessage: "",
    passwordErrorMessage: "",
  });
  const handleValidation = () => {
    let isFormValid = true;
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (state.userMail == "") {
      isFormValid = false;
      setErrors((prevState) => ({
        ...prevState,
        isUserEmailValid: false,
        emailErrorMessage: "Email Cannot be Empty*",
      }));
    } else if (state.userMail != "") {
      if (!mailformat.test(state.userMail)) {
        setErrors((prevState) => ({
          ...prevState,
          isUserEmailValid: false,
          emailErrorMessage: "Please Enter Valid Email Address*",
        }));
      }
      else {
        setErrors((prevState) => ({
          ...prevState,
          isUserEmailValid: true,
        }));
      }
    } 

    if (state.password == "") {
      isFormValid = false;
      setErrors((prevState) => ({
        ...prevState,
        isUserPasswordValid: false,
        passwordErrorMessage: "Password Cannot be Empty*",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        isUserPasswordValid: true,
      }));
    }
    return isFormValid;
  };
  const onClickLogin = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      uService
        .login(state.userMail, state.password)
        .then((result) => {
          if (result.data === true) {
            sessionStorage.setItem("UserMail", state.userMail);
            uService
              .getUserByMail(sessionStorage.getItem("UserMail"))
              .then((result) => {
                setState({
                  ...state,
                  userType: result.data.userType,
                });
                alert("wellcome " + result.data.userName);
                sessionStorage.setItem("userType", result.data.userType);
              });
            // console.log(state.userType+"type");
          } else {
            alert("authentication failed");
          }
        })
        .catch((error) => alert(error));
    }
  };

  let uService = new UserService();
  return (
    <div
      align="center"
      style={{
        backgroundImage:
          "url(" +
          " https://images.unsplash.com/photo-1560142454-b818f9dd9fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" +
          ")",
        // backgroundImage: "url(" + " https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/539523/alk-737-source-alk.jpg&w=2000&op=resize" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "750px",
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
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={state.userMail}
                onChange={(event) => {
                  setState({ ...state, userMail: event.target.value });
                }}
              />
              {!errors.isUserEmailValid ? (
                <div
                  style={{
                    fontSize: "12px",
                    color: "red",
                  }}
                >
                  {errors.emailErrorMessage}
                </div>
              ) : (
                ""
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={state.password}
                onChange={(event) => {
                  setState({ ...state, password: event.target.value });
                }}
              />
              {!errors.isUserPasswordValid ? (
                <div
                  style={{
                    fontSize: "12px",
                    color: "red",
                    width: "390px",
                  }}
                >
                  {errors.passwordErrorMessage}
                </div>
              ) : (
                ""
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onClickLogin}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                {/* <Grid item>
              <Link to={"/"} variant="body2">
                  Don't have an account? Signup
                </Link>
              </Grid> */}
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}