import MyInput from "../ui/MyInput.tsx";
import MyBtn from "../ui/MyBtn/MyBtn.tsx";


const LoginForm = () => {


    return (
        <form className="flex flex-col items-center justify-center">
            <label className='w-full'>Введите email:
                <MyInput/>
            </label>
            <label className='w-full'>Введите пароль:
                <MyInput/>
            </label>
            <MyBtn className={'px-4 py-2 w-20 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700'}>
                Войти
            </MyBtn>
            <label className='mt-4'>запомнить меня?
                <input type='checkbox'
                className='ml-2'
                />
            </label>
        </form>
    );
};

export default LoginForm;
