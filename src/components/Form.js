import { useFormik } from "formik"
import "./FormStyle.css"
import signUpSchema from "./schemas/index"
import image from "./image.jpg"
import { useState } from "react"

const Form = () => {
    const [success , setSuccess] = useState(false)
    // const [error , setError] = useState(false)

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const { values , errors , handleChange , handleBlur , handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, { resetForm }) =>{
          
          console.log(values)
            resetForm();
            setSuccess(true)
        }
    })

    return (
        <div className="container">
            <div className="left-container">
                <h3>Registration Form</h3> <br />
                <form onSubmit={handleSubmit} className='form'>
                <div class="form-floating mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Enter Your Name" 
                        name = "name"
                        onChange={handleChange}
                        value = {values.name}
                        onBlur={handleBlur}
                        />
                        <label for="floatingInput">Name</label> <p>{errors.name}</p> 
                    </div>
                    <div class="form-floating mb-3">
                        <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Enter Your Email" 
                        name = "email"
                        onChange={handleChange}
                        value = {values.email}
                        onBlur={handleBlur}
                        />
                        <label for="floatingInput">Email address</label> <p>{errors.email}</p> 
                    </div>
                    <div class="form-floating mb-3">
                        <input 
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Enter Your Password"
                        name = "password"
                        onChange={handleChange}
                        value = {values.password}
                        onBlur={handleBlur}
                        />
                        <label for="floatingPassword">Password</label> <p>{errors.password}</p> 
                    </div>
                    <div class="form-floating mb-3">
                        <input 
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Re enter Password"
                        name = "confirmPassword"
                        onChange={handleChange}
                        value = {values.confirmPassword}
                        onBlur={handleBlur}
                        />
                        <label for="floatingPassword">Confirm Password</label> <p>{errors.confirmPassword}</p> 
                    </div><br />
                    <button type="submit" className="btn btn-dark">Submit</button>
                    {success && <p style={{color:"green" , padding:"10px", fontSize: "20px"}}>Successfully Submitted</p>} 
                </form>
            </div>
            <div className="right-container">
                <img className="img" src={image} alt="register" />
            </div>
        </div>
    )
}

export default Form
