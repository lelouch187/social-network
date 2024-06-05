import MyBtn from "../ui/MyBtn/MyBtn.tsx";


const Header = () => {
    return (
        <header className="h-20 px-4 py-4 w-full bg-white">
            <div className="container flex justify-end">
                <MyBtn className={'px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'}>Выйти</MyBtn>
            </div>
        </header>
    );
};

export default Header;