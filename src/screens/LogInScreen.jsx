import React from 'react';
import {
    View, Text ,StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';


import Button from '../components/Button';

export default function LogInScreen(props){
    const {navigation} = props;
    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <View >
                    <Text style={styles.title}>Log In</Text>
                </View>
                <View>
                    <TextInput style={styles.input} value="Email Adress" />
                    <TextInput style={styles.input} value="Passward" />
                </View>
                <Button 
                label="Submit" 
                onPress={()=>{ navigation.reset({
                    index: 0,
                    routes: [{ name: ('MemoList') }],
                });}}
                />
                <View style={styles.footer}>
                <Text style={styles.footerText}>Not registered?</Text>
                <TouchableOpacity>
                    <Text
                        style={styles.footerLink}
                        onPress={()=>{ navigation.reset({
                            index: 0,
                            routes: [{ name: ('SignUp') }],
                        });}}
                    >Sign up!</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#ffffff',
        fontSize: 16,
        height: 40,
        paddingLeft: 8,
        borderColor: '#dddddd',
        borderWidth: 1,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,  
        color: '#467fd3',
    }
});
