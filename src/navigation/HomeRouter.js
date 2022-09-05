import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "expo-vector-icons";
import MainPage from "../features/Home/main/MainPage";
import ProductList from "../features/Product/ProductList";
import { ROUTE } from "../shared/constants";
import { useTheme } from "../shared/context/ThemeContext";

const Tab = createBottomTabNavigator()

const HomeRouter = () => {
    const theme = useTheme()
    return(
        <Tab.Navigator screenOptions={({route})=> ({
            tabBarIcon: ({color, size}) => {
                switch (route.name) {
                    case ROUTE.HOME:
                        return <FontAwesome name="home" size={size} color={color} />;
                    default:
                        return <FontAwesome name="product-hunt" size={size} color={color} />;
                }
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.foreground,
        })}>
            <Tab.Screen name={ROUTE.HOME} component={MainPage} options={{headerShown: false}}/>
            <Tab.Screen name={ROUTE.PRODUCT} component={ProductList} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}
export default HomeRouter