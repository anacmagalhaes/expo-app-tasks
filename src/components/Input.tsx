import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View } from "react-native"

type InputProps = TextInputProps & {
    label?: string,
    inputStyle?: StyleProp<TextStyle>
}

export function Input({ label, inputStyle, ...rest}: InputProps){
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={[styles.input, inputStyle]} {...rest}/>
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
    },
    container: {
        flexDirection: "column",
    },
    label: {
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 6
    }
})