//Importing React
import {React,useState} from 'react';

//Importing Aux
import Aux from '../../../Auxiliary/Auxiliary';

import {useNavigate} from 'react-router-dom';

//Importing MaterialPRovider
import MaterialProviderS from '../Pages/materialProviderS';

const ServiceSeekerC = () => {

    const Navigate = useNavigate();

    const [error,setError] = useState("");

    const [password,setPassword] = useState("");

    //Creating useState
    const [user,setUser] = useState({

        //Initialzing name equal to Empty String
        email:"",

        //Initialzing password equal to Empty String
        password:"",

        fields:""

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

    //Creating PostData function which will send requests to Node.js
    const PostData  = async (event) =>{

        console.log("Posting");
        //Cancelling default Events
        event.preventDefault();

        //Initializing user state value to email,name,password and retype
        const {email, password,fields} = user;

        //Sending Request to Node.js using Fetch API
        const result = await fetch("/materialProviderLogin", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                email , password,fields
            })
        });

        if(result.status===200)
        {
            Navigate("/UserMaterialProvider", {state:user.email});
        }

        if(result.status===201)
        {
            Navigate("/UserServiceProvider");
        }

        if(result.status===202)
        {
            Navigate("/UserServiceSeeker");
        }

        if(result.status===400)
        {
            setError("Invalid Credientials, Please Enter your Correct Credientials");
        }

        if(result.status===402)
        {
            setPassword("Forgot Your Password?");
        }
    }

    return(
        <Aux>
            
            <MaterialProviderS user={user} handleInput={handleInput} PostData={PostData} error={error} password={password}/>
        </Aux>
    )
}

export default ServiceSeekerC;