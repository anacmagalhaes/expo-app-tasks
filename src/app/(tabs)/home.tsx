import { Card } from "@/components/Card";
import { Greeting } from "@/components/Greeting";
import { useTasksDatabase } from "@/database/useTasksDatabase";
import { useTaskStore } from "@/store/taskStore";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
    //usando zustand
    const tasks = useTaskStore(state => state.tasks)
    const setTasks = useTaskStore(state => state.setTasks)

    const tasksDatabase = useTasksDatabase();

    async function loadingData() {
        const response = await tasksDatabase.get();
        setTasks(response);
    }

    useEffect(() => {
        loadingData();
    }, [])



    console.log(`tasks`, tasks)
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <Greeting label={`You've got ${tasks.length} tasks to do.`} />
                <View style={styles.containerCards}>
                    {tasks.map(task => (
                        <Card key={task.id} title={task.title} description={task.description} />
                    ))}
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