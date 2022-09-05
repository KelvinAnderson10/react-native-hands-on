import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../features/Home/HomePage";
import MainPage from "../features/Home/main/MainPage";
import LoginPage from "../features/Login/LoginPage";
import ProductList from "../features/Product/ProductList";
import WelcomePage from "../features/Welcome/WelcomePage";
import { ROUTE } from "../shared/constants";

const Stack = createStackNavigator();

const AppRouter = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
            <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name={ROUTE.HOME} component={MainPage} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name={ROUTE.MAIN} component={HomePage} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AppRouter;