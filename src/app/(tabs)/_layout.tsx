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
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search-outline" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="done"
                options={{
                    title: "Done",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="checkbox-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}