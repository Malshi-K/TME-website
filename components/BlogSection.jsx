"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Tags } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Unsatiable Entreaties May Collecting Power",
      image: "/images/blog1.jpg",
      date: "16 Apr",
      category: "Design",
      comments: 2,
    },
    {
      id: 2,
      title: "It's Through Refresing To Get Such A Personal",
      image: "/images/blog2.webp",
      date: "16 Apr",
      category: "Business",
      comments: 3,
    },
    {
      id: 3,
      title: "Due To Their Excellent Service Competitive Pricing",
      image: "/images/blog3.jpg",
      date: "18 Apr",
      category: "Design",
      comments: 0,
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-red-500 font-medium text-sm sm:text-base inline-block">
            | News & Updates |
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mt-2 text-gray-800">
            Latest News & Articles From
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif mt-1 text-gray-800">
            The Blog
          </h3>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Date Overlay */}
                <div className="absolute bottom-0 left-0 bg-gray-800 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-tr-lg text-sm">
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Tags size={14} className="text-red-500" />
                    <span className="text-gray-600">{post.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle size={14} className="text-red-500" />
                    <span className="text-gray-600">
                      {post.comments} {post.comments === 1 ? 'Comment' : 'Comments'}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-4 text-gray-800 group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-red-600">
                    {post.title}
                  </Link>
                </h3>

                {/* Read More Link */}
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-red-500 group/link"
                >
                  <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover/link:translate-x-1" />
                  <span className="ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">
                    Read More
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;