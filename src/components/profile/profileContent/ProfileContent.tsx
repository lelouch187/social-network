import ContentWrapper from "../../ui/ContentWrapper.tsx";
import MyBtn from "../../ui/MyBtn/MyBtn.tsx";


const ProfileContent = () => {
    return (
        <section className="w-full">
            <ContentWrapper>
                <div>
                    <h2>В поиске работы: нет</h2>
                    <p>Описание желаемой работы:</p>
                    <p>Описание</p>
                </div>
            </ContentWrapper>
            <div className='mt-4'>
                <ContentWrapper>
                    <h2>Контакты:</h2>
                    <ul>
                        <li>github: не указана</li>
                        <li>vk: не указана</li>
                        <li>facebook: не указана</li>
                        <li>instagram: не указана</li>
                        <li>twitter: не указана</li>
                        <li>website: не указана</li>
                        <li>youtube: не указана</li>
                        <li>mainLink: не указана</li>
                    </ul>
                    <MyBtn className='bg-gray-200 hover:bg-gray-300 px-2 py-2 rounded w-full'>&or; &and;</MyBtn>
                </ContentWrapper>
            </div>
        </section>
    );
};

export default ProfileContent;