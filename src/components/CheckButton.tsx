import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export function CheckButton(){
    const [color, setColor] = useState('#e9e9e9');

    function checkTask(){
        setColor(color == '#e9e9e9' ? '#3f4caf' : '#e9e9e9') //se color for == cor cinza mude para roxo, se não continue cinza
    }


    return(
        <TouchableOpacity style={[styles.container, {backgroundColor: color}]} onPress={checkTask}></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#3f4caf",
        borderRadius: 8
    }
})