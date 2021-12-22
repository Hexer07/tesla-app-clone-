import { StyleSheet, TouchableWithoutFeedbackBase } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
       width: "100%",
       height: "100%",
       backgroundColor: "orange"
    },
    header: {
        marginTop: 35,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    headerTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        color:"white"
    },
    
    backgroundImage: {
        width: "100%",
        height: "108%",
        alignItems: "center",
        resizeMode: "cover",
        position: "absolute",
        marginBottom: 10
    },
    batterySection: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center"
    },

    batteryImage: {
        height: 26,
        width: 70,
        marginRight: 5,
        
    },
    batteryText: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",

    },
    status:{
        alignItems: "center",
    },
    statusText: {
        color:"white",
        fontWeight: 20,
        fontWeight: "bold"
    },
    controls: {
        flexDirection: "row",
        justifyContent:"center",
        marginTop: 157
    },
    controlsButton:{
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        padding: 10,
        marginLeft: 25
    }
    

 
})

    export default styles;