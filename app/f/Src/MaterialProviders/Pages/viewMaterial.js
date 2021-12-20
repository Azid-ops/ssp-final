import React, {useState,useEffect} from "react";
import { useNavigation,useLocation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TextInput, TouchableHighlight,Picker } from "react-native";
import Aux from "../../Auxiliary/Auxiliary";

const viewMaterial = ({route}) =>{

    const { state } = route.params;
    const [checkData,setCheckData] = useState([]);

    const callData = async () =>{
        try
        {
            const res = await fetch(`http://192.168.0.107:5000/getProducts`, {
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

    const myData = (dat) =>{
        if(dat.length === 0)
        {
            return <View>
                <Text>No Data</Text>
            </View>
        }
        else
        {   
            <Text>Your Materials:</Text>
            return dat.map((post)=>{
                return (
                    <View key={post.key} style={{margin: 10}}>
                        <Text>{post._id}</Text>
                    </View>
                )
            })
        }
    }
    return(
        <Aux>
            <View>
                <Text>{checkData}</Text>
                {
                    myData(checkData)
                }
            </View>
        </Aux>
    )
}

const styles = StyleSheet.create({
    
});


export default viewMaterial;