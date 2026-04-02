import { Text, View, StyleSheet} from "react-native"

export default function Done() {
    return (
        <View style={styles.container}>
            <Text>Done</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 32
    }
})