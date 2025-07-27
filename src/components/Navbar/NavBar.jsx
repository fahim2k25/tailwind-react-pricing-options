import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

// declaring the data for NavBar elements with AI
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

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const handleBurger = () => setOpen(!open)

    return (

        <nav className="flex justify-between">
            <div className='flex gap-2 items-center'>
                {open ? <Menu onClick={handleBurger} className='md:hidden' size={40} color='green'></Menu> : <X onClick={handleBurger} className='md:hidden' size={40} color='red'></X>}
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