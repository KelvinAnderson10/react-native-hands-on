import { productService } from "./ProductService"
import { loginService } from "./LoginService"
import { userService } from "./UserService"

export const serviceFactory = (apiClient) => {
    return{
        productService: productService(apiClient),
        loginService: loginService(apiClient),
        userService: userService(apiClient),
    }
}