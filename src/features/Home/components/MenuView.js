import React from 'react'
import { FlatList, View } from 'react-native'
import MenuItem from './MenuItem'

const MenuView = () => {
    const menus = [
        {id: 1, menu: 'Menu 1'},
        {id: 2, menu: 'Menu 2'},
        {id: 3, menu: 'Menu 3'},
        {id: 4, menu: 'Menu 4'},
        {id: 5, menu: 'Menu 5'},
        {id: 6, menu: 'Menu 6'},
        {id: 7, menu: 'Menu 7'},
        {id: 8, menu: 'Menu 8'},
        {id: 9, menu: 'Menu 9'},
        {id: 10, menu: 'Menu 10'},
        {id: 11, menu: 'Menu 11'},
        {id: 12, menu: 'Menu 12'},
        {id: 13, menu: 'Menu 13'},
        {id: 14, menu: 'Menu 14'},
        {id: 15, menu: 'Menu 15'},
    ]

    const renderItem = ({item}) => {
        return <MenuItem menu={item}></MenuItem>
    }

    return (
            <FlatList
                data={menus}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
                columnWrapperStyle={{justifyContent: 'space-around'}}
            />
    )
}

export default MenuView