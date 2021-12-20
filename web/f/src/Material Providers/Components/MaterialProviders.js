//Importing React
import {React,useState} from 'react';

//Importing Aux
import Aux from '../../../Auxiliary/Auxiliary';
import MaterialProvider from '../Pages/MaterialProviders';

//Importing Service Seeker
import ServiceSeeker from '../Pages/ServiceSeeker';
import ServiceSeekerL from '../Pages/ServiceSeekerL';

const MaterialProvider = () => {

    //Creating useState
    const [user,setUser] = useState({

        //Initialzing name equal to Empty String
        fname:"",

        email:"",

        //Initialzing password equal to Empty String
        password:"",

        //Initialzing retype equal to Empty String
        retype:""
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

        console.log("Posting")
        //Cancelling default Events
        event.preventDefault();

        //Initializing user state value to email,name,password and retype
        const {fname, email, password, retype} = user;

        //Sending Request to Node.js using Fetch API
        await fetch("/Usersignup", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                fname,email, password,retype
            })
        });
    }

    return(
        <Aux>
            <ServiceSeeker user={user} handleInput={handleInput} PostData={PostData}/>
        </Aux>
    )
}

export default MaterialProvider;