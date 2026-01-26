import React from 'react'
import Image from 'next/image'
import ContainerLay from '@/PageLayout/ContainerLay'
import Link from 'next/link'
import { FaPen, FaArrowLeft } from 'react-icons/fa'
import { LuTrash } from 'react-icons/lu'

export default function PostViewPage() {
  return (
    <ContainerLay>
      <article className='max-w-4xl mx-auto py-12 md:py-20 px-4 sm:px-6'>
        {/* Back Button */}
        <div className='mb-8'>
          <Link 
            href="/articles" 
            className='group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300'
          >
            <FaArrowLeft size={16} className='group-hover:-translate-x-1 transition-transform duration-300' />
            <span className='font-medium'>Voltar aos Artigos</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className='mb-12 text-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6'>
            Building a Medium Style Blog with Next.js and Tailwind CSS
          </h1>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-400'>
            <span className='font-semibold text-gray-300'>By Ese Fapohunda</span>
            <span className='hidden sm:inline'>•</span>
            <span>26 de janeiro de 2026</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className='relative w-full h-64 sm:h-80 lg:h-[420px] mb-12 rounded-2xl overflow-hidden shadow-xl border border-gray-700'>
          <Image
            src='/image%20for%20blog/tech_desk.jpeg'
            alt='Setup de mesa tech com laptop e acessórios'
            fill
            priority
            sizes='(min-width: 1024px) 900px, (min-width: 640px) 90vw, 100vw'
            className='object-cover hover:scale-105 transition-transform duration-500'
          />
        </div>

        {/* Article Content */}
        <div className='prose prose-invert max-w-none mb-12'>
          <p className='text-gray-300 leading-8 mb-6'>
            Neste artigo, vamos explorar como criar um blog estilo Medium usando Next.js e Tailwind CSS.
            Um guia completo para construir uma plataforma de publicação moderna, performática e escalável.
          </p>

          <h2 className='text-2xl sm:text-3xl font-bold text-white mt-10 mb-4'>
            Por que Next.js?
          </h2>
          <p className='text-gray-300 leading-8 mb-6'>
            Next.js oferece rendering server-side, otimização automática de imagens e uma experiência de desenvolvimento incrível.
            Perfeito para aplicações que precisam de SEO e performance.
          </p>

          <h2 className='text-2xl sm:text-3xl font-bold text-white mt-10 mb-4'>
            Componentes Essenciais
          </h2>
          <ul className='list-disc list-inside space-y-2 text-gray-300 mb-6'>
            <li>Sistema de roteamento baseado em arquivos</li>
            <li>Otimização automática de imagens</li>
            <li>Tailwind CSS para estilização</li>
            <li>Componentes reutilizáveis</li>
          </ul>

          <h2 className='text-2xl sm:text-3xl font-bold text-white mt-10 mb-4'>
            Começando
          </h2>
          <p className='text-gray-300 leading-8 mb-6'>
            Inicie instalando Next.js com o comando `npx create-next-app@latest`. Adicione Tailwind CSS e comece a criar!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum doloribus accusantium praesentium iure deserunt veniam eveniet dolor. Eius dolor rerum iure autem nostrum, saepe nihil consectetur, itaque suscipit voluptatem reprehenderit?
          </p>
        </div>

        {/* Footer Meta 
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-gray-900/50 to-blue-900/20 rounded-xl border border-gray-700 mt-12'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500'></div>
            <div>
              <p className='text-white font-semibold'>Ese Fapohunda</p>
              <p className='text-gray-400 text-sm'>Desenvolvedor Full Stack</p>
            </div>
          </div>

          <button className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105'>
            Seguir Autor
          </button>*
        </div>*/}

        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mt-8'>
            <Link 
              href="/articles" 
              className='group inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-gray-500/50 hover:scale-105 border border-gray-600'
            >
              <FaArrowLeft size={16} className='group-hover:-translate-x-1 transition-transform duration-300' />
              <span>Voltar aos Artigos</span>
            </Link>

            <div className='flex gap-3'>
              <Link 
                href="/write" 
                className='group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105'
              >
                <FaPen size={16} className='group-hover:rotate-12 transition-transform duration-300' />
                <span>Editar Artigo</span>
              </Link>
              <button className='group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50 hover:scale-105'
              >
                  <LuTrash size={16} className='group-hover:rotate-12 transition-transform duration-300' />
                  <span>Apagar</span>
              </button>
            </div>
        </div>
      </article>
    </ContainerLay>
  )
}
