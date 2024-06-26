import ContentWrapper from "../../ui/ContentWrapper.tsx";
import MyBtn from "../../ui/MyBtn/MyBtn.tsx";
import {Link} from "react-router-dom";


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
                    <Link to='/profile/edit'>
                        <MyBtn className='bg-gray-200 hover:bg-gray-300 px-2 py-2 rounded'>Редактировать профиль</MyBtn>
                    </Link>

                </div>
            </ContentWrapper>
        </section>
    );
};

export default ProfileHeader;
