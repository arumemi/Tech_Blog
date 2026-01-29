"use client";
import React, { useMemo, useRef, useState } from 'react'
import ContainerLay from '@/PageLayout/ContainerLay'
import dynamic from 'next/dynamic';
import axios from 'axios';
import toast from 'react-hot-toast';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false, loading: () => <p>Carregando editor...</p> });

export default function WritePage() {
  const editor = useRef(null);
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const config = useMemo(() => ({
    placeholder: 'Comece a digitar o conteúdo do seu artigo aqui...',
    theme: 'dark',
    minHeight: 300,
    uploader: {
      insertImageAsBase64URI: true,
    }
  }), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!title || !content || !excerpt || !coverImage) {
      toast.error('Por favor, preencha todos os campos obrigatórios', {
        duration: 4000,
        style: {
          background: '#ef4444',
          color: '#fff',
        },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData to send post with image
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('excerpt', excerpt);
      formData.append('coverImage', coverImage);

      // Send POST request to create post
      const response = await axios.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Show success message
      toast.success('Artigo publicado com sucesso!', {
        duration: 5000,
        style: {
          background: '#10b981',
          color: '#fff',
        },
      });

      // Reset form
      setTitle('');
      setContent('');
      setExcerpt('');
      setCoverImage(null);

      // Optional: Redirect to the new post
      // router.push(`/articles/${response.data.slug}`);

    } catch (error) {
      console.error('Erro ao publicar artigo:', error);
      
      if (axios.isAxiosError(error)) {
        toast.error(
          `Erro ao publicar o artigo: ${error.response?.data?.error || error.message}`, 
          { 
            duration: 8000,
            style: {
              background: '#ef4444',
              color: '#fff',
            },
          }
        );
      } else {
        toast.error('Erro desconhecido ao publicar o artigo', {
          duration: 5000,
          style: {
            background: '#ef4444',
            color: '#fff',
          },
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
              disabled={isSubmitting}
            />
          </div>

          {/* Excerpt Input */}
          <div className='space-y-3'>
            <label htmlFor='excerpt' className='block text-sm sm:text-base font-semibold text-gray-200'>
              Resumo do Artigo
            </label>
            <textarea
              id='excerpt'
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className='w-full px-4 sm:px-6 py-3 border border-gray-700 rounded-lg bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'
              placeholder='Digite um breve resumo do seu artigo...'
              rows={3}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Image Upload */}
          <div className='space-y-3'>
            <label htmlFor='coverImage' className='block text-sm sm:text-base font-semibold text-gray-200'>
              Imagem de Capa
            </label>
            <div className='relative'>
              <input
                type='file'
                accept='image/*'
                id='coverImage'
                onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
                className='block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors duration-200'
                required
                disabled={isSubmitting}
              />
              {coverImage && (
                <p className='mt-2 text-sm text-gray-400'>
                  Arquivo selecionado: <span className='text-blue-400'>{coverImage.name}</span>
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
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <div className='flex gap-4 pt-6 justify-end'>
            <button
              type='button'
              onClick={() => {
                setTitle('');
                setContent('');
                setExcerpt('');
                setCoverImage(null);
              }}
              className='flex-1 sm:flex-none bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={isSubmitting}
            >
              Limpar
            </button>
            <button
              type='submit'
              className='flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Publicando...' : 'Publicar Artigo'}
            </button>
          </div>
        </form>
      </section>
    </ContainerLay>
  )
}

