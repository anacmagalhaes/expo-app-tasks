import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Link, router } from "expo-router"
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

export default function SignUp() {

    function handleSingUp(){
       
    }


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.select({ ios: "padding", android: "height" })}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <Image style={styles.ilustration} source={require("@/assets/img2.jpg")} />

                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Register</Text>
                        <Text style={styles.subtitle}>Register with your name, e-mail adress and password.</Text>
                    </View>

                    <View style={styles.form}>
                        <Input placeholder="Type your name" />
                        <Input placeholder="Type your e-mail adress" keyboardType="email-address" />
                        <Input placeholder="Type your password" secureTextEntry />
                        <Input placeholder="Confirm your password" secureTextEntry />
                        <Button label="Register" onPress={handleSingUp}/>
                    </View>

                    <Text style={styles.footerText}>You already have an account? {""}
                        <Link href="/(auth)/sigin" style={styles.footerLink}>
                            Login here.
                        </Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 32,
    },
    containerTitle: {
        alignItems: "center",
        marginTop: 12,
        gap: 4
    },
    ilustration: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        marginTop: 62,
    },
    form: {
        marginTop: 12,
        gap: 12
    },
    title: {
        fontSize: 32,
        fontWeight: 900
    },
    subtitle: {
        fontSize: 16
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,
        fontSize: 16,
    },
    footerLink: {
        color: "#032AD7",
        fontWeight: 700
    }
})