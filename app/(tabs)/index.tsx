import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Link } from 'expo-router';

export default function App() {
    
    return (
        <View style={styles.main}>
            <div className="main-content-container" style={styles.content_container}>
                <div className="imgContainer">
                    <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.887097" y="1.8871" width="55" height="53.2258" rx="8.57527" fill="black" stroke="white" stroke-width="1.77419"/>
                    <path d="M28 14.4248L40.1622 28.3245L67.9616 4" stroke="white" stroke-width="6.94984" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h1 style={styles.title}>Dooit</h1>
                <h3 style={styles.subtitle}>Escribe lo que necesites hacer en tu dia a dia.</h3>
            </div>
            <div className="buttonContainer" style={styles.buttonContainer}>
                <Link push href="/home" className="button" style={styles.buttonContainer}>Continue</Link>
            </div>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        fontFamily: 'Roboto',
        backgroundColor: 'black',
    },
    content_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        marginTop: 15,
        
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: 'white',
    },
    subtitle: {
        fontSize: 30,
        fontWeight: 'normal',
        textAlign: 'center',
        color: 'white',
    },
    loginButton: {
        backgroundColor: 'white',
        color: 'black',
        padding: 15,
        borderRadius: 50,
        fontSize: 20,
        marginTop: 20,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
})