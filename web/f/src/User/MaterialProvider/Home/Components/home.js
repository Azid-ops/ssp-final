import React, {useState,useEffect} from "react";
import Aux from "../../../../Auxiliary/Auxiliary";
import { useLocation } from "react-router";
import Nav from "../../../../Ui/Navbar/Nav";
import HomePage from "../Pages/home";
import { useNavigate } from "react-router";

const Home = (props) => {
    const state = useLocation();

    const Navigate = new useNavigate();
    
    const [user,setUser] =useState({
        email:state
    });


    const deleteProduct = async (id) => {
        if(id)
        {
            await fetch ('/deleteProduct',{
                method:"POST",
    
                headers : {
                    'Content-type' : "application/json"
                },
                body:JSON.stringify({id})
            });
        }
        else
        {
            console.log("Dont have any Id");
        }

        
    }

    const [checkData,setCheckData] = useState([]);

    const callData = async () =>{
        try
        {
            const res = await fetch(`/getProducts`, {
                method: "GET",

                headers:{           
                    "Content-Type":"application/json "
                },

            });

            const data = await res.json();

            setCheckData(data);
        
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(()=>{
        callData();
    });

    const click0=() => {
        console.log("Triggering click");
        Navigate("/userMaterialProvider", {state:state.state})
    }


    const click1=() => {
        console.log("Triggering click");
        Navigate("/updateProduct", {state:state.state})
    }

    const click4 = () => {
        console.log("Triggering click");
        Navigate("/updateProduct", {state:state.state})
    }

    return(
        <Aux>
            <Nav
                firstLink={"/home"} 
                secondLink={"/UserMaterialProvider"} 
                thirdLink={"/updateProduct"}
                click0={click0} 
                click1={click1}
                fourthLink={'#'} 
                fifthLink={"#"}  
                first="Home" 
                second="Add Product" 
                third="Update Product" 
                fourth="Delete Product" 
                fifth={"Welcome " + state.state}
            />
            <HomePage deleteProduct={deleteProduct} click4={click4} checkData={checkData} state={state}/>
        </Aux>
    )
}

export default Home