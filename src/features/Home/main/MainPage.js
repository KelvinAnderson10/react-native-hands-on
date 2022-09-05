import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import AppBackground from '../../../shared/components/AppBackground'
import MainContainer from '../../../shared/components/MainContainer'
import { FontAwesome } from '@expo/vector-icons'; 
import { useTheme } from '../../../shared/context/ThemeContext'
import HeaderPageLabel from '../../../shared/components/HeaderPageLabel';
import PromoView from "../components/PromoView";
import MenuView from '../components/MenuView';


const MainPage = () => {
    const theme = useTheme()
    const styles = styling(theme)
    return(
        <MainContainer>
            <AppBackground>
                <HeaderPageLabel text='WMB' showBorder avatarImg='https://picsum.photos/200'></HeaderPageLabel>
                <ScrollView>
                    <HeaderPageLabel text='POS'></HeaderPageLabel>
                    <View style={styles.container}>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={{alignItems: "center",}}>
                                <FontAwesome name="sticky-note-o" size={24} color={theme.colors.primary}/>
                                <Text style={styles.textMenu}>Add{'\n'}Order</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={{alignItems: "center",}}>
                                <FontAwesome name="user-plus" size={24} color={theme.colors.primary}/>
                                <Text style={styles.textMenu}>Customers{'\n'}Registration</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={{alignItems: "center",}}>
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
                        <Text>Coming Soon...</Text>
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
