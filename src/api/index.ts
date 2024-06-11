import axios from "axios";

enum UrlPaths {
    LOGIN = "/auth/login",
}

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {'API-KEY': import.meta.env.VITE_API_KEY},
});

export interface ILoginData {
    email: string;
    password: string;
    rememberMe?: boolean;
    captcha: boolean;
}

interface ILoginResponse {
    resultCode: number;
    messages: string[],
    data: {
        userId: number;
    }
}

export async function login(loginData: ILoginData) {
    try {
        const {data}: ILoginResponse = await instance.post(UrlPaths.LOGIN, loginData, { withCredentials: true })
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}
