import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup.string().required().max(100).label("Title"),
  body: yup.string().required().label("Body"),
});

export const userValidationSchema = yup.object({
  name: yup.string().required().label("Name"),
  username: yup.string().required().label("Username"),
  email: yup.string().email().required().label("Email"),
  address: yup.object({
    street: yup.string().required().label("Street"),
    suite: yup.string().required().label("Suite"),
    city: yup.string().required().label("City"),
    zipcode: yup.string().required().label("ZipCode"),
    geo: yup.object({
      lat: yup.string(),
      lng: yup.string(),
    }),
  }),
  phone: yup.string().required().label("PhoneNumber"),
  website: yup.string().url().required().label("Website"),
  company: yup.object({
    name: yup.string().required().label("Company"),
    catchPhrase: yup.string().required().label("Catch Phrase"),
    bs: yup.string().required().label("BS"),
  }),
});
