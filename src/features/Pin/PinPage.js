import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import FormButton from "../../shared/components/FormButton"
import MainContainer from "../../shared/components/MainContainer"
import { ROUTE } from "../../shared/constants"
import { useTheme } from "../../shared/context/ThemeContext"
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react"

const PinPage = () => {
    const theme = useTheme()
    const styling = styles(theme)
    const navigation = useNavigation()
    const [pin, setPin] = useState()
    const route = useRoute()
    const [pinParam, setPinParam] = useState({})

    useEffect(() => {
        if (route.params?.prevPage) {
            console.log(route.params.prevPage);
            setPinParam({
                prevPage: route.params.prevPage
            })
        }
    }, [route.params])

    return (
        <MainContainer>
            {/* <View style={{padding: 10}}>
                <TouchableOpacity onPress={()=> {navigation.navigate(ROUTE.MAIN)}}>
                    <Ionicons name="chevron-back" size={48} color="black" />
                </TouchableOpacity>
            </View> */}
            <View style={styling.container}>
                <Text style={theme.text.subtitle2}>Please Input PIN</Text>
                <Text style={theme.text.subtitle}>(User id: 123)</Text>
                <View style={styling.inputContainer}>
                    <TextInput style={styling.inputPin} 
                    keyboardType='numeric'
                    secureTextEntry
                    maxLength={6}
                    value={pin}
                    onChangeText={setPin}
                    ></TextInput>
                </View>

                <FormButton label="Submit" onClick={() => {navigation.navigate(pinParam.prevPage, {message: 'OK'})}}></FormButton>
            </View>
        </MainContainer>
    )
}

const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    inputPin: {
        borderBottomWidth: 1,
        textAlign: 'center',
        fontSize: 32
    },
    inputContainer: {
        width: '50%',
        paddingVertical: 50
    }
})

export default PinPage