import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TextInput, TouchableHighlight,Picker } from "react-native";
import Aux from "../../Auxiliary/Auxiliary";

const serviceProvider = () =>{

    const navigation = useNavigation();
    const [gmail,setGmail] = useState("");
    const [error,setError] = useState("");
    const [password,setPassword] = useState("");
    const [selectedValue, setSelectedValue] = useState("Choose");
    return(
        <Aux>
            <View style={styles.outer}>
                <Text style={styles.student}>
                    Service Provider
                </Text>
                <ScrollView>
                    
                </ScrollView>
            </View>
        </Aux>
    )
}

const styles = StyleSheet.create({
    
});

export default serviceProvider;