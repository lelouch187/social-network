import MyInput from "../ui/MyInput.tsx";
import MyBtn from "../ui/MyBtn/MyBtn.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation} from "react-query";
import {ILoginData, login} from "../../api";




const LoginForm = () => {
    const {
        register,
        handleSubmit
    } = useForm<ILoginData>()

    const mutation = useMutation(login);

    const onSubmit: SubmitHandler<ILoginData> = (data) => {
        mutation.mutate(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-center">
            <label className='w-full'>Введите email:
                <MyInput type="email" {...register("email")}/>
            </label>
            <label className='w-full'>Введите пароль:
                <MyInput type="password" {...register("password")}/>
            </label>
            <MyBtn className={'px-4 py-2 w-20 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700'}>
                Войти
            </MyBtn>
            <label className='mt-4'>запомнить меня?
                <input {...register("rememberMe")}
                    type='checkbox'
                       className='ml-2'
                />
            </label>
        </form>
    );
};

export default LoginForm;
