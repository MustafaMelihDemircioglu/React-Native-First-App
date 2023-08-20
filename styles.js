import { StyleSheet } from "react-native"

export const appStyles = StyleSheet.create({

    safeArea: {
        flex: 1,
        margin: 16,
      },

    container: {
        flex: 1,
    },

    title: {
        fontSize: 30,
    },

    subtitle: {
        fontSize: 20,
        marginTop: 4,
        color: "#666",
    },

    input: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 18,
        marginTop: 8,
    },

    buttonContainer: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        backgroundColor: "lightgreen",
        alignSelf: "flex-end",
        alignItems: "center",
        marginTop: 8,
    },

    buttonText: {
        fontSize: 18,
    },

    divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 32,
    },

    taskContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ddd",
        marginBottom: 8,
        justifyContent: "space-between",
    },

    taskText: {
        fontSize: 18,
        paddingVertical: 12
    },

    taskDelete: {
        paddingVertical: 6,
        marginBottom: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
        backgroundColor: "orangered",
        alignSelf: "flex-end",
        alignItems: "center",
        
    },

    taskDeleteText: {
        fontSize: 18,
    },

});