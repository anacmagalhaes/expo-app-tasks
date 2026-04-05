import { Button } from "@/components/Button"
import { Greeting } from "@/components/Greeting"
import { Input } from "@/components/Input"
import { useTasksDatabase } from "@/database/useTasksDatabase"
import { useTaskStore } from "@/store/taskStore"
import { router } from "expo-router"
import { useState } from "react"
import { Alert, StyleSheet, View } from "react-native"

export default function CreateTask() {
    const [task, setTasks] = useState([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const addTask = useTaskStore(state => state.addTask)


    const taskDatabase = useTasksDatabase();

    async function createTask() {

        try {

            if (!title.trim()) {
                return Alert.alert("Attention!", "It is mandatory that a task has a title.")
            }

            const newTask = {
                title: title,
                description: description
            }

            const response = await taskDatabase.create(newTask);
            addTask(response)
        } catch (error) {
            Alert.alert("Attention!", "Error registering.")
            console.log(error)
        }



        router.push("/(tabs)/home")
    }

    return (
        <View style={styles.container}>
            <Greeting label="Create your tasks here." />
            <Input label="Task Title" onChangeText={setTitle} />
            <Input label="Description Task" multiline={true} inputStyle={{ height: 100, textAlignVertical: "top" }} onChangeText={setDescription} />
            <Button label="Create Task" onPress={createTask} />
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