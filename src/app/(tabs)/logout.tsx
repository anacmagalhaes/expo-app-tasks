import { Button } from "@/components/Button"
import { router } from "expo-router"
import { StyleSheet, View } from "react-native"

export default function Logout(){

    function logout(){
        router.push("/(auth)/sigin")
    }

    return (
        <View style={styles.container}>
            <Button label="Sair" onPress={logout}/>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 32,
        justifyContent: "center"
    },
})