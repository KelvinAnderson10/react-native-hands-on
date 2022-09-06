import { SERVICE } from "../shared/constants"

export const userService = ({doGet}) => {
    const getUserInfo = async () => {
        try {
            return await doGet({url: SERVICE.USERINFO})
        } catch (e) {
            throw e
        }
    }
    return {getUserInfo}
}