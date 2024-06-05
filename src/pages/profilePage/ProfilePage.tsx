import Header from "../../components/header/Header.tsx";
import Navigation from "../../components/navigation/Navigation.tsx";
import ProfileHeader from "../../components/profile/profileHeader/ProfileHeader.tsx";
import ProfileContent from "../../components/profile/profileContent/ProfileContent.tsx";

const ProfilePage = () => {
    return (
        <>
            <Header/>
            <main className="w-full main bg-gray-200 flex">
                <Navigation/>
                <div className="flex flex-col w-5/6 overflow-y-scroll my-16">
                    <ProfileHeader />
                    <ProfileContent />
                </div>
            </main>
        </>
    );
};

export default ProfilePage;