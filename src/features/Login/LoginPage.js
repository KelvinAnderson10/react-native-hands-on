import {Keyboard, StyleSheet, View} from 'react-native';
import {useState} from "react";
import FormInput from "../../shared/components/FormInput";
import FormButton from "../../shared/components/FormButton";
import TitleLabel from "../../shared/components/TitleLabel";
import AppBackground from "../../shared/components/AppBackground";
import MainContainer from "../../shared/components/MainContainer";
import FormPassword from "../../shared/components/FormPassword";
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../../shared/constants';
import useViewState from '../../shared/hook/UseViewState';
import { useDependency } from '../../shared/hook/UseDependency';
import Spinner from '../../shared/components/Spinner';
import SnackBar from '../../shared/components/Snackbar';
import { useAuth } from '../../shared/hook/UseAuth';

const LoginPage = () => {
    const navigation = useNavigation()
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const {viewState, setLoading, setError} = useViewState()
    const {onLogin} = useAuth()

    const onAuthenticate = async () => {
        Keyboard.dismiss();
        setLoading();
        try {
            const response = await onLogin({userName: userName, password: password});
            if (response) {
                navigation.replace(ROUTE.HOME)
            } else {
                setError(new Error('Unauthorized'))
            }
        } catch (e) {
            console.log(e);
            setError(new Error('No Internet Connection Found'))
        }
    }

    return (
        <MainContainer>
            {viewState.isLoading && <Spinner/>}
            <AppBackground>
                <View style={styles.header}>
                    <TitleLabel subTitle text='Welcome!'/>
                </View>
                <View style={styles.form}>
                    <FormInput placeholder="Input your email" onChangeValue={onChangeUserName} value={userName}/>
                    <FormPassword placeholder="Input your password" onChangeValue={onChangePassword}
                        value={password}/>
                    <FormButton label='Login' onClick={onAuthenticate}/>
                </View>
            </AppBackground>
            {viewState.error !== null && <SnackBar message={viewState.error.message}/>}
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 16,
        marginBottom: 16,
    },
    form: {
        alignSelf: 'stretch',
        flex: 2,
    },
    background: {
        flex: 1,
    },
});
export default LoginPage;