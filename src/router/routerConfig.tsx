import {RouteProps} from "react-router-dom";
import {LoginPageAsync} from "../pages/loginPage/LoginPage.async.tsx";
import {ProfilePageAsync} from "../pages/profilePage/ProfilePage.async.tsx";
import {EditProfilePageAsync} from "../pages/editProfilePage/EditProfilePage.async.tsx";


export enum RoutesPath {
    LOGIN='/login',
    PROFILE='/profile',
    EDIT_PROFILE='/profile/edit',
    NOT_FOUND='*',
}

export type IRoutesConfig = RouteProps &{
    private?:boolean
}



export const routesConfig:IRoutesConfig[] =[
    {path: RoutesPath.LOGIN, element: <LoginPageAsync/>},
    {path: RoutesPath.PROFILE, element: <ProfilePageAsync/>, private:true},
    {path: RoutesPath.EDIT_PROFILE, element: <EditProfilePageAsync/>, private:true},
    {path: RoutesPath.NOT_FOUND, element: <div>Not Found</div>}
]

