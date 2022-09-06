import { Formik } from "formik";
import * as Yup from "yup"
import './payform.css'



const PaymentForm = ({props, day , mounth , year,}) => {
    const day1= day
    const mounth1= mounth
    const year1= year
    const schem =Yup.object().shape({
    cardNumber: Yup.string()
    .min(16, "must be at-list 16 digits")
    .required("you must enter a card number"),
    
    
    ccv: Yup.string()
    .max(3, "must be 3 digits")
    .min(3, "must be 3 digits")
    .required("you must enter ccv"),
    

    selectFnc: Yup.string()
    .required("you must select a card provider")

})
  return (
    <div className="formik">
       <h3 className="date">{day}.{mounth}.{year}</h3>
      <h1>payment:</h1>
      <Formik
        initialValues={{ cardNumber: "", ccv: "", selectFnc: "", date: "" }}
        onSubmit={(values) => props.setContacts(values)}
         validationSchema={schem}
      >
        {({handleSubmit, handleChange, handleBlur, values, errors, touched}) => (
          <form action="" onSubmit={handleSubmit} >
            <select className="select"
        name="selectFnc"
        value={values.selectFnc}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: "block" }}>

        <option value="option" label="select card provider:">
        {" "}
        </option>

        <option value="option1" label="visa" className="visa">
        {" "}
          
        </option>

        <option value="option2" label="master-card" className="master-card">
          
        </option>
        
        <option value="option3" label="max" className="max">
         

        </option>

      </select>
      <p style={{color:'red'}}>{errors.selectFnc && touched.selectFnc && errors.selectFnc}</p>
            
      

            <input className="card-number"
              type="number"
              name="cardNumber"
              vaalue={values.cardNumber}
              placeholder="card number:"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            <p style={{color:'red'}}>{errors.cardNumber && touched.cardNumber && errors.cardNumber}</p>
            
            
            <input className="number"
              type="number"
              name="ccv"
              vaalue={values.ccv}
              placeholder="ccv"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            <p style={{color:'red'}}>{errors.ccv && touched.ccv&& errors.ccv}</p>

            <label>expiring date:</label>
            <br/>
            <input className="date"
              type="date"
              name="date"
              vaalue={values.date}
              placeholder="date"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            <p style={{color:'red'}}>{errors.date && touched.date&& errors.date}</p>
            
            <button type="submit" className="subbtn" onSubmit={()=>console.log("asd")}>submit</button>
          </form>
        )}
      </Formik>
     
    </div>
  );
};

export default PaymentForm;

