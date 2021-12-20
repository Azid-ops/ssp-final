import React from "react";

//Importing Aux Component
import Aux from "../../Auxiliary/Auxiliary";

//Importing Nav css file
import classes from './Nav.css';

//Importing button
import { button } from "react-router-dom";
const Nav = (props) => {
    console.log("[Nav.js]: " + props.title);
    return(
        <Aux>
            <div className={classes.container}>
                <h2 className={classes.service}>Service Seeking Pakistan</h2>
                <div className={classes.hireOut}>
                    <button  onClick={props.click} className={classes.hire}>{props.first}</button>

                    <button onClick={props.click0} className={classes.hire}>{props.second}</button>
                    
                    <button onClick={props.click1} className={classes.hire}>{props.third}</button>

                    <button to={{
                        pathname: props.firstLink,
                        state:{
                            title:props.title
                        }
                    }} className={classes.hire}>{props.fifth}</button>
                </div>
            </div>
            
        </Aux>
    )
}

export default Nav;