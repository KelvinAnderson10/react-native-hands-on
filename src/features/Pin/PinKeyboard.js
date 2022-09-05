import React from 'react'
import { Text, TouchableNativeFeedbackComponent, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from '../../shared/context/ThemeContext';


const PinKeyboard = ({number, savepin}) => {
    const theme = useTheme();
    const styles = styling(theme);
    let emptyButton = {}
    if (!number) {
        return(
            <View style={[styles.pinContainer, {borderWidth: 0}]}></View>
        )
    }
    return (
        <TouchableOpacity style={emptyButton} onPress={savepin}>
            <View style={styles.pinContainer}>
                <Text style={styles.textPromo}>{number}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styling = (theme) => StyleSheet.create({
    pinContainer: {
        borderColor: theme.colors.primary,
        borderWidth: 2,
        margin: theme.spacing.s,
        width: 60,
        height: 60,
        borderRadius: 32,
        padding: theme.spacing.s,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPromo: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 24,
        textAlign:'center',
        color: theme.colors.foreground,
        fontFamily: 'Poppins-Regular'
    },
})
export default PinKeyboard