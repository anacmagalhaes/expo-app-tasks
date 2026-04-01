import { Button } from "@/components/Button"
import { router } from "expo-router"
import { Image, StyleSheet, Text, View } from "react-native"

export default function Index() {

    function IndexNavigation(){
        router.push("/sigin")
    }

    return (
        <View style={styles.container}>
            <Image style={styles.ilustration} source={require("@/assets/img.jpg")} />
            <View style={styles.containerTitles}>
                <Text style={styles.title}>Manage Your Daily Tasks</Text>
                <Text style={styles.subtitle}>You can easily break down your goals into actionble steps.</Text>
            </View>
            <View style={styles.containerButton}>
                <Button label="Get Started" onPress={IndexNavigation}/>
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
    ilustration: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        marginTop: 62
    },
    containerTitles: {
        alignItems: "center",
        gap: 12,
    },
    title: {
        fontSize: 32,
        fontWeight: 900
    },
    subtitle: {
        fontSize: 16
    },
    containerButton: {
       marginTop: 50
    }
})