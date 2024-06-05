import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <aside className="px-4 py-4 mt-10">
            <nav className='list-none'>
                <li className='hover:bg-gray-300 px-2 py-2 mb-2 rounded-lg cursor-pointer'>
                    <Link to='/profile'>Моя страница</Link>
                </li>
                <li className='hover:bg-gray-300 px-2 py-2 mb-2 rounded-lg cursor-pointer'>
                    <Link to='/users'>Пользователи</Link>
            </li>
                <li className='hover:bg-gray-300 px-2 py-2 mb-2 rounded-lg cursor-pointer'>
                    <Link to='/'>Мессенджер</Link>
                </li>
            </nav>
        </aside>
    );
};

export default Navigation;