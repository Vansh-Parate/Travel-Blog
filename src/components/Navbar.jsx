import React ,{useState} from 'react';
import {Link}  from 'react-router-dom';
import {Compass , MenuIcon, X} from 'lucide-react'

function Navbar() {
    const[menuOpen,setMenuOpen] = useState(false);
    const toggleButton = () => {
        setMenuOpen(!menuOpen);
    }

    const navItems =[
        {path: "/", link: "Home"},
        {path: "/destination", link: "Destination"},
        {path: "/about", link: "About"},
        {path:'/faq',link:"FAQ"},
        {path:"/checklist",link:"CheckList"}
    ]
    
    return (
        <header className="relative z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center space-x-2 sm:space-x-3">
        <Compass className="h-6 w-6 sm:h-8 sm:w-8" />
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold">TravelBlog</span>
        </div>
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {
                navItems.map(({path,link})=><li key={path}>
                    <Link to={path} className='text-base lg:text-xl font-semibold transition duration-300 ease-in-out hover:text-purple-600'>{link}</Link>
                    </li>)
            }
        </ul>
        <div className='md:hidden'>
            <button onClick={toggleButton} className='cursor-pointer p-2'>
                {
                    menuOpen ? <X className='w-6 h-6'/> : <MenuIcon className='w-6 h-6' />
                }
            </button>
        </div>
    </div>
    
    {/* Mobile Menu */}
    <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg border-t`}>
        <ul className="py-4 px-4 space-y-4">
        {
                navItems.map(({path,link})=><li key={path}>
                    <Link 
                        to={path} 
                        className='block text-lg font-semibold transition duration-300 ease-in-out hover:text-purple-600 py-2'
                        onClick={() => setMenuOpen(false)}
                    >
                        {link}
                    </Link>
                    </li>)
            }
        </ul>
    </div>
    </header>
    );
}

export default Navbar;