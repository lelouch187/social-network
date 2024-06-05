import MyBtn from "../ui/MyBtn/MyBtn.tsx";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className="h-20 px-4 py-4 w-full bg-white">
            <div className="container flex justify-end">
                <Link to="/login">
                    <MyBtn className={'px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'}>Выйти</MyBtn>
                </Link>
            </div>
        </header>
    );
};

export default Header;