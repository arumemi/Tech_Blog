import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='relative bg-gradient-to-br from-gray-950 via-gray-900 to-black border-t border-gray-800 mt-20'>
      {/* Decorative gradient overlay */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'></div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Ese Tech
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Explorando tecnologia, programação e inovação. Conteúdo de qualidade para desenvolvedores modernos.
            </p>
            <div className='flex gap-3'>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer' 
                className='p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300'>
                <FaGithub size={20} className='text-gray-300' />
              </a>
              
              
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'
                className='p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300'>
                <FaLinkedin size={20} className='text-gray-300' />
              </a>
              <a href='mailto:contact@esetech.com'
                className='p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300'>
                <FaEnvelope size={20} className='text-gray-300' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-white font-semibold text-lg mb-4'>Links Rápidos</h4>
            <ul className='space-y-3'>
              <li>
                <Link href='/' className='text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Início
                </Link>
              </li>
              <li>
                <Link href='/articles' className='text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Artigos
                </Link>
              </li>
              <li>
                <Link href='/about' className='text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Sobre
                </Link>
              </li>
              <li>
                <Link href='/write' className='text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Escrever
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className='space-y-4'>
            <h4 className='text-white font-semibold text-lg mb-4'>Categorias</h4>
            <ul className='space-y-3'>
              <li>
                <Link href='/articles?category=react' className='text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  React & Frontend
                </Link>
              </li>
              <li>
                <Link href='/articles?category=python' className='text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Python
                </Link>
              </li>
              <li>
                <Link href='/articles?category=devops' className='text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  DevOps
                </Link>
              </li>
              <li>
                <Link href='/articles?category=database' className='text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Banco de Dados
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='space-y-4'>
            <h4 className='text-white font-semibold text-lg mb-4'>Newsletter</h4>
            <p className='text-gray-400 text-sm mb-4'>
              Receba as últimas atualizações diretamente no seu email.
            </p>
            <div className='flex flex-col gap-2'>
              <input 
                type='email' 
                placeholder='seu@email.com'
                className='px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
              />
              <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm'>
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © {new Date().getFullYear()} Ese Tech. Todos os direitos reservados.
            </p>
            <div className='flex items-center gap-1 text-gray-400 text-sm'>
             
              <FaHeart className='text-red-600 animate-pulse' size={14} />
              <FaHeart className='text-red-600 animate-pulse' size={14} />
              <FaHeart className='text-red-600 animate-pulse' size={14} />
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
