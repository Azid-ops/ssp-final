//Importing React
import {React,useState} from 'react';
import { useNavigate } from 'react-router';

//Importing Aux
import Aux from '../../../Auxiliary/Auxiliary';

//Importing MaterialPRovider
import MaterialProvider from '../Pages/materialProvider';

const ServiceSeekerC = () => {

    const Navigate = useNavigate();

    const [error,setError] = useState("");

    const [gmail,setGmail] = useState("");
    
    //Creating useState
    const [user,setUser] = useState({

        //Initialzing name equal to Empty String
        fname:"",

        lname:"",

        //Initialzing password equal to Empty String
        password:"",

        //Initialzing retype equal to Empty String
        retype:"",
        
        fields:"",
    });

    //Creating Variable named name and value
    let name,value;

    //Creating handleInput Function
    const handleInput = (event) =>{
        console.log("Changing");
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

        console.log("Posting")
        //Cancelling default Events
        event.preventDefault();

        //Initializing user state value to email,name,password and retype
        const {fname, lname, password, retype, fields} = user;


        //Sending Request to Node.js using Fetch API
        const result = await fetch("/materialProviderSignup", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                fname,lname, password,retype,fields
            })
        });

        if(result.status === 401)
        {
            setError("Invalid Credientials, please SignUp with correct Credeintials");
        }

        if(result.status === 200)
        {
            Navigate("/Auth")
        }

        if(result.status === 402)
        {
            setGmail("Gmail Already Exist, Please choose a New Email");
        }
    }

    return(
        <Aux>
            <MaterialProvider user={user} handleInput={handleInput} PostData={PostData} error={error} gmail={gmail}/>
        </Aux>
    )
}

export default ServiceSeekerC;