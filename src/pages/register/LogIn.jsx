import * as React from "react";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./login.css";
import ResponsiveAppBar from "../../components/navbar/Navbar";

import { selectProfile, updateUser } from "../../ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function LogIn() {

  const profile = useSelector(selectProfile)

  const schema = Yup.object().shape({
    email: Yup.string()
    .required("Please enter your email"),

    password: Yup.string()
    .required("Please enter your password")
    .matches(profile.password, "Invalid password"),
  });

  const handleSubmition = (values) => {
    const user = {
      email: values.email,
      password:values.password,
    };
    dispatch(updateUser(user));
  };
  const dispatch = useDispatch();

  return (
    <div>
      <ResponsiveAppBar />
      <ThemeProvider theme={theme} className="login-container">
        <Grid
          container
          className="login-container"
          component="main"
          sx={{ height: "100vh" }}
        >
          <CssBaseline className="theme" />

          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/a6/7b/44/a67b442d6e8c00231e997eaa08a692cf.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            className="theme"
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 21,
              }}
            >
              <Avatar
                sx={{ m: 1, bgcolor: "secondary.main" }}
                style={{ backgroundColor: "#99582a" }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Formik
                initialValues={{
                  email: "",
                  password: ""
                }}
                onSubmit={(values) => handleSubmition(values)}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={schema}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <p className="error-message">
                        {errors.email &&
                          touched.email &&
                          errors.email}
                      </p>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <p className="error-message">
                        {errors.password &&
                          touched.password &&
                          errors.password}
                      </p>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{ backgroundColor: "#ffe6a7" }}
                    >
                      Sign In
                    </Button>
                    <Grid container className="links">
                      <Grid item className="forgot-password">
                        <Link to="/" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item className="have-account">
                        <Link to="/signup">Don't have an account? Sign Up</Link>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 7 }} />
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
