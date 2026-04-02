import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="create"
                options={{
                    title: "Create",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="create-outline" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="logout"
                options={{
                    title: "Logout",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="log-out-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}