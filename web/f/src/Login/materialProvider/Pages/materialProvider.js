//Importing React
import React from 'react';

//Importing Aux
import Aux from '../../../Auxiliary/Auxiliary';

//Importing Nav
import Nav from '../../../Ui/Navbar/Nav';

//Importing Css
import classes from './materialProvider.css';
import { NavLink } from 'react-router-dom';

const materialProvider = (props) => {
    return(
        <Aux>
            <Nav 
                second={"Trouble Logging In"}
                third={"Home"}
                fourth={"About Us"}
            />
            <div className={classes.outerDiv}>
                <h1 className={classes.signup}>SignUp</h1>
            </div>
            <div className={classes.outerDiv1}>
                <form>
                    <input 
                        className={classes.mine}
                        value={props.user.fname}
                        onChange={props.handleInput}
                        name="fname" 
                        placeholder="Enter First Name"/>
                    <br />
                    <br />
                    <input 
                        className={classes.mine}
                        value={props.user.lname}
                        onChange={props.handleInput}
                        name="lname" 
                        placeholder="Enter Gmail"/>
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
                    <input 
                        className={classes.mine}
                        value={props.user.retype}
                        onChange={props.handleInput}
                        name="retype" 
                        placeholder="Renter Password"/>
                    <br />
                    <br />
                    <label for="fields">Choose Account Type </label>
                    <select value={props.user.fields} onChange={props.handleInput} name="fields">
                        <option  value="">Choose</option>
                        <option  value="Material Provider">Material Provider</option>
                        <option  value="Service Provider">Service Provider</option>
                        <option  value="Service Seeker">Service Seeker</option>
                    </select>
                    <br/>
                    <br />
                    <button onClick={props.PostData} className={classes.button}>SignUp</button>
                    <p className={classes.error}>{props.error}</p>
                    <p className={classes.error}>{props.gmail}</p>
                    <p>Already a Member? <NavLink className={classes.member} to="/login">Login</NavLink></p>
                </form>
            </div>
        </Aux>
    )
}

export default materialProvider;