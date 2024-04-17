import React from 'react'

export default function navbar() {
  return (
    <nav
      className="border-b border-gray-200 bg-white/75 backdrop-blur-lg sticky top-0"
    >
      <div
        className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="#" className="font-bold text-xl text-gray-900">swajp</a>
        <button
          id="menu-button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
 
          
        </div>
      </div>
    </nav>
  )
}
