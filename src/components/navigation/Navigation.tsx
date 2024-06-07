import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <aside className="px-4 py-4 mt-10">
            <nav className='list-none'>
                <li className='hover:bg-gray-300 px-2 py-2 mb-2 rounded-lg cursor-pointer'>
                    <NavLink to='/profile'>Моя страница</NavLink>
                </li>
                <li className='hover:bg-gray-300 px-2 py-2 mb-2 rounded-lg cursor-pointer'>
                    <NavLink to='/users'>Пользователи</NavLink>
            </li>
                <li className='hover:bg-gray-300 px-2 py-2 mb-2 rounded-lg cursor-pointer'>
                    <NavLink to='/'>Мессенджер</NavLink>
                </li>
            </nav>
        </aside>
    );
};

export default Navigation;