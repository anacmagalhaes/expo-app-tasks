import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { useUserDatabase } from "@/database/useUserDatabase"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"
import bcrypt from "react-native-bcrypt"

export default function SignUp() {
    const [id, setId] = useState("");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfimPass] = useState("")

    const usersDatabase = useUserDatabase()

    async function handleSingUp() {
        try {

            if (!name.trim() || !email.trim() || !password.trim() || !confirmPass.trim()) {
                return Alert.alert("Register", "All fields must be filled in.")
            } else if (confirmPass.trim() != password.trim()) {
                return Alert.alert("Attention!", "The passwords don't match.")
            }

            const pass = password;
            const salt = 10;
            const hashPass = bcrypt.hashSync(pass, salt);

            const response = await usersDatabase.create({ name, email, password });

            Alert.alert(
                "Register",
                "User successfully registered!",
                [
                    { text: "Login", onPress: () => router.push("/(tabs)/home") }
                ]
            );
        } catch (error) {
            Alert.alert("Attention!", "Error registering.")
            console.log(error)
        }
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
                        <Input placeholder="Type your name" onChangeText={setName} label="Name" />
                        <Input placeholder="Type your e-mail adress" keyboardType="email-address" onChangeText={setEmail} label="E-mail" />
                        <Input placeholder="Type your password" secureTextEntry onChangeText={setPassword} label="Password" />
                        <Input placeholder="Confirm your password" secureTextEntry onChangeText={setConfimPass} label="Confirm Password" />
                        <Button label="Register" onPress={handleSingUp} />
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