import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props){
    const {children} = props;
    return(
        <View style={styles.circleButton}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </View>
    );
}

CircleButton.propTypes = {
    children: string.isRequired,
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