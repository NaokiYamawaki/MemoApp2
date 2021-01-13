import React from 'react';
import { View, StyleSheet } from 'react-native';
import Appbar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';

export default function MemoListScreen(){
    return(
        <View style={styles.container}>
            <Appbar />      
            <MemoList />
            <CircleButton>+</CircleButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    
      },
      
});