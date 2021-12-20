import React, { useState } from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Nav from '../../Ui/Navbar/Nav';
import classes from './auth.css';

const Auth = (props) =>{
    let activation = null;

    if(props.Activate === false)
    {
        activation = "Activate my Account";
    }

    if(props.Activate === true)
    {
        activation = "Continue With your Account";
    } 

    return(
        <Aux>
            <Nav   
                first="First"
                second="Second"
                third="Third"
                fourth="Fourth"
                fifth="Fifth"
            />
            <div className={classes.outer}>
                <h3>Enter Your Secret Key to Continue</h3>
                <form>
                    <input onChange={props.handleInput} className={classes.mine} name="account" placeholder="Your Key..."/>
                    <br />
                    <p className={classes.secret}>{props.secret}</p>
                    <button onClick={
                        props.Activate === false?props.PostData:props.Continue
                    } className={classes.nav}>{activation}</button>
                </form>
            </div>
        </Aux>
    )
}

export default Auth;