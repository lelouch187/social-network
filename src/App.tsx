import {Route, Routes} from "react-router-dom";
import {LoginPageAsync} from "./pages/loginPage/LoginPage.async.tsx";
import {ProfilePageAsync} from "./pages/profilePage/ProfilePage.async.tsx";
import {EditProfilePageAsync} from "./pages/editProfilePage/EditProfilePage.async.tsx";
import {Suspense} from "react";

function App() {
    return (
        <Suspense fallback={<h1>Идет загрузка...</h1>}>
            <Routes>
                <Route path='/login' element={<LoginPageAsync/>}/>
                <Route path='/profile' element={<ProfilePageAsync/>}/>
                <Route path='/profile/edit' element={<EditProfilePageAsync/>}/>
            </Routes>
        </Suspense>
    )
}

export default App
