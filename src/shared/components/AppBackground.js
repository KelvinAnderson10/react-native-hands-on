import {ImageBackground, StyleSheet} from 'react-native';
import {useTheme} from "../context/ThemeContext";

const AppBackground = ({children, style}) => {
    const theme = useTheme();
    return (
        <ImageBackground source={theme.background} resizeMode="cover"
            style={[styles.container, style]}>
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingHorizontal: 8,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0
    }
});
export default AppBackground;