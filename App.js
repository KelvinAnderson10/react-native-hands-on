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
import { apiClientFactory } from "./src/shared/ApiClientFactory";
import { clientInstance } from "./src/shared/AxiosClient";
import { AuthProvider } from "./src/shared/context/AuthContext";


export default function App() {
    const fonts = UseAppFont()
    const apiClient = apiClientFactory(clientInstance)
    const services = serviceFactory(apiClient);
    if (!fonts){
        return null
    }
    return (
        // <MainContainer>
        //   <Text>React Native Components</Text>
        // </MainContainer>
        <DependencyProvider services={services}>
            <SafeAreaProvider>
                <ThemeProvider>
                    <NavigationContainer>
                        <AuthProvider>
                            {/* <WelcomePage/> */}
                            {/* <LoginPage/> */}
                            {/* <ProductList></ProductList> */}
                            {/* <MainPage></MainPage> */}
                            <AppRouter></AppRouter>
                        </AuthProvider>
                    </NavigationContainer>
                </ThemeProvider>
            </SafeAreaProvider>
        </DependencyProvider>
    );
}
