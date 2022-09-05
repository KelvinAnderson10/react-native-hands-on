import { useFonts } from 'expo-font'
import React from 'react'

const UseAppFont = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular' : require('../../../assets/fonts/poppins/Poppins-Regular.otf'),
        'Poppins-Thin' : require('../../../assets/fonts/poppins/Poppins-Thin.otf'),
        'Poppins-Bold' : require('../../../assets/fonts/poppins/Poppins-Bold.otf'),
        'Poppins-Medium' : require('../../../assets/fonts/poppins/Poppins-Medium.otf'),
    })
    return fontsLoaded
}

export default UseAppFont
