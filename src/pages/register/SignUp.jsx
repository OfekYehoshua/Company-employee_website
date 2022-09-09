import * as React from "react";
import { update } from "../../ProfileSlice";
import "./signup.css";

import ResponsiveAppBar from "../../components/navbar/Navbar";
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
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";


const theme = createTheme()

export default function SignUp() {

  const [alert, setaAlert] = React.useState(false);

  const Show = () => {
    console.log(alert);
    setaAlert(!alert);
  };

  const schema = Yup.object().shape({
    firstName: Yup.string() 
      .required("Please enter your name"),

    lastName: Yup.string()
      .required("Please enter you last name"),

    email: Yup.string().email()
    .required("Please enter your email"),
    
    date: Yup.date()
    .required("Please enter your birthday date")
    .min("1969-11-13", "Date is too early"),

    photo: Yup.string()
    .required("Please enter a URL")
    .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'invalid URL'
  ),
    
    phone: Yup.string()
    .required("Pleasse enter your phone number")
     .min("8", "Invalid phone number"),
    
    rule: Yup.string()
    .required("Please enter your rule in the company"),
    
    password: Yup.string()
    .required("Please enter a password")
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[0-9]/, 'Password can only contain numbers.')
});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      date: data.get("date"),
      photo: data.get("photo"),
      phoneNum: data.get("phone"),
      rule: data.get("rule"),
      password: data.get("password"),
    };
    dispatch(update(values));
  };
  const dispatch = useDispatch()

  return (
    <>
      <ResponsiveAppBar/>
      <div className="theme">
      <ThemeProvider theme={theme} >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              mt: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ mt: 8, bgcolor: "secondary.main" }} style={{backgroundColor:"#99582a"}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                date: "",
                photo: "",
                phoneNum: "",
                rule: "",
                password: "",
              }}
              onSubmit={(values) => alert(JSON.stringify(values))}
              validationSchema={schema}
            >
              {({
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
              }) => (
          <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={handleChange}
                    value={values.firstName}
                    onBlur={handleBlur}
                  />
                </Grid>
                <p style={{ color: "red" }}>
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                  />
                </Grid>
                <p style={{ color: "red" }}>
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                  />
                  <p style={{ color: "red" }}>
                    {errors.email && touched.email && errors.email}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <TextField style={{fontWeight: "lighter"}}
                    className="date"
                    required
                    fullWidth
                    id="date"
                    name="date"
                    autoComplete="date"
                    type="date"
                    onChange={handleChange}
                    value={values.date}
                    onBlur={handleBlur}
                  />
                </Grid>
                <p style={{ color: "red" }}>
                  {errors.date && touched.date && errors.date}
                </p>
                <Grid item xs={12}>
                  <TextField
                    className="photo"
                    required
                    fullWidth
                    id="photo"
                    label="Insert Url"
                    name="photo"
                    autoComplete="Url"
                    type="url"
                    onChange={handleChange}
                    value={values.photo}
                    onBlur={handleBlur}
                  />
                </Grid>
                <p style={{ color: "red" }}>
                  {errors.photo && touched.photo && errors.photo}
                </p>
                <Grid item xs={12}>
                  <TextField
                    className="phone"
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                    type="number"
                    onChange={handleChange}
                    value={values.phone}
                    onBlur={handleBlur}
                  />
                </Grid>
                <p style={{ color: "red" }}>
                  {errors.phone && touched.phone && errors.phone}
                </p>
                <Grid item xs={12}>
                  <TextField
                    className="rule"
                    required
                    fullWidth
                    id="rule"
                    label="Your Rule"
                    name="rule"
                    autoComplete="rule"
                    type="rule"
                    onChange={handleChange}
                    value={values.rule}
                    onBlur={handleBlur}
                  />
                </Grid>
                <p style={{ color: "red" }}>
                  {errors.rule && touched.rule && errors.rule}
                </p>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                  />
                </Grid>
                <p style={{ color: "red" }}>
                  {errors.password && touched.password && errors.password}
                </p>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{backgroundColor:"#ffe6a7"}}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login">Allready have an account? sign in</Link>
                </Grid>
              </Grid>
              </form>
              )}
            </Formik>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
      </div>
    </>
  );
}

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
        Employeely
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


