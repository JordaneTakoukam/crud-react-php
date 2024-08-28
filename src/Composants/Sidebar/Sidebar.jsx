import React, { useState } from 'react';
import { MdDashboard, MdShop, MdShoppingCart } from 'react-icons/md';
import { RxDashboard, RxHome, RxListBullet } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import Logo from './../../assets/react.svg'

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const pathName = location.pathname;


    const sidebarItems = [
        {
            icon: <MdDashboard className='text-xl' />,
            title: 'Tableau de bord',
            path: '/dashboard',

        },
        {
            icon: <MdShoppingCart className='text-xl' />,
            title: 'Liste des produits',
            path: '/product-list',
        },

    ];

    return (
        <nav
            className={`
                fixed left-0 top-0 z-50 text-white 
                h-screen w-72 bg-gray-900   transition-transform duration-300 ease-in-out
                 translate-x-0
            `}
        >
            {/* titre */}
            <div className="flex items-center justify-center h-14 gap-x-2 bg-gray-800">
                <img src={Logo} alt='logo' />
                <h1 className="text-xl font-semibold">Jordane Shopping</h1>
            </div>





            <div className="pl-4 pr-5">

                <nav className=" flex flex-col gap-y-3 my-5" >
                    {sidebarItems.map((item, index) => (
                        (
                            <Link
                                key={index}
                                to={item.path}
                                className={`flex items-center gap-x-4 py-3 px-6 rounded-r-lg duration-300
                                            ${pathName.includes(item.path) ? ' bg-black border-l-8 border-blue-400'
                                        : 'border-transparent border-l-8'}
                                           `}

                            >

                                {item.icon}    {item.title}
                            </Link>
                        )
                    ))}
                </nav>
            </div>
        </nav>
    );
}

export default Sidebar;
