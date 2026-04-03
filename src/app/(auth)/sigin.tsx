import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { useUserDatabase } from "@/database/useUserDatabase"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"
import bcrypt from "react-native-bcrypt"

export default function SingIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userDatabase = useUserDatabase();

    async function handleSingIn() {
        if (!email.trim() || !password.trim()) {
            return Alert.alert("Login", "All fields must be filled in.")
        }

        const response = await userDatabase.searchByEmail(email);

        if (!response) {
            return Alert.alert("Error", "User not found.")
        }

        const passValid = bcrypt.compareSync(password, response.password);

        if (!passValid) {
            return Alert.alert("Attention!", "Invalid password.")
        }
        console.log(response)

        Alert.alert(
            "Login",
            `Bem-vindo(a), ${response.name}`,
            [
                {
                    text: "Ok",
                    onPress: async () => {
                        await AsyncStorage.setItem("userId", String(response.id));
                        router.replace("/(tabs)/home");
                    }
                }
            ]
        );
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
                        <Input placeholder="Type your e-mail adress" keyboardType="email-address" label="E-mail" onChangeText={setEmail} />
                        <Input placeholder="Type your password" secureTextEntry label="Password" onChangeText={setPassword} />
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