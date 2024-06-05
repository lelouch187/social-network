import Header from "../../components/header/Header.tsx";
import Navigation from "../../components/navigation/Navigation.tsx";
import ContentWrapper from "../../components/ui/ContentWrapper.tsx";
import ProfileEdit from "../../components/profile/profileEdit/ProfileEdit.tsx";


const EditProfilePage = () => {
    return (
        <>
            <Header/>
            <main className="w-full main bg-gray-200 flex">
                <Navigation/>
                <div className="flex flex-col w-5/6 my-16 overflow-y-scroll">
                    <ContentWrapper>
                        <div className="flex justify-center">
                            <ProfileEdit />
                        </div>
                    </ContentWrapper>
                </div>
            </main>
        </>
    );
};

export default EditProfilePage;