//Importing React
import React from 'react';

//Importing Aux
import Aux from '../../Auxiliary/Auxiliary';

//Importing Nav
import Nav from '../../Ui/Navbar/Nav';

import classes from './forgotPassword.css';

const ServiceSeeker = (props) => {
    return(
        <Aux>
            <Nav 
                second={"Trouble Logging In"}
                third={"Sign In"}
                fourth={"About Us"}
            />
            <div className={classes.outerDiv}>
                <h1 className={classes.signup}>Reset Your Password</h1>
            </div>
            <div className={classes.outerDiv1}>
                <form>
                    <input 
                        // value={props.user.fname}
                        // onChange={props.handleInput}
                        name="fname" 
                        placeholder="Enter Your Email"/>
                    <br />
                    <button onClick={props.PostData} className={classes.button}>Reset</button>
                </form>
            </div>
        </Aux>
    )
}

export default ServiceSeeker;