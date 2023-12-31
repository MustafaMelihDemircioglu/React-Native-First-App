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
        marginBottom: 16,
    },

    featureTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
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

    inputWithSearchButton: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        width: '90%',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 18,
        margin: 4,
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
        paddingVertical: 12,
        marginHorizontal: 8
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

export const styles2 = StyleSheet.create({

    buttonContainer: {
        margin: 16,
        marginHorizontal: 64,
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: 'center',
    },

    buttonStyle: {
        margin: 8,
        borderRadius: 4,
        backgroundColor: "lightblue",
        paddingVertical: 16,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: '100%'
    },

}
)