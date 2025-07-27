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
const linkz = urlData.map(route => <Link id={route.id} route={route}></Link>);

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const handleBurger = () => setOpen(!open)

    return (

        <nav className="flex justify-between">

            <div className='flex gap-2 items-center'>

                {open ? <X onClick={handleBurger} className='md:hidden' size={40} color='red'></X> : <Menu onClick={handleBurger} className='md:hidden' size={40} color='green'></Menu>}

                <ul className="py-3 pl-5 bg-pink-600  md:hidden">
                    {
                        linkz
                    }
                </ul>
                <h3 className='font-bold text-2xl'>BatNavBar</h3>
            </div>
            <ul className='hidden md:flex md:justify-evenly'>
                {
                    linkz
                }
            </ul>
            <button className='btn btn-lg'>Sign In</button>
        </nav>

    );
};

export default NavBar;