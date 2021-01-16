import React from 'react';
import { StyleSheet, TouchableOpacity,  } from 'react-native';
import { func, shape, string } from 'prop-types';
import { Feather } from '@expo/vector-icons'; 

export default function CircleButton(props){
    const {style, name, onPress} = props;
    return(
        <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
            <Feather name={name} size={32} color="white" />
        </TouchableOpacity>
    );
}

CircleButton.propTypes = {
    
    style: shape(),
    name: string.isRequired,
    onPress: func,
}

CircleButton.defaultProps = {
    style: null,
    onPress: null,
}

const styles = StyleSheet.create({
    circleButton: {
        backgroundColor: '#467fd3',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 19,
        bottom: 40,
        //for ios//
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        //for Android//
        elevation: 8,
      },
      circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 40,
      },
});
