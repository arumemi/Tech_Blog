"use client";
import React, { useMemo, useRef, useState } from 'react'
import ContainerLay from '@/PageLayout/ContainerLay'
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false, loading: () => <p>Carregando editor...</p> });

export default function WritePage() {
  const editor = useRef(null);
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const config = useMemo(() => ({
    placeholder: 'Comece a digitar o conteúdo do seu artigo aqui...',
    theme: 'dark',
    minHeight: 300,
    uploader: {
      insertImageAsBase64URI: true,
    }
  }), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, content, image });
  }

  return (
    <ContainerLay>
      <section className='max-w-4xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6'>
        {/* Header */}
        <div className='mb-12 animate-fade-in'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4'>
            Escrever um novo <span className='text-blue-500'>artigo</span>
          </h1>
          <p className='text-lg text-gray-400'>
            Compartilhe seus conhecimentos e inspire nossa comunidade
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-8'>
          {/* Title Input */}
          <div className='space-y-3'>
            <label htmlFor='title' className='block text-sm sm:text-base font-semibold text-gray-200'>
              Título do Artigo
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full px-4 sm:px-6 py-3 border border-gray-700 rounded-lg bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              placeholder='Digite o título do seu artigo...'
              required
            />
          </div>

          {/* Image Upload */}
          <div className='space-y-3'>
            <label htmlFor='image' className='block text-sm sm:text-base font-semibold text-gray-200'>
              Imagem de Capa
            </label>
            <div className='relative'>
              <input
                type='file'
                accept='image/*'
                id='image'
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className='block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors duration-200'
              />
              {image && (
                <p className='mt-2 text-sm text-gray-400'>
                  Arquivo selecionado: <span className='text-blue-400'>{image.name}</span>
                </p>
              )}
            </div>
          </div>

          {/* Rich Text Editor */}
          <div className='space-y-3'>
            <label className='block text-sm sm:text-base font-semibold text-gray-200'>
              Conteúdo do Artigo
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className='w-full px-4 sm:px-6 py-4 border border-gray-700 rounded-lg bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-mono text-sm resize-none'
              placeholder='Digite o conteúdo do seu artigo aqui...'
              rows={15}
            />
          </div>

          {/* Submit Button */}
          <div className='flex gap-4 pt-6 justify-end'>
            <button
              type='submit'
              className='flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95'
            >
              Publicar Artigo
            </button>
            <button
              type='reset'
              className='flex-1 sm:flex-none bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200'
            >
              Limpar
            </button>
          </div>
        </form>
      </section>
    </ContainerLay>
  )
}
