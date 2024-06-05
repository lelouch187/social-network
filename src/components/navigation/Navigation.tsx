

const Navigation = () => {
    return (
        <aside className="px-4 py-4 mt-10">
            <nav className='list-none'>
                <li className='hover:bg-gray-300 px-2 py-2 mb-2 rounded-lg cursor-pointer'>
                    <a href={'#'}>Моя страница</a>
                </li>
                <li className='hover:bg-gray-300 px-2 py-2 mb-2 rounded-lg cursor-pointer'>
                    <a href={'#'}>Пользователи</a>
            </li>
                <li className='hover:bg-gray-300 px-2 py-2 mb-2 rounded-lg cursor-pointer'>
                    <a href={'#'}>Мессенджер</a>
                </li>
            </nav>
        </aside>
    );
};

export default Navigation;