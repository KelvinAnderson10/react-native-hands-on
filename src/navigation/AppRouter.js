import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../features/Home/HomePage";
import MainPage from "../features/Home/main/MainPage";
import LoginPage from "../features/Login/LoginPage";
import PinPage from "../features/Pin/PinPage";
import ProductList from "../features/Product/ProductList";
import WelcomePage from "../features/Welcome/WelcomePage";
import { ROUTE } from "../shared/constants";
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const AppRouter = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
            <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage}></Stack.Screen>
                <Stack.Screen name={ROUTE.LOGIN} component={LoginPage}></Stack.Screen>
                <Stack.Screen name={ROUTE.HOME} component={MainPage}></Stack.Screen>
                <Stack.Screen name={ROUTE.MAIN} component={HomePage}></Stack.Screen>
            </Stack.Group>
            <Stack.Screen name={ROUTE.PIN} component={PinPage} options={{headerTitle: '', headerBackImage: () => <Ionicons name="chevron-back" size={48} color="black" />}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AppRouter;