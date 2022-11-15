import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [classname, setClassname] = useState()
    const [alertMessage, setAlertMessage] = useState()

    const [details, setDetails] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const {name, value} = e.target
        setDetails((old) => {
            return{
                ...old,
                [name]:value
            }
        })
    }

    const submitData = async e => {
        try{
            e.preventDefault();
            const { email, password } = details;
            // send the username and password to the server
            const response = await axios.post(
              "http://localhost:8000/api/v1/user/login",
              { email, password }
            );
            if(response.data.status === "success"){
                localStorage.setItem('jwt', response.data.token);
                localStorage.setItem('user', response.data.data.user.email);

                ShowAlert("success", "Logged in successfully!");
                window.setTimeout(() => {
                    navigate("/home");
                }, 1000);
            }
            
        } catch (err) {
            // console.log(err.response.data.message)
            ShowAlert("danger", err.response.data.message);
        }
        
      };

      function ShowAlert(type, message) {
        let name = "alert alert-"+type;
        setClassname(name);
        setAlertMessage(message);
        setShow(true)
        window.setTimeout(() => {
            setShow(false);
            setClassname("");
            setAlertMessage("");
        }, 5000);
      }
    
  return (
    <Fragment>
        {   show &&
            <div className='alert-parent'>
                <div className={classname} role="alert">
                    {alertMessage}
                </div>
            </div>
        }
        <div className='row m-5 p-5 rounded shadow'>
            <div className='col-md-6 col-sm-12 text-center d-flex align-items-center justify-content-center'>
            <div>
                    <h1>Login to Seamless Art</h1>
                    <p className='small'>
                        If you're new to this website, <Link to='/signup'>Sign Up</Link> here
                    </p>
                </div>
            </div>
            <div className='col-md-6 col-sm-12'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Email address</label>
                    <input type='email' name='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' value={details.email} onChange={handleInput}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type='password' name='password' className='form-control' id='exampleInputPassword1' value={details.password} onChange={handleInput}/>
                </div>
                <button type='submit' className='btn text-white m-1 bg-blue card-btn' onClick={submitData}>Login</button>
            </form>
            </div>
        </div>
    </Fragment>
  )
}

export default Login