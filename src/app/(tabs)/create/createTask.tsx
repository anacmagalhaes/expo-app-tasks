import { Button } from "@/components/Button"
import { Greeting } from "@/components/Greeting"
import { Input } from "@/components/Input"
import { router } from "expo-router"
import { StyleSheet, View } from "react-native"

export default function CreateTask() {

    function createTask(){
        router.push("/(tabs)/home")   
    }

    return (
        <View style={styles.container}>
            <Greeting label="Create your tasks here."/>
            <Input label="Task Title"/>
            <Input label="Description Task" multiline={true} inputStyle={{ height: 100, textAlignVertical: "top"}}/>
            <Button label="Create Task" onPress={createTask}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 32,
        gap: 16
    },
})