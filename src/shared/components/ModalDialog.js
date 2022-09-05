import React from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'

const ModalDialog = ({visible, onPress}) => {
    return (
        <View style={styles.mainContainer}>
            <Modal visible={visible} animationType='slide' transparent={true}>
                <View style={styles.mainContainer}>
                    <View style={styles.modalContainer}>
                        <Text>Ini modal</Text>
                        <Button title="Dismiss" onPress={onPress}></Button>
                    </View>
                </View>
                </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalContainer : {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '50%',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 32,
        backgroundColor: 'white',
        justifyContent: 'space-around'
    }
})

export default ModalDialog