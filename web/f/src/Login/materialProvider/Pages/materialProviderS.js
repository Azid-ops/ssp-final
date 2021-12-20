//Importing React
import React from 'react';
import { NavLink } from 'react-router-dom';

//Importing Aux
import Aux from '../../../Auxiliary/Auxiliary';

import Google from '../../../Google/Login/Pages/google';

import Facebook from '../../../Facebook/Login/Pages/facebook';

//Importing Nav
import Nav from '../../../Ui/Navbar/Nav';

//Importing Css
import classes from './materialProvider.css';

const materialProviderS = (props) => {
    return(
        <Aux>
            <Nav 
                second={"Trouble Logging In"}
                third={"Home"}
                fourth={"About Us"}
            />
            <div className={classes.outerDiv}>
                <h1 className={classes.signup}>Login</h1>
            </div>
            <div className={classes.outerDiv1}>
                <form>
                    <br />
                    <br />
                    <input 
                        className={classes.mine}
                        value={props.user.email}
                        onChange={props.handleInput}
                        name="email" 
                        placeholder="Enter Your Gmail"/>
                    <br />
                    <br />
                    <input
                        className={classes.mine}
                        value={props.user.password}
                        onChange={props.handleInput} 
                        name="password" 
                        placeholder="Enter Password"/>
                    <br />
                    <br />
                    <label for="fields">Choose Account Type </label>
                    <select value={props.user.fields} onChange={props.handleInput} name="fields">
                        <option  value="">Choose</option>
                        <option  value="Material Provider">Material Provider</option>
                        <option  value="Service Provider">Service Provider</option>
                        <option  value="Service Seeker">Service Seeker</option>
                    </select>
                    <br />
                    <button onClick={props.PostData} className={classes.button}>Login</button>
                    <br />
                    <p className={classes.error}>{props.error}</p>
                    <NavLink className={classes.forgot} to="/forgot"><p>{props.password}</p></NavLink>
                    <p>New to SSP? <NavLink className={classes.member} to="/signupMaterial">SignUp</NavLink></p>
                </form>
                <p>Service Seeker can also login From</p>
                <Google />
                <br />
                <Facebook />
                <br />
                <br />
                <br />
            </div>
            
        </Aux>
    )
}

export default materialProviderS;