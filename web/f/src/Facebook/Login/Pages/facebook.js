import React from "react";
import Aux from "../../../Auxiliary/Auxiliary";
import { FacebookProvider, Login } from 'react-facebook';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import classes from './facebook.css';
import { useNavigate } from "react-router";

const Facebook = () =>{

    const Navigation = useNavigate();

    const handleResponse = (data) => {
        if(data.profile)
        {
            Navigation("/UserServiceSeeker")
        }
        
      } 
     
    const handleError = (error) => {
        console.log(error);
      }

    return(
        <Aux>
            <div className={classes.face}>
                <FacebookProvider appId="881524762508155">
                    <Login
                        scope="email"
                        autoLoad={true}
                        fields="name,email,picture"
                        onCompleted={handleResponse}
                        onError={handleError}
                        >
                        {({ loading, handleClick, error, data }) => (
                            <span className={classes.facebook} onClick={handleClick}>
                                Login via Facebook
                            {loading && (
                                <span>Loading...</span>
                            )}
                            </span>
                        )}
                    </Login>
                </FacebookProvider>
            </div>
            
        </Aux>
    )
}

export default Facebook;