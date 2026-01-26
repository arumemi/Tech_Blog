'use client'

import React, { useState } from 'react'
import ContainerLay from '@/PageLayout/ContainerLay'
import Image from 'next/image'
import Link from 'next/link'

const rawImages = [
    {
        file: 'container.jpeg',
        title: 'Containers na Nuvem',
        category: 'Cloud & DevOps',
        excerpt:
            'Descubra como workloads conteinerizados habilitam escalabilidade, portabilidade e observabilidade em ambientes modernos.',
        readTime: '6 min de leitura',
    },
    {
        file: 'devops.jpeg',
        title: 'Automação DevOps',
        category: 'DevOps',
        excerpt:
            'Pipelines CI/CD, infraestrutura como código e monitoramento contínuo para entregar software com mais qualidade e velocidade.',
        readTime: '7 min de leitura',
    },
    {
        file: 'global_tech.jpg',
        title: 'Tendências Globais de Tecnologia',
        category: 'Tendências',
        excerpt:
            'Uma visão panorâmica das inovações que estão moldando o futuro digital em escala mundial.',
        readTime: '8 min de leitura',
    },
    {
        file: 'imag.jpeg',
        title: 'Imersão Criativa Digital',
        category: 'Design & Inspiração',
        excerpt:
            'Como usar estética, storytelling visual e imaginação para criar produtos digitais memoráveis.',
        readTime: '5 min de leitura',
    },
    {
        file: 'mongodb - Copy.jpeg',
        title: 'MongoDB em Produção (Cópia)',
        category: 'Banco de Dados',
        excerpt:
            'Sharding, índices e boas práticas para manter clusters MongoDB performáticos e resilientes.',
        readTime: '9 min de leitura',
    },
    {
        file: 'mongodb.jpeg',
        title: 'MongoDB Essencial',
        category: 'Banco de Dados',
        excerpt:
            'Modelagem de documentos, pipelines de agregação e dicas para consultas eficientes no dia a dia.',
        readTime: '8 min de leitura',
    },
    {
        file: 'programming-background-collage (2).jpg',
        title: 'Colagem Criativa de Código',
        category: 'Programação',
        excerpt:
            'Um mosaico visual que celebra linguagens, paradigmas e a arte de construir software.',
        readTime: '6 min de leitura',
    },
    {
        file: 'python.jpeg',
        title: 'Python Moderno',
        category: 'Python',
        excerpt:
            'Tipagem, ecosistema de dados e padrões que tornam o Python uma linguagem versátil em 2026.',
        readTime: '10 min de leitura',
    },
    {
        file: 'react - Copy.jpeg',
        title: 'React UI (Cópia)',
        category: 'Frontend',
        excerpt:
            'Componentização elegante, estados previsíveis e animações sutis para experiências web rápidas.',
        readTime: '7 min de leitura',
    },
    {
        file: 'react.jpeg',
        title: 'React Interativo',
        category: 'Frontend',
        excerpt:
            'Hooks avançados, otimizações de rendering e padrões que escalam com seu produto.',
        readTime: '9 min de leitura',
    },
    {
        file: 'tech_desk.jpeg',
        title: 'Setup de Mesa Tech',
        category: 'Lifestyle',
        excerpt:
            'Ergonomia, iluminação e gadgets que melhoram produtividade e conforto no home office.',
        readTime: '4 min de leitura',
    },
    {
        file: 'working_lady.jpg',
        title: 'Profissional em Ação',
        category: 'Carreira',
        excerpt:
            'Liderança, foco e presença em ambientes de tecnologia cada vez mais colaborativos.',
        readTime: '6 min de leitura',
    },
]

const slugify = (value: string) =>
    value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

const publishedAt = '26 de janeiro de 2026'

const articles = rawImages.map((item, index) => {
    const slugBase = slugify(item.title)
    const imagePath = encodeURI(`/image for blog/${item.file}`)

    return {
        id: index + 1,
        ...item,
        image: imagePath,
        slug: `${slugBase || 'artigo'}-${index + 1}`,
        date: publishedAt,
    }
})

