import React from "react";
import studentLogin from "../Pages/login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentSignup from '../../../Student/Signup/Pages/signup';

import Aux from "../../../Auxiliary/Auxiliary";
import materialProvider from "../../../MaterialProviders/Pages/materialProvider";
import serviceProvider from "../../../ServiceProvider/Pages/serviceProvider";
import serviceSeeker from "../../../ServiceSeeker/serviceSeeker";
import viewMaterial from "../../../MaterialProviders/Pages/viewMaterial";

const Stack = createNativeStackNavigator();
const studentLoginComponent = () =>{
    return(
        <Aux>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Student Login" component={studentLogin} options={{ title: 'Student Login' }}/>
                    <Stack.Screen name="Admin Signup" component={StudentSignup} options={{ title: 'Student Signup' }}/>
                    <Stack.Screen name="Material Provider" component={materialProvider} options={{ title: 'Material Provider' }}/>
                    <Stack.Screen name="Service Provider" component={serviceProvider} options={{ title: 'Service Provider' }}/>
                    <Stack.Screen name="Service Seeker" component={serviceSeeker} options={{ title: 'Service Seeker' }}/>
                    <Stack.Screen name="View Material" component={viewMaterial} options={{ title: 'Your Materials' }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Aux>
        
    )
}

export default studentLoginComponent;