import React from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";



export const FormContact = () => {

    const validationSchema = () => {
        return yup.object().shape({
            Firstname : yup.string().required("First Name is required...."),
            Lastname : yup.string().required("Last Name is required..."),
            Email : yup.string().required("Email is required...").email("Invalid email"),
            Phonenumber : yup.string().required("Phone Number is required...")
        })
    }

    const formik = useFormik({
        initialValues :  {
            Firstname : "",
            Lastname : "",
            Email : "",
            Phonenumber : ""
        },

        validationSchema  : validationSchema,

        onSubmit : (value) => {
            console.log(value);
        }
    })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="Firstname"
          name="Firstname"
          label="First Name"
          value={formik.values.Firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Firstname && Boolean(formik.errors.Firstname)}
          helperText={formik.touched.Firstname && formik.errors.Firstname}
        />
        <TextField
          fullWidth
          id="Lastname"
          name="Lastname"
          label="Last Name"
          value={formik.values.Lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Lastname && Boolean(formik.errors.Lastname)}
          helperText={formik.touched.Lastname && formik.errors.Lastname}
        />
        <TextField
          fullWidth
          id="Email"
          name="Email"
          label="Email"
          value={formik.values.Email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Email && Boolean(formik.errors.Email)}
          helperText={formik.touched.Email && formik.errors.Email}
        />
          <TextField
          fullWidth
          id="Phonenumber"
          name="Phonenumber"
          label="Phone Number"
          type="number"
          value={formik.values.Phonenumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Phonenumber && Boolean(formik.errors.Phonenumber)}
          helperText={formik.touched.Phonenumber && formik.errors.Phonenumber}
        />
        <Button color="primary" variant="contained" type="submit">Submit</Button>
      </form>
    </div>
  );
};
