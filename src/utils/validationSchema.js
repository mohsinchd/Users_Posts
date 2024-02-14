import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup
    .string()
    .required("Title is Required")
    .max(100, "Title cannot be greater than 100 characters"),
  body: yup.string().required("Body of the Post is Required."),
});

export const userValidationSchema = yup.object({
  name: yup.string().required("Name is Required"),
  username: yup.string().required("Username is Required"),
  email: yup
    .string()
    .email("Please Enter Valid Email")
    .required("Email is Required"),
  address: yup.object({
    street: yup.string().required("Street is required"),
    suite: yup.string().required("Suite is required"),
    city: yup.string().required("City is Required"),
    zipcode: yup.string().required("Zipcode is required"),
    geo: yup.object({
      lat: yup.string(),
      lng: yup.string(),
    }),
  }),
  phone: yup.string().required("Phone Number is Required"),
  website: yup
    .string()
    .url("Invalid Website URL")
    .required("Website is Required"),
  company: yup.object({
    name: yup.string().required("Company name is required"),
    catchPhrase: yup.string().required("Catch phrase is required"),
    bs: yup.string().required("BS is required"),
  }),
});
