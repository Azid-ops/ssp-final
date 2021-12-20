import React from "react";
import { useLocation } from "react-router";
import Aux from "../../../../Auxiliary/Auxiliary";
import classes from './home.css';
import Giphy from '../../../../Images/giphy.gif';

const homePage = (props) => {

    const myData = (dat) =>{
        if(dat.length === 0)
        {
            return <div>
                <img className={classes.gif} src={Giphy}/>
            </div>
        }
        else
        {   
            <h1>Your Materials:</h1>
            return dat.map((post)=>{
                if(post.email !== props.state.state)
                {
                    <img className={classes.gif} src={Giphy}/>
                }
                else
                {
                    if(props.state.state === post.email)
                    {
                        return <div className={classes.data} key={post._id}>
                        {
                            <li className={classes.myList}>
                                <div className={classes.candi}>
                                    <img className={classes.profile} src={post.link} alt="profile" />
                                    <br />
                                    <div className={classes.occu}>
                                        <p>Id: {post._id}</p>
                                        <p>Title: {post.title}</p>
                                        <p>Description: {post.description}</p>
                                        <p>Price: {post.price}</p>
                                        <p>Stock: {post.stock}</p>
                                        <p>Area: {post.area}</p>
                                    </div>
                                    <br />
                                    <button onClick={props.click4} className={classes.Election}>Update</button>
                                    <button onClick={() => props.deleteProduct(post._id)} className={classes.Election1}>Delete Material</button>
                                </div> 
                            </li>
                        }
                        </div>
                    }
                }
                
                
            })
        }
    }
    return(
        <Aux>
            <div className={classes.outer}>
                <div>
                    {myData(props.checkData)}
                </div>
            </div>
            
        </Aux>
    )
}

export default homePage;