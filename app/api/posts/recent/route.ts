import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    // Get limit from query parameters, default to 6
    const searchParams = request.nextUrl.searchParams;
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.min(parseInt(limitParam), 100) : 6;

    const recentPosts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImageURL: true,
        createdAt: true,
      },
      take: limit,
    });

    return NextResponse.json(recentPosts, { status: 200 });
  } catch (error) {
    console.error("FETCH_RECENT_POSTS_ERROR", error);

    return NextResponse.json(
      { error: "Falha ao buscar posts" },
      { status: 500 },
    );
  }
}