export default function ArticlesPage() {
    const INITIAL_VISIBLE = 3
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

    const visibleArticles = articles.slice(0, visibleCount)
    const canLoadMore = visibleCount < articles.length

    const handleLoadMore = () => {
        setVisibleCount((count) => Math.min(count + 3, articles.length))
    }

  return (
   <ContainerLay> 
        <div className='space-y-8 sm:space-y-10 md:space-y-12'>
            {/* Header Section */}
            <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-500 p-8 sm:p-10 md:p-12 lg:p-16 mt-6 animate-fade-in'>
                <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow'></div>
                <div className='absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl'></div>
                <div className='relative z-10'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-down'>
                        📚 Todos os Artigos
                    </h1>
                    <p className='text-gray-100 text-base sm:text-lg md:text-xl max-w-2xl animate-slide-up animation-delay-200'>
                        Explore nossa coleção completa de artigos sobre tecnologia, programação e inovação.
                    </p>
                    <div className='flex flex-wrap gap-3 mt-6'>
                        <span className='bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold'>
                            {articles.length} Artigos
                        </span>
                        <span className='bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold'>
                            ⚡ Sempre Atualizado
                        </span>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up animation-delay-300'>
                {visibleArticles.map((post, index) => {
                    return (
                        <article
                            key={post.id}
                            className='group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-[1.02] border border-gray-700 hover:border-blue-500/50'
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Badge */}
                            <div className='absolute top-4 right-4 z-20 flex flex-col gap-2'>
                                <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm'>
                                    #{post.id}
                                </span>
                                <span className='bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20'>
                                    {post.category}
                                </span>
                            </div>

                            {/* Image */}
                            <div className='relative w-full h-56 sm:h-64 overflow-hidden'>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className='object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80'></div>
                                
                                {/* Read Time Badge on Image */}
                                <div className='absolute bottom-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-full border border-white/20'>
                                    <span className='text-xl'>⏱️</span>
                                    <span className='text-white text-xs font-semibold'>{post.readTime}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='p-6'>
                                <h2 className='text-xl sm:text-2xl font-bold leading-tight group-hover:text-blue-400 transition-colors text-gray-100 mb-3 line-clamp-2 min-h-[3.5rem]'>
                                    {post.title}
                                </h2>
                                
                                <p className='text-gray-400 mb-4 text-sm sm:text-base leading-relaxed line-clamp-3'>
                                    {post.excerpt}
                                </p>

                                {/* Read More Link */}
                                <Link 
                                    href={`/articles/${post.slug}`}
                                    className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold group/link transition-all'
                                >
                                    <span>Ler Artigo Completo</span>
                                    <svg 
                                        className='w-4 h-4 group-hover/link:translate-x-2 transition-transform' 
                                        fill='none' 
                                        viewBox='0 0 24 24' 
                                        stroke='currentColor'
                                    >
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                    </svg>
                                </Link>
                            </div>
                                {/* Footer */}
                               

                            {/* Hover Effect Gradient */}
                            <div className='absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none'></div>
                        </article>
                    );
                })}
            </div>
                    {/**load more btn */}
            {canLoadMore && (
                <div className='flex justify-center mt-10'>
                    <button
                        onClick={handleLoadMore}
                        className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 cursor-pointer'
                    >
                        Carregar Mais Artigos
                    </button>
                </div>
            )}
            {/* Newsletter Section */}
            <div className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 p-8 sm:p-10 md:p-12 border border-blue-500/30 animate-fade-in-up'>
                <div className='absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl'></div>
                <div className='relative z-10 text-center max-w-2xl mx-auto'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>
                        🔔 Não Perca Nenhum Artigo!
                    </h2>
                    <p className='text-gray-300 text-sm sm:text-base mb-6'>
                        Inscreva-se para receber notificações sobre novos artigos e conteúdos exclusivos.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                        <input 
                            type='email' 
                            placeholder='seu@email.com' 
                            className='px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-md'
                        />
                        <button className='px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105'>
                            Inscrever-se
                        </button>
                    </div>
                </div>
            </div>
        </div>
   </ContainerLay>
  )
}
