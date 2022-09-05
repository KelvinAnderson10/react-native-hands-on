import WelcomePage from "./src/features/Welcome/WelcomePage";
import MainContainer from "./src/shared/components/MainContainer";
import {StatusBar, Text} from "react-native";
import LoginPage from "./src/features/Login/LoginPage";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "./src/shared/context/ThemeContext";
import UseAppFont from "./src/shared/hook/UseAppFont";
import ProductList from "./src/features/Product/ProductList";
import { DependencyContext, DependencyProvider } from "./src/shared/context/DependencyContext";
import { serviceFactory } from "./src/services/ServiceFactory";
import MainPage from "./src/features/Home/main/MainPage";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/navigation/AppRouter";

export default function App() {
    const fonts = UseAppFont()
    const services = serviceFactory();
    if (!fonts){
        return null
    }
    return (
        // <MainContainer>
        //   <Text>React Native Components</Text>
        // </MainContainer>
        <DependencyProvider services={services}>
            <ThemeProvider>
                <NavigationContainer>
                    {/* <WelcomePage/> */}
                    {/* <LoginPage/> */}
                    {/* <ProductList></ProductList> */}
                    {/* <MainPage></MainPage> */}
                    <AppRouter></AppRouter>
                </NavigationContainer>
            </ThemeProvider>
        </DependencyProvider>
    );
}
