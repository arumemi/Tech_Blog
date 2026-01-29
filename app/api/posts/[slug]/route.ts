import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/posts/[slug]
 * Retrieves a single blog post by its unique slug identifier
 * @param request - The incoming HTTP request
 * @param params - Dynamic route parameters containing the post slug
 * @returns JSON response with post data or error message
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Extract the slug from the dynamic route parameters
    const { slug } = await params;

    // Query the database for a post with the matching slug
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    // Return 404 if the post doesn't exist
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Return the post data as JSON
    return NextResponse.json(post);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching post:', error);
    // Return a generic error response
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/posts/[slug]
 * Updates an existing blog post with new data
 * @param request - The incoming HTTP request with updated post data in body
 * @param params - Dynamic route parameters containing the post slug
 * @returns JSON response with updated post data or error message
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Extract the slug from the dynamic route parameters
    const { slug } = await params;
    // Parse the request body to get updated post data
    const body = await request.json();
    const { title, content, excerpt, coverImageURL, coverImagePublicId } = body;

    // Update the post in the database with new data
    const post = await prisma.post.update({
      where: { slug },
      data: {
        title,
        content,
        excerpt,
        coverImageURL,
        coverImagePublicId,
      },
    });

    // Return the updated post data
    return NextResponse.json(post);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error updating post:', error);
    // Return a generic error response
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/posts/[slug]
 * Permanently removes a blog post from the database
 * @param request - The incoming HTTP request
 * @param params - Dynamic route parameters containing the post slug
 * @returns JSON response with success message or error message
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Extract the slug from the dynamic route parameters
    const { slug } = await params;

    // Delete the post from the database
    await prisma.post.delete({
      where: { slug },
    });

    // Return success message
    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error deleting post:', error);
    // Return a generic error response
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
