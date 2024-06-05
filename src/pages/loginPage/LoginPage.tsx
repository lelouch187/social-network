import Header from "../../components/header/Header.tsx";
import ContentWrapper from "../../components/ui/ContentWrapper.tsx";
import LoginForm from "../../components/loginForm/LoginForm.tsx";


const LoginPage = () => {
    return (
        <>
            <Header/>
            <main className="w-full main bg-gray-200 flex items-center justify-center">
                <div className='w-1/4 '>
                    <ContentWrapper>
                        <h1 className='text-xl text-center mb-4'>Авторизация</h1>
                        <LoginForm/>
                    </ContentWrapper>
                </div>
            </main>
        </>
    );
};

export default LoginPage;