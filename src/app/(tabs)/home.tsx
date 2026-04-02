import { Card } from "@/components/Card"
import { Greeting } from "@/components/Greeting"
import { ScrollView, StyleSheet, View } from "react-native"

export default function Home() {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <Greeting label="You've got 7 tasks to do."/>
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
    },
    containerCards: {
        marginTop: 20,
        gap: 8
    }
})