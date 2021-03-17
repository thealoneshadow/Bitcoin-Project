import React, { useState } from 'react';
import Link from 'next/link';
import Modale from './Modale';
function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="items-center relative z-1010">
      <nav className="flex items-center flex-wrap bg-white p-3 relative">
          
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-40 ">
            <img src="/images/Logo.jpg" className="w-24" alt="" />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-black-600 rounded lg:hidden text-black ml-auto hover:text-black outline-none"
          onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className="inline-flex rounded-3xl items-center max-w-fit border border-solid border-gray-300 ml-auto mr-auto shadow-lg ">
            <input
              type="text"
              placeholder="search.."
              className="searchBar border-none focus:outline-none focus:border-white-100 items-center "
            />
             <svg
              class="w-5 h-5 "
              fill="none"
              stroke="currentColor"
              viewBox="2 0 28 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg> 
          </div>
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/explore">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-white-600 hover:text-black mr-8 font-semibold ">
                Explore
              </a>
            </Link>
            <Link href="/blogs">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-white-600 hover:text-black mr-8 font-semibold">
                Blogs
              </a>
            </Link>
            <Link href="/" onClick={<Modale />}>
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-white-600 hover:text-black mr-8 contain font-semibold">

                <svg className="stroke-1 h-4 w-4 inline-flex font-semibold" 
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Login/Sign up
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

