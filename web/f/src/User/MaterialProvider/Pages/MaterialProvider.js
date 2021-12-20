import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from '../../../Ui/Navbar/Nav';
import Aux from "../../../Auxiliary/Auxiliary";
import classes from './MaterialProvider.css';

const MaterialProviderPage = (props) =>{
    console.log("State is: " + props.state);
    return(
        <Aux>
            <Nav 
                first="Home" 
                firstLink={"/home"} 
                click={props.click}
                click1={props.click1}
                click2={props.click2}
                secondLink={"/UserMaterialProvider"} 
                thirdLink={"#"} 
                fourthLink={'#'} 
                fifthLink={"#"} 
                second="Add Product" 
                third="Update Product" 
                fourth="Delete Product" 
                fifth={"Welcome "+ props.state}
            />

            <div className={classes.outer}>
                <div>
                    <h1>Add your Product</h1>
                    <div>
                        <form>
                            <input value={props.user.state} name="email" type="hidden" />
                            <input  className={classes.input}  value={props.user.title} onChange={props.handleInput} name="title" placeholder="Enter Your Product's Title"/>
                            <br />
                            <br />
                            <textarea name="description" value={props.user.description} onChange={props.handleInput} rows="4" cols="45" placeholder="Enter Description" />
                            <br />
                            <br />
                            <input className={classes.input} value={props.user.price} onChange={props.handleInput} name="price" type="text" placeholder="Product's Price"/>
                            <br />
                            <br />
                            <input className={classes.input} value={props.user.stock} onChange={props.handleInput} name="stock" type="number" placeholder="Stock Available"/>
                            <br />
                            <br />
                            <input className={classes.input} value={props.user.link} onChange={props.handleInput} name="link" type="text" placeholder="Image Link"/>
                            <br />
                            <br />
                            <label for="area">Delivery Areas </label>
                            <select value={props.user.area} onChange={props.handleInput} name="area">
                                <option  value="">Choose</option>
                                <option  value="Abbottabad">Abbottabad</option>
                                <option  value="Manshera">Manshera</option>
                                <option  value="Haripur">Haripur</option>
                            </select>
                            <br />
                            <br />
                            <button className={classes.post} onClick={props.post}>Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default MaterialProviderPage;