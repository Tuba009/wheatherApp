import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Activity = () => {
    const [activeButton, setActiveButton] = useState(null);
    const handlePress = (index:any) => {
        setActiveButton(index === activeButton ? null : index); // Toggle the active button
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 30, marginTop: 18, marginLeft: 15 }}>Activity</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => handlePress(0)} // All button
                        style={[styles.button2, activeButton === 0 && styles.buttonPressed]}>
                        <Text style={[styles.buttonText2, activeButton === 0 && styles.textPressed]}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress(1)} // Request button
                        style={[styles.button2, activeButton === 1 && styles.buttonPressed]}>
                        <Text style={[styles.buttonText2, activeButton === 1 && styles.textPressed]}>Request</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress(2)} // Replies button
                        style={[styles.button2, activeButton === 2 && styles.buttonPressed]}>
                        <Text style={[styles.buttonText2, activeButton === 2 && styles.textPressed]}>Replies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress(3)} // Mentions button
                        style={[styles.button2, activeButton === 3 && styles.buttonPressed]}>
                        <Text style={[styles.buttonText2, activeButton === 3 && styles.textPressed]}>Mentions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress(4)} // Quotes button
                        style={[styles.button2, activeButton === 4 && styles.buttonPressed]}>
                        <Text style={[styles.buttonText2, activeButton === 4 && styles.textPressed]}>Quotes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress(5)} // Reports button
                        style={[styles.button2, activeButton === 5 && styles.buttonPressed]}>
                        <Text style={[styles.buttonText2, activeButton === 5 && styles.textPressed]}>Reports</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Activity

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 5,
        alignItems: 'center',
        marginTop: -500,
    },
    button1: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonText1: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button2: {
        backgroundColor: '#E6E6E6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonText2: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button3: {
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPressed: {
        color: 'white'
    },
    buttonPressed: {
        backgroundColor: 'black',
    }
})
