import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import AppBackground from '../../../shared/components/AppBackground'
import MainContainer from '../../../shared/components/MainContainer'
import { FontAwesome } from '@expo/vector-icons'; 
import { useTheme } from '../../../shared/context/ThemeContext'
import HeaderPageLabel from '../../../shared/components/HeaderPageLabel';
import PromoView from "../components/PromoView";
import MenuView from '../components/MenuView';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ROUTE } from '../../../shared/constants';
import ModalDialog from '../../../shared/components/ModalDialog';
import { useDependency } from '../../../shared/hook/UseDependency';


const MainPage = () => {
    const theme = useTheme()
    const styles = styling(theme)
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)

    const {userService} = useDependency()

    const [fullName, setFullName] = useState('')

    const fetchUserInfo = async () => {
        try {
            const response = await userService.getUserInfo()
            setFullName(response.fullName)
        } catch (error) {
            console.log(error);
        }
    }

    const route = useRoute()
    useEffect(() => {
        if (route.params?.message) {
            // console.log(route.params.message);
        }
    }, [route.params])

    useEffect(() => {
        fetchUserInfo()
    }, [])

    return(
        <MainContainer>
            <AppBackground>
                <HeaderPageLabel text={'Welcome, ' + fullName}  showBorder avatarImg='https://picsum.photos/200'></HeaderPageLabel>
                {modalVisible && <ModalDialog onPress={() => {setModalVisible(false)}}></ModalDialog>} 
                <ScrollView>
                    <HeaderPageLabel text='POS'></HeaderPageLabel>
                    <View style={styles.container}>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={{alignItems: "center"}} onPress={() => {setModalVisible(true)}}>
                                <FontAwesome name="sticky-note-o" size={24} color={theme.colors.primary}/>
                                <Text style={styles.textMenu}>Add{'\n'}Order</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={{alignItems: "center"}}>
                                <FontAwesome name="user-plus" size={24} color={theme.colors.primary}/>
                                <Text style={styles.textMenu}>Customers{'\n'}Registration</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={{alignItems: "center",}} onPress={() => {
                            navigation.navigate(ROUTE.PIN, {prevPage: ROUTE.HOME})
                            }}>
                                <FontAwesome name="money" size={24} color={theme.colors.primary}/>
                                <Text style={styles.textMenu}>Bill{'\n'}Payment</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <HeaderPageLabel text='Promo'/>
                    <View>
                        <PromoView/>
                    </View>
                    <HeaderPageLabel text='Menu'/>
                    <View>
                        <MenuView/>
                    </View>
                    <HeaderPageLabel text='Profile'/>
                    <View>
                        <Text>{fullName}</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.replace(ROUTE.LOGIN)
                        }}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </AppBackground>
        </MainContainer>
    )
}

const styling = (theme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        borderRadius: theme.radius.m,
    },
    menuContainer: {
        flex: 1,
        height: 64,
        justifyContent: 'center'
    },
    textMenu: {
        textAlign: 'center',
        fontSize: 12,
        color: theme.colors.foreground,
        fontFamily: 'Poppins-Regular'
    },

})

export default MainPage
