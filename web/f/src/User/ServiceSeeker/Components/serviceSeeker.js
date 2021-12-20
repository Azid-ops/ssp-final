import React, { useState,useEffect } from 'react';
import Aux from '../../../Auxiliary/Auxiliary';
import ServiceSeekerPage from '../Pages/ServiceSeeker';

const ServiceSeeker = () => {
    
    const [checkData,setCheckData] = useState([]);

    const [register,setRegister] = useState(false);

    const callData = async () =>{
        try
        {
            const res = await fetch('/getReg', {
                method: "GET",
                headers:{
                    Accept:"application/json",
                    
                    "Content-Type":"application/json "
                }
            });

            const data = await res.json();
            console.log(data);
            setCheckData(data);
        
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(()=>{
        callData();
        console.log(checkData);
    });
    
    return(
        <Aux>
            <ServiceSeekerPage checkData={checkData} register={register} />
        </Aux>
        
    )
    
}

export default ServiceSeeker;