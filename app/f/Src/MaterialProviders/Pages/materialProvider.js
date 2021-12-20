import React, {useState} from "react";
import { useNavigation,useLocation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TextInput, TouchableHighlight,Picker, ImageBackground } from "react-native";
import Aux from "../../Auxiliary/Auxiliary";

const materialProvider = ({route,navigation}) =>{

    const navigations = useNavigation();
    const { state } = route.params;
    const [gmail,setGmail] = useState(JSON.stringify(state));
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [stock,setStock] = useState("");
    const [error,setError] = useState("");

    const PostData  =async (event) =>{

        console.log("Posting");
    
        event.preventDefault();

        //Sending Request to Node.js using Fetch API
        await fetch("http://192.168.0.107:5000/addProduct", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{
                //Setting Content-Type
                "Content-Type" : "application/json"
            },
            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                gmail,title,description,price,stock
            })
        })
    }
    return(
        <Aux>
            <View style={styles.outer}>
                <Text style={styles.student}>
                    Add Material
                </Text>
                <ScrollView>
                    <TextInput 
                        placeholder="Enter Title"
                        label="title"
                        value={title}
                        style={styles.id}
                        onChangeText={setTitle}
                    />

                    <TextInput 
                        placeholder="Description"
                        value={description}
                        label="description"
                        style={styles.id}
                        onChangeText={setDescription}
                    />

                    <TextInput 
                        placeholder="Price"
                        value={price}
                        label="price"
                        style={styles.id}
                        onChangeText={setPrice}
                    />

                    <TextInput 
                        placeholder="Stock"
                        value={stock}
                        label="stock"
                        style={styles.id}
                        onChangeText={setStock}
                    />

                    <Text style={styles.error}>
                        {error}
                    </Text>
                    <TouchableHighlight 
                        style={styles.button}
                        onPress={PostData}
                    >
                        <Text style={styles.login}>
                            Add Material
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={styles.button}
                    >
                        <Text style={styles.login}
                            onPress={()=>{
                                navigations.navigate(
                                    'View Material' , {state:gmail}
                                );
                            }}
                        >
                            View Materials
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
        marginTop:"40%",
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
        backgroundColor:"green"
    },
    login:{
        color:"white",
        
    }
    
});


export default materialProvider;