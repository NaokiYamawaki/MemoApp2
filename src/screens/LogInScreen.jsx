import React, {useState, useEffect} from 'react';
import {
    View, Text ,StyleSheet, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
export default function LogInScreen(props){

    const {navigation} = props;
    const [email, setEmail] = useState('');
    const [passward, setPassward] = useState('');

   useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                navigation.reset({
                index: 0,
                routes: [{ name: ('MemoList') }],
                });
            }
        });
        setLoading(false);
            return unsubscribe;
    }, []);
    const [isLoading, setLoading] = useState(true);


    function handlePress(){
        setLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, passward)
            .then((userCredential) =>{
                
                const {user} = userCredential;
                console.log(user.uid);
                navigation.reset({
                index: 0,
                routes: [{ name: ('MemoList') }],
                });
            })
            .catch((error) =>{
                Alert.alert(error.code);
            })
            .then(()=>{
                setLoading(false);
            });
    }

    return(
        <View style={styles.container}>
            <Loading isLoading={isLoading} />
            <View style={styles.inner}>
                <View>
                    <Text style={styles.title}>Log In</Text>
                </View>
                <View>
                    <TextInput 
                        style={styles.input} 
                        value={email} 
                        onChangeText={(text)=>{ setEmail(text); }}
                        autoCapitalize="none" 
                        keyboardType="email-address"  
                        placeholder="Email Adress"
                        textContentType="emailAddress"
                    />
                    <TextInput
                        style={styles.input} 
                        value={passward}
                        onChangeText={(text)=>{ setPassward(text); }} 
                        autoCapitalize='none'
                        keyboardType="number-pad"
                        placeholder="Passward"
                        secureTextEntry
                        textContentType="password"
                    />
                </View>
                <Button 
                label="Submit" 
                onPress={handlePress}
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
