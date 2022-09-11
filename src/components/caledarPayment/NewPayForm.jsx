import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AlertPayment from "./AlertPayment";
import { useState } from "react";
import './NewPayForm.css'
import { Formik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";

export default function MewPaymentForm() {
    const [alert, setaAlert] = useState(false);
    const Show = () => {
        console.log(alert);
        setaAlert(!alert);
      };
    
      const schema = Yup.object().shape({
        cardName: Yup.string() 
          .required("Please enter your name"),
    
          cardNumber: Yup.string()
          .required("Please enter you last name"),
    
        expDate: Yup.string().email()
        .required("Please enter your email"),

        CVV: Yup.string().email()
        .required("Please enter your email"),
    });
  return (

     <React.Fragment> 
      <Typography variant="h6" gutterBottom>
        Payment method:
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            name='ardName'
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            name='cardNumber'
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            name="expDate"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            name="cvv"
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
        <button onClick={Show} type="submit" className="subbtn">
              submit
        </button>
      </Grid>
         {alert ? <AlertPayment /> : null}    
    </React.Fragment>
  );
}






















