'use client';

import { useState } from 'react';
import Logo from './logo.jsx';
import Link from 'next/link';
import { useModalStore } from '@/app/store/useModalStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { openSignIn } = useModalStore();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden gap-2 md:flex md:items-center md:gap-4 lg:gap-6">
            {/* Ícone de Busca */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium text-sm lg:text-base"
              aria-label="Buscar"
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Buscar</span>
            </button>

            {/* Escrever com ícone de notebook */}
            <Link
              href="/write"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium text-sm lg:text-base"
              aria-label="Escrever"
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Escrever</span>
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}

            {/* Ícone de Artigos */}
            <Link
              href="/articles"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-200 font-medium text-sm lg:text-base"
              aria-label="Artigos"
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>

              <span>Artigos</span>
            </Link>

            <button
              onClick={openSignIn}
              className="bg-red-600 hover:bg-red-700 text-white px-3 md:px-5 lg:px-4 py-2 md:py-3 lg:py-4 rounded-md font-medium text-sm lg:text-base transition-colors duration-300"
            >
              Login
            </button>
          </div>

          {/* Mobile: Busca e Menu Hambúrguer */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Ícone de Busca para Mobile */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center gap-1.5 text-gray-300 hover:text-blue-500 focus:outline-none focus:text-blue-500 transition-colors duration-200 font-medium text-sm"
              aria-label="Buscar"
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Buscar</span>
            </button>

            {/* Botão do menu mobile (Hambúrguer) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-500 focus:outline-none focus:text-blue-500 transition-colors duration-200 p-2"
              aria-label="Alternar menu"
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

      {/* Navegação Mobile */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-3 sm:px-4 pt-2 pb-4 space-y-1 bg-gray-900/95 border-t border-gray-800">
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

          {/* Artigos no Mobile */}
          <Link
            href="/articles"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 text-gray-300 hover:text-blue-500 hover:bg-gray-800/50 px-3 py-2 rounded-md font-medium transition-all duration-200"
          >
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Artigos
          </Link>

          {/* Escrever no Mobile */}
          <Link
            href="/write"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 text-gray-300 hover:text-blue-500 hover:bg-gray-800/50 px-3 py-2 rounded-md font-medium transition-all duration-200"
          >
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Escrever
          </Link>

          <button
            onClick={() => {
              openSignIn();
              setIsMenuOpen(false);
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Login
          </button>
        </div>
      </div>

      {/* Barra de Busca Sobreposta */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900/95 border-b border-gray-800 backdrop-blur-md">
          <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full bg-gray-800 text-gray-300 placeholder-gray-500 rounded-lg pl-10 pr-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                autoFocus
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
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