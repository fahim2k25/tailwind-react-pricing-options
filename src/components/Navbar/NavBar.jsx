import React from 'react';
import Link from './Link';


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
            name: "Blog",
            path: "/blog"
        },
        {
            id: 6,
            name: "User Profile",
            path: "/user/profile"
        },
        {
            id: 7,
            name: "Settings",
            path: "/settings"
        },
        {
            id: 8,
            name: "FAQ",
            path: "/faq"
        },
        {
            id: 9,
            name: "Pricing",
            path: "/pricing"
        },
        {
            id: 10,
            name: "Dashboard",
            path: "/dashboard"
        }
    ];

    return (
        <nav>
            <ul className='flex justify-evenly'>
                {
                    urlData.map(route => <Link id={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;