import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    label: string,
    icon?: keyof typeof Ionicons.glyphMap
}

export function Button({ label, icon, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.containerButton}  activeOpacity={0.8} {...rest}>
            {icon && <Ionicons name={icon} size={20} color="#fff"/>}
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
        borderRadius: 8,
        flexDirection: "row",
        gap: 8
    },
    label: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 700
    }
})