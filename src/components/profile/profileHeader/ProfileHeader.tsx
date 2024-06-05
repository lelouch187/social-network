import ContentWrapper from "../../ui/ContentWrapper.tsx";
import MyBtn from "../../ui/MyBtn/MyBtn.tsx";


const ProfileHeader = () => {
    return (
        <section className="w-ful mb-4">
            <ContentWrapper>
                <div className='flex justify-between items-center'>
                    <div className='w-24'>
                        <img className='w-full'
                            src='/images/avatar.png'
                               alt={'avatar'} />
                    </div>
                    <p>Name</p>
                    <MyBtn className='bg-gray-200 hover:bg-gray-300 px-2 py-2 rounded'>Редактировать профиль</MyBtn>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default ProfileHeader;
