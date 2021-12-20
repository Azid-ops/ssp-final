import React, {useState} from "react";
import { useLocation,useNavigate } from "react-router";
import Aux from "../../../../Auxiliary/Auxiliary";
import Nav from "../../../../Ui/Navbar/Nav";
import UpdateProductPage from "../Pages/updateProduct";

const updateProduct = (props) => {

    const Navigate = new useNavigate();
    const {state} = new useLocation();
    const [user,setUser] = new useState({
        email : state,
        id:"",
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

    const postData =async (event) => {

        event.preventDefault();

        console.log("Getting here");

        const {email,id,title,description,price,stock,link,area} = user;

        const final = await fetch ('/updateProduct',{
            method:"POST",

            headers : {
                'Content-type' : "application/json"
            },

            body:JSON.stringify({
                email,id,title,description,price,stock,link,area
            })
        });
    }


    const click = () => {
        console.log("Triggering click");
        Navigate("/home", {state:state})
    }

    const click0 = () => {
        console.log("Triggering click");
        Navigate("/userMaterialProvider", {state:state})
    }

    return(
        <Aux>
            <Nav 
                first="Home" 
                firstLink={"/home"} 
                secondLink={"/UserMaterialProvider"} 
                thirdLink={"#"} 
                click={click}
                click0={click0}
                fourthLink={'#'} 
                fifthLink={"#"} 
                second="Add Product" 
                third="Update Product" 
                fourth="Delete Product" 
                fifth={"Welcome "+ state}
            />
            <UpdateProductPage user={user} handleInput={handleInput} postData={postData}/>
        </Aux>
    )
}

export default updateProduct;