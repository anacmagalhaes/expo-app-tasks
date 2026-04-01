import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type ButtonProps = TouchableOpacityProps & {
    label: string
}

export function Button({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.containerButton}  activeOpacity={0.8} {...rest}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        width: "100%",
        height: 48,
        backgroundColor: "#505dc3",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    label: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 700
    }
})