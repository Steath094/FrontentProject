import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Header() {
    const options = [
        { value: 'option1', text: 'Summer Collection' },
        { value: 'option2', text: 'Latest Offers' },
        { value: 'option3', text: 'Cart' },
        { value: 'option4', text: 'Account' },
      ];
      
  return (
    <>
        <header>
            <nav className='flex max-w-full justify-between ml-10 mr-10 m-5'>
                <div>
                    <Link to="/">
                        <img src="./Images/Logo Here.png" alt="Logo" />
                    </Link>
                </div>
                <div>
                    <ul className='flex justify-between items-center w-[681px] font-semibold'>
                        <li>
                            <NavLink to={"/Home"}
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-yellow-400":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                            }>Home</NavLink>
                        </li>
                        <li>
                        <label className="relative">
                        <input type="checkbox" className="hidden peer " />
                        <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1">
                        {"Features"}
                        </div>
                        <div className="hidden peer-checked:flex absolute bg-white w-max">
                        <ul className='p-2'>
                            {options.map((option, index) => (
                                <li key={index}>
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    value={option.value}
                                    className="mr-2"
                                />
                                <label htmlFor={option.value}>{option.text}</label>
                                </li>
                            ))}
                        </ul>
                        </div>
                        </label>
                        </li>
                        <li>
                            <NavLink to="/Blog" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-yellow-400":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                                    }>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Shop" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-yellow-400":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                                    }>Shot</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-yellow-400":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                                    }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-yellow-400":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                            }>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"><img src="./account.svg" alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/"><img src="./cart.svg" alt="" /></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </>


  )
}

export default Header