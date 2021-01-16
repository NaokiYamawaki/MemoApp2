import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { string } from 'prop-types';

export default function Button(props){
    const {label} = props;
    return(
        <View>

            <View style={styles.buttonContainer}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </View>
        </View>
    );
}

Button.propTypes = {
    label: string.isRequired,
};

const styles=StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#467fd3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 32,
        color: '#ffffff',
    },
});
