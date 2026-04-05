import { StyleSheet, Text, View } from "react-native";
import { CheckButton } from "./CheckButton";

type CheckButtonProps = {
    title: string,
    description?: string
}

export function Card({ title, description }: CheckButtonProps) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <CheckButton />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#e8e9ea",
        borderRadius: 8,
        padding: 12,
        flexDirection: "column",
        justifyContent: "center"
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
        flexShrink: 1
    },
    descriptionContainer: {
        paddingLeft: 40
    },
    description: {
        fontSize: 14,
        color: "#9a9797",
        flexShrink: 1
    }
})

