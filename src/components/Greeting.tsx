import { StyleSheet, Text, View } from "react-native"

type GreetingProps = {
    label?: string,
    name?: string,
}

export function Greeting({ label }: GreetingProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Welcome, {""}
                <Text style={styles.greetingName}>Carol</Text>
            </Text>
            <Text style={styles.descriptionTitle}>{label}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        gap: 8
    },
    greeting: {
        fontSize: 26,
        fontWeight: "bold"
    },
    greetingName: {
        color: "#3f4caf"
    },
    descriptionTitle: {
        fontSize: 16
    },
})