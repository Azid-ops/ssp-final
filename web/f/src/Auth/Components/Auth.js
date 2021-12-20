import { React, useState} from "react";
import { useNavigate } from "react-router";
import Aux from "../../Auxiliary/Auxiliary";
import AuthPage from '../Pages/auth';

const Auth = () =>{
    const Navigate = useNavigate();

    const [Error,setError] = useState("");

    const [Activate, setActivation] = useState(false);

    //Creating useState
    const [user,setUser] = useState({

        //Initialzing name equal to Empty String
        account:""
    });

    //Creating Variable named name and value
    let name,value;

    //Creating handleInput Function
    const handleInput = (event) =>{

        //Getting name from Form and saving it into name variable
        name=event.target.name;

        //Getting value from Form and saving it into value variable
        value=event.target.value;

        //Changing State
        setUser({
            
            //Creating Copy of the state and giving value to each name
            ...user, [name]:value
        });
    }

    const Continue = (event) => {
        event.preventDefault();
        Navigate("/login");
    }

    //Creating PostData function which will send requests to Node.js
    const PostData  = async (event) =>{

        console.log("Posting");
        //Cancelling default Events
        event.preventDefault();

        //Initializing user state value to email,name,password and retype
        const {account} = user;

        //Sending Request to Node.js using Fetch API
        const result = await fetch("/AuthUser", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                account
            })
        });


        if(result.status === 200)
        {
            setActivation(true);
        }

        if(result.status === 400)
        {
            setError("Please Double Check Your Secret Key");
        }
    }

    

    return(
        <Aux>
            <AuthPage 
                handleInput={handleInput}
                PostData={PostData} 
                secret={Error} 
                Activate={Activate} 
                Continue = {Continue}
            />
        </Aux>
    )
}

export default Auth;