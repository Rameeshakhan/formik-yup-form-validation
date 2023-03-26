import * as Yup from "yup";

const signUpSchema = Yup.object({
    name: 
        Yup.string()
        .min(2)
        .max(30)
        .required("Please Enter Your Name"),
    email: 
        Yup.string()
        .email()
        .required("Please enter Your email"),
    password: 
        Yup.string()
        .min(6)
        .required("Please enter Password"),
    confirmPassword :
        Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password") , null] , "Password and Confirm Password Should match")
})

export default signUpSchema