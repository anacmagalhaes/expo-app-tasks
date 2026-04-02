import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Link, router } from "expo-router"
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"

export default function SingIn() {

    function handleSingIn() {
        router.push("/(tabs)/home")
    }


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    <Image style={styles.ilustration} source={require("@/assets/img1.jpg")} />

                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Login</Text>
                        <Text style={styles.subtitle}>Login with your e-mail adress and password.</Text>
                    </View>

                    <View style={styles.form}>
                        <Input placeholder="Type your e-mail adress" keyboardType="email-address" label="E-mail"/>
                        <Input placeholder="Type your password" secureTextEntry label="Password"/>
                        <Button label="Login" onPress={handleSingIn} />
                    </View>

                    <Text style={styles.footerText}>Don't have an account? {""}
                        <Link href="/(auth)/signup" style={styles.footerLink}>
                            Register here.
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