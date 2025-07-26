import React from 'react';
import Link from './Link';
import { Menu } from 'lucide-react';


const NavBar = () => {

    const urlData = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About Us",
            path: "/about"
        },
        {
            id: 3,
            name: "Products",
            path: "/products"
        },
        {
            id: 4,
            name: "Contact",
            path: "/contact"
        },
        {
            id: 5,
            name: "FAQ",
            path: "/faq"
        },
        {
            id: 6,
            name: "Pricing",
            path: "/pricing"
        },
        {
            id: 7,
            name: "Dashboard",
            path: "/dashboard"
        }
    ];

    return (
        <nav className="flex justify-between">
            <div className='flex gap-2 items-center'>
                <Menu color='red'></Menu>
                <h3 className='font-bold text-2xl'>BatNavBar</h3>
            </div>
            <ul className='flex justify-evenly'>
                {
                    urlData.map(route => <Link id={route.id} route={route}></Link>)
                }
            </ul>
            <button className='btn btn-lg'>Sign In</button>
        </nav>
    );
};

export default NavBar;