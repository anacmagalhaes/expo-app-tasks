import { useUserDatabase } from "@/database/useUserDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type GreetingProps = {
    label?: string,
    name?: string,
}

export function Greeting({ label, name }: GreetingProps) {
    const [userName, setUserName] = useState("")

    const usersDatabase = useUserDatabase()

    async function getUser(){
        const userId = await AsyncStorage.getItem("userId");
        if(userId){
            const user = await usersDatabase.searchById(Number(userId));
            setUserName(user!.name);
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Welcome, Mr. {""}
                <Text style={styles.greetingName}>{userName}</Text>
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