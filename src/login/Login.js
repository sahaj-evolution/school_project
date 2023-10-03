import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { storeData } from '../Reducer'

import './Login.css';

function Login(props) {

    const [authMode, setAuthMode] = useState("signin")
    const nav = useNavigate();
    const [userData,setUserData] = useState({
      email: '',
      password: ''
    })
    const [isFormSubmitted,setIsFormSubmitted] = useState(false)
    const validations = {
      email: (userData.email.length >= 1 && userData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) ? true : false,
      password: (userData.password.length >= 6) ? true : false
  }

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
        setIsFormSubmitted(false)
      }

      // const storeDataOfUser = useSelector((state) => state.authCheck.data)
      const dispatch = useDispatch()
     
      const getValue = (event) => {
        setUserData({
          ...userData,
          [event.target.name] : event.target.value
        })
      }

      const submitData = (event) => {
        event.preventDefault();
        setIsFormSubmitted(true);
        
        let isFormValid = true;
        Object.keys(validations).map((data)=>{
            if(isFormValid){
                isFormValid = validations[data];
            }
            return data;
        })
        if(isFormValid){
          dispatch(storeData(userData))
          let token = Math.random().toString(36).substr(2)
          localStorage.setItem("userData",token)
          nav("/dashboard");
          window.location.reload(true)
        }else{
          
        }
      }

      if (authMode === "signin") {
        return (
          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submitData}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    onChange={getValue}
                  />
                  {isFormSubmitted && !validations.email && <small className="text-danger">Email is not valid</small>}
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    onChange={getValue}
                  />
                  {isFormSubmitted && !validations.password && <small className="text-danger">Password is not valid</small>}
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )
      }
    
      return (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={submitData}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  name="email"
                  onChange={getValue}
                />
                {isFormSubmitted && !validations.email && <small className="text-danger">Email is not valid</small>}
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    onChange={getValue}
                  />
                  {isFormSubmitted && !validations.password && <small className="text-danger">Password is not valid</small>}
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )
  }
  
  export default Login;