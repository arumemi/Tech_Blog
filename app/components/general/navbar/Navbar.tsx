'use client';

import { useState } from 'react';
import Logo from './logo.jsx';
import Link from 'next/link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Write', href: '/write' },
    { name: 'About', href: '/about' },
   
  ];

  return (
    <nav className="h-18 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden gap-2 md:flex md:items-center md:gap-4 lg:gap-6">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium text-sm lg:text-base"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}

            {/* Articles Icon */}
            <Link
              href="/articles"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium text-sm lg:text-base"
              aria-label="Articles"
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>Articles</span>
            </Link>

            <button className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-5 lg:px-4 py-2 md:py-3 lg:py-4 rounded-md font-medium text-sm lg:text-base transition-colors duration-300">
              Login
            </button>
          </div>

          {/* Mobile: Search and Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Search Icon for Mobile */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center gap-1.5 text-gray-300 hover:text-blue-500 focus:outline-none focus:text-blue-500 transition-colors duration-200 font-medium text-sm"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>

            {/* Mobile menu button (Hamburger) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-500 focus:outline-none focus:text-blue-500 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-5 space-y-2 bg-gray-900/95 border-t border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-blue-500 hover:bg-gray-800/50 px-3 py-2 rounded-md font-medium transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}

          {/* Articles in Mobile */}
          <Link
            href="/articles"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 text-gray-300 hover:text-blue-500 hover:bg-gray-800/50 px-3 py-2 rounded-md font-medium transition-all duration-200"
          >
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Articles
          </Link>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
            Login
          </button>
        </div>
      </div>

      {/* Search Bar Overlay */}
      {isSearchOpen && (
        <div className="flex absolute top-full left-0 right-0 bg-gray-900/95 border-b border-gray-800 backdrop-blur-md">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-gray-800 text-gray-300 placeholder-gray-500 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
             { /**  <svg 
                className="flex gap-2 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              */}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}