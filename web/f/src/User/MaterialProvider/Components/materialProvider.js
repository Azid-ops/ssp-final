import React, { useState,useEffect } from 'react';
import MaterialProviderPage from '../Pages/MaterialProvider';
import Aux from '../../../Auxiliary/Auxiliary';
import {useLocation, useNavigate } from 'react-router';

const MaterialProvider = () => {
    const {state} = useLocation();
    const Navigate = useNavigate();
    const [user,setUser] = useState({
        email : state,
        title: "",
        description: "",
        price: "",
        stock: "",
        link: "",
        area:""
    })

    let name,value;

    const handleInput = (event) => {
        event.preventDefault();
        name = event.target.name;
        value = event.target.value;
        setUser({...user, [name]:value});
    }

    const post =async (event) => {

        event.preventDefault();

        console.log("Getting here");

        const {email,title,description,price,stock,link,area} = user;

        const final = await fetch ('/addProduct',{
            method:"POST",

            headers : {
                'Content-type' : "application/json"
            },

            body:JSON.stringify({
                email,title,description,price,stock,link,area
            })
        });

        if(final.status === 200)
        {
            Navigate("/home", {state:user.email})
        }
    }

    const click = () => {
        console.log("Triggering click");
        Navigate("/home", {state:user.email})
    }

    const click1 = () => {
        console.log("Triggering click");
        Navigate("/updateProduct", {state:user.email})
    }

    const click2 = () => {
        console.log("Triggering click");
        Navigate("/deleteProduct", {state:user.email})
    }

    return(
        <Aux>
            <MaterialProviderPage 
                state={state} 
                handleInput={handleInput} 
                user={user} 
                post={post} 
                click={click} 
                click1={click1}
                click2={click2}
            />
        </Aux>
        
    )
    
}

export default MaterialProvider;