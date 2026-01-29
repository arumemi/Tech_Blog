import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import slugify from 'slugify';
import { uploadToCloudinary } from '@/app/services/cloudinary';

/**
 * POST /api/posts
 * Creates a new blog post with image upload
 * Requires authentication
 * @param request - The incoming HTTP request with FormData containing post details and cover image
 * @returns JSON response with created post data or error message
 */
export async function POST(request: NextRequest) {
  try {
    // Verify user authentication
    const session = await auth.api.getSession({
      headers: await headers()
    });
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Não autorizado' }, 
        { status: 401 }
      );
    }

    // Extract form data from request
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const coverImage = formData.get('coverImage') as File;

    // Validate required fields
    if (!title || !content || !excerpt || !coverImage) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' }, 
        { status: 400 }
      );
    }

    // Generate slug from title
    let slug = slugify(title, { 
      lower: true, 
      strict: true, 
      trim: true 
    });

    // Ensure slug is unique by appending counter if necessary
    let baseSlug = slug;
    let counter = 1;
    while (await prisma.post.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    // Upload cover image to Cloudinary
    const imageData = await uploadToCloudinary(coverImage);

    // Create new post in database
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        slug,
        coverImageURL: imageData.secure_url,
        coverImagePublicId: imageData.public_id,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar post:', error);
    return NextResponse.json(
      { error: 'Falha ao criar post' }, 
      { status: 500 }
    );
  }
}

/**
 * GET /api/posts
 * Retrieves all blog posts ordered by creation date
 * @returns JSON response with array of posts or error message
 */
export async function GET() {
  try {
    // Fetch all posts with author information
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return NextResponse.json(
      { error: 'Falha ao buscar posts' }, 
      { status: 500 }
    );
  }
}