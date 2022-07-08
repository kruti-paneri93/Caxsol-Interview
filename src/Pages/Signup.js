import React from 'react'
import { useState, useEffect } from "react";
import Header from '../Components/Header';

function Signup() {
    const initialValues = { fname: "", lname: "", email: "", password: "", cpassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.fname) {
            errors.fname = "Name is Required";
        }
        if (!values.lname) {
            errors.lname = "Surname is Required"
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.cpassword != values.password) {
            errors.cpassword = "Password and Confirm password should be same"
        }
        return errors;
    };
    return (
        <>
            <Header />
            <div className="App-container">
                <div className="card">
                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div className="ui message success">
                            Registered successfully!!
                        </div>
                    ) : (
                        <noscript>{JSON.stringify(formValues, undefined, 2)}</noscript>
                    )}
                    <div className="card-header">
                        <h4 className="title">Login Form</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="form-style">

                            <div className="ui divider"></div>
                            <div className="ui form">
                                <div className="d-flex w-100 justify-content-between ">
                                    <div className="w-48 ">
                                        <div className= "field">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="fname"
                                            placeholder="First Name"
                                            value={formValues.fname}
                                            onChange={handleChange}
                                        />
                                        </div>
                                        <p className="error-msg">{formErrors.fname}</p>
                                    </div>
                                    <div className="w-48 ml-2">
                                    <div className= "field">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="lname"
                                            placeholder="Last Name"
                                            value={formValues.lname}
                                            onChange={handleChange}
                                        />
                                        </div>
                                        <p className="error-msg">{formErrors.lname}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="error-msg">{formErrors.email}</p>
                                <div className="field">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="error-msg">{formErrors.password}</p>
                                <div className="field">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="cpassword"
                                        placeholder="Confirm Password"
                                        value={formValues.cpassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="error-msg">{formErrors.cpassword}</p>
                                <button className="btn">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup