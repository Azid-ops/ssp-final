import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TextInput, TouchableHighlight,Picker } from "react-native";
import Aux from "../../../Auxiliary/Auxiliary";

const AdminLogin = () =>{

    const navigation = useNavigation();
    const [gmail,setGmail] = useState("");
    const [error,setError] = useState("");
    const [password,setPassword] = useState("");
    const [selectedValue, setSelectedValue] = useState("Choose");

    const PostData  =async (event) =>{

        console.log("Posting");
    
        event.preventDefault();

        //Sending Request to Node.js using Fetch API
        const final = await fetch("http://192.168.0.107:5000/userLogin", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },
            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                gmail,
                password,
                selectedValue
            })
        })

        if(final.status === 401)
        {
            setError("Wrong Credentials");
        }

        if(final.status === 402)
        {
            setError("User not found");
        }

        if(final.status === 200)
        {
            navigation.navigate("Material Provider" , {state:gmail});
        }

        if(final.status === 201)
        {
            navigation.navigate("Service Provider");
        }

        if(final.status === 202)
        {
            navigation.navigate("Service Seeker");
        }

    }


    return(
        <Aux>
            <View style={styles.outer}>
                <Text style={styles.student}>
                    User Login
                </Text>
                <ScrollView>
                    <TextInput 
                        placeholder="Enter your Gmail"
                        label="gmail"
                        value={gmail}
                        style={styles.id}
                        onChangeText={setGmail}
                    />
                    <TextInput 
                        placeholder="Enter your Password"
                        value={password}
                        label="password"
                        style={styles.id}
                        onChangeText={setPassword}
                    />
                    <Picker
                        selectedValue={selectedValue}
                        style={{width: 200 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Choose" value="" />
                        <Picker.Item label="Material Provider" value="Material Provider" />
                        <Picker.Item label="Service Provider" value="Service Provider" />
                        <Picker.Item label="Service Seeker" value="Service Seeker" />
                    </Picker>

                    <Text style={styles.error}>
                        {error}
                    </Text>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.login} onPress={PostData}>
                            Login
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={styles.button}
                    >
                        <Text style={styles.login}
                            onPress={()=>{
                                navigation.navigate(
                                    'Admin Signup'
                                );
                            }}
                        >
                            User Signup
                        </Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        </Aux>
    )
}

const styles = StyleSheet.create({
    outer: {
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
    },
    student: {
        fontSize:20,
        marginTop:"40%"
    },
    error:{
        color:"red",
        marginTop:"2%",
        textAlign:"center"
    },
    id:{
        marginTop:"10%",
        borderWidth:1,
        width:180,
        paddingLeft:20,
        height:30,
        borderColor:"gray"
    },
    button:{
        borderWidth:1,
        borderColor:"gray",
        backgroundColor:"gray",
        marginTop:10,
        height:30,
        justifyContent:"center",
        alignItems:"center",
    },
    login:{
        color:"white",
    }
    
});

export default AdminLogin;