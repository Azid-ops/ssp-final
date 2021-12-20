import React from 'react';
import Aux from '../../../Auxiliary/Auxiliary';
import { useNavigate } from 'react-router';
import GoogleLogin from 'react-google-login';


const Google = () =>{

    const Navigate = useNavigate();

    const responseGoogle = (response) => {
        if(response.Ba)
        {
            Navigate("/UserServiceSeeker") 
        }
           
    }

    return(
        <Aux>
            <GoogleLogin
                clientId="606610516261-498r0sni4h55s0cpdc08uiatke39dbnv.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </Aux>
    )
}
export default Google;