import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native"
import FormButton from "../../shared/components/FormButton"
import MainContainer from "../../shared/components/MainContainer"
import { ROUTE } from "../../shared/constants"
import { useTheme } from "../../shared/context/ThemeContext"
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react"
import PinKeyboard from "./PinKeyboard"

const PinPage = () => {
    const theme = useTheme()
    const styling = styles(theme)
    const navigation = useNavigation()
    const [pin, setPin] = useState('')
    const route = useRoute()
    const [pinParam, setPinParam] = useState({})
    const [pinRandom, setPinRandom] = useState({})

    let angka = [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'},
        {id: '6'},
        {id: '7'},
        {id: '8'},
        {id: '9'},
        {id: '0'},
    ]

    useEffect(() => {
        if (route.params?.prevPage) {
            console.log(route.params.prevPage);
            setPinParam({
                prevPage: route.params.prevPage
            })
        }
    }, [route.params])

    useEffect(() => {
        setPin('')
        let angkaFinal = angka.sort(() => Math.random() - 0.5)
        let angkaTemp = angkaFinal[angkaFinal.length - 1]
        angkaFinal.pop()
        angkaFinal.push({id: ''}, angkaTemp, {id: '<'})
        setPinRandom(angkaFinal)
    }, [])


    const renderPin = ({item}) => {
        if (item.id === '<'){
            return <PinKeyboard number={item.id} savepin={() => {
                setPin(pin.slice(0, pin.length - 1))
            }}></PinKeyboard>
        }
        return <PinKeyboard number={item.id} savepin={() => {
            if (pin.length < 6){
                setPin(pin + item.id)
            }
        }}></PinKeyboard>
    }


    return (
        <MainContainer>
            <View style={styling.container}>
                <Text style={theme.text.subtitle2}>Please Input PIN</Text>
                <Text style={theme.text.subtitle}>(User id: 123)</Text>
                <View style={styling.inputContainer}>
                    <TextInput style={styling.inputPin} 
                    keyboardType='numeric'
                    // secureTextEntry
                    maxLength={6}
                    value={pin}
                    // onChangeText={setPin}
                    editable={false}
                    ></TextInput>
                </View>    
                <View style={{width: '70%'}}>
                {pinRandom && <FlatList
                    data={pinRandom}
                    renderItem={renderPin}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    columnWrapperStyle={{justifyContent: 'space-around'}}
                />}
            </View>            
            </View>

            <FormButton label="Submit" onClick={() => {
                Alert.alert(
                    "PIN Verified",
                    "Continue to bill payment",
                    [
                        {
                            text: "Continue",
                            onPress: () => {navigation.navigate(pinParam.prevPage, {message: 'OK'})
                                            setPin('')},
                            style: 'default',
                        },
                    ],
                )
                
                }}></FormButton>
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
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 32
    },
    inputContainer: {
        width: '60%',
        paddingVertical: 50,
    }
})

export default PinPage