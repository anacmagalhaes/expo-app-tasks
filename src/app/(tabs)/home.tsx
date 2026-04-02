import { Card } from "@/components/Card"
import { ScrollView, StyleSheet, Text, View } from "react-native"

export default function Home() {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <Text style={styles.greeting}>Welcome, {""}
                    <Text style={styles.greetingName}>Carol</Text>
                </Text>
                <Text style={styles.descriptionTitle}>You've got 7 tasks to do.</Text>
                <View style={styles.containerCards}>
                    <Card />

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 32,
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
    containerCards: {
        marginTop: 20,
        gap: 8
    }
})