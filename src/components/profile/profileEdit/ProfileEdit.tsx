import MyInput from "../../ui/MyInput.tsx";


const ProfileEdit = () => {
    return (
        <form className="w-2/6 flex flex-col">
            <label>Никнейм:
                <MyInput/>
            </label>
            <p>В поиске работы?</p>
            <select className='border outline-none mb-4'>
                <option>Нет</option>
                <option>Да</option>
            </select>
            <label className='flex flex-col mb-4'> Описание желаемой работы:
                <textarea className='border outline-none'></textarea>
            </label>
            <p className='pb-4'>Контакты:</p>
            <label>vk:
                <MyInput/>
            </label>
            <label>facebook:
                <MyInput/>
            </label>
            <label>instagram:
                <MyInput/>
            </label>
            <label>twitter:
                <MyInput/>
            </label>
            <label>website:
                <MyInput/>
            </label>
            <label>youtube:
                <MyInput/>
            </label>
            <label>mainLink:
                <MyInput/>
            </label>
        </form>
    );
};

export default ProfileEdit;
