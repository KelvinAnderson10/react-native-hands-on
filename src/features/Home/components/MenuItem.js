import React from 'react'
import { Text, TouchableNativeFeedbackComponent, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from '../../../shared/context/ThemeContext';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const MenuItem = ({menu}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <TouchableOpacity>
            <View style={styles.promoContainer}>
                <Ionicons name="fast-food" size={24} color="grey" />
            </View>
            <Text style={styles.textPromo}>{menu.menu}</Text>
        </TouchableOpacity>
    )
}
const styling = (theme) => StyleSheet.create({
    promoContainer: {
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
        fontSize: 12,
        textAlign:'center',
        color: theme.colors.foreground,
        fontFamily: 'Poppins-Regular'
    },
})
export default MenuItem