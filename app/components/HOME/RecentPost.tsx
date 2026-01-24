

import Image from 'next/image'

export const posts = [
    
    {
        id: 2,
        title: "Getting Started with React: A Comprehensive Guide for Beginners",
        excerpt: "Learn the fundamentals of React, including components, props, state management, and hooks. Build your first interactive web application with this step-by-step guide.",
        date: "2025-07-20",
        slug: "getting-started-with-react",
        image: "/image for blog/react.jpeg",
        category: "React",
        readTime: "10 min read"
    },
    {
        id: 3,
        title: "MongoDB Best Practices: Designing Efficient Schemas and Queries",
        excerpt: "Discover best practices for working with MongoDB. Learn how to design efficient schemas, optimize queries, and improve database performance.",
        date: "2025-08-10",
        slug: "mongodb-best-practices",
        image: "/image for blog/mongodb.jpeg",
        category: "Database",
        readTime: "12 min read"
    },
    {
        id: 4,
        title: "Python for Data Science: Essential Libraries and Techniques",
        excerpt: "Explore the essential Python libraries for data science including NumPy, Pandas, and Matplotlib. Learn data manipulation, analysis, and visualization techniques.",
        date: "2025-09-05",
        slug: "python-for-data-science",
        image: "/image for blog/python.jpeg",
        category: "Python",
        readTime: "15 min read"
    },
   
    {
        id: 6,
        title: "Containerization with Docker: From Basics to Production",
        excerpt: "Learn how to containerize your applications with Docker. Understand images, containers, Docker Compose, and best practices for deploying to production.",
        date: "2025-11-18",
        slug: "containerization-with-docker",
        image: "/image for blog/container.jpeg",
        category: "DevOps",
        readTime: "11 min read"
    },
    {
        id: 7,
        title: "The Future of Technology: Trends Shaping 2026",
        excerpt: "Explore the emerging technologies and trends that are shaping the future. From AI and machine learning to quantum computing and edge computing.",
        date: "2026-01-15",
        slug: "future-of-technology-2026",
        image: "/image for blog/global_tech.jpg",
        category: "Tech Trends",
        readTime: "9 min read"
    },
    {
        id: 8,
        title: "Building a Modern Tech Workspace: Tools and Setup Guide",
        excerpt: "Create an efficient and productive tech workspace. Learn about essential tools, hardware setup, ergonomics, and productivity tips for developers.",
        date: "2026-01-22",
        slug: "modern-tech-workspace",
        image: "/image for blog/tech_desk.jpeg",
        category: "Productivity",
        readTime: "7 min read"
    }
]

export default function RecentPost() {
    return(
        <div className="space-y-2">
            <h2 className="semi-bold text-gray-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >Recent Posts</h2>
            {/* recent posts will be displayed here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-500">
                            <div className="relative w-full h-48 md:h-52 lg:h-48">
                                <Image 
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-blue-400 mb-2">{post.category}</div>
                                <h3 className="text-xl font-semibold text-gray-200 mb-2">{post.title}</h3>
                                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                        </div>
                                    </div>
                                )
                            
                        })}
                    </div>
                </div>
            )
        }
    