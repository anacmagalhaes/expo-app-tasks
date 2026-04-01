import { StyleSheet, TextInput, TextInputProps, View } from "react-native"



export function Input({...rest}: TextInputProps){
    return (
        <View>
            <TextInput style={styles.input} {...rest}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 45,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12
    }
})