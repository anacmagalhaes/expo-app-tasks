import { Button } from "@/components/Button"
import { Greeting } from "@/components/Greeting"
import { router } from "expo-router"
import { Image, StyleSheet, View } from "react-native"

export default function Create() {

    function createTask() {
        router.push('/create/createTask')
    }

    return (
        <View style={styles.container}>
            <Greeting label="Create tasks to archive more."/>
            <View style={styles.container2}>
                <Image source={require("@/assets/img3.jpg")} style={styles.ilustration} />
                <Button icon="add" label="Create Task" onPress={createTask} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 32,
    },
    container2: {
        flex: 1,
        justifyContent: "center",
    },
    ilustration: {
        width: "100%",
        height: 300,
    },
})