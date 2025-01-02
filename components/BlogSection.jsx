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
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-customRed font-medium">| News & Updates |</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-2 text-customGray">
            Latest News & Articles From
          </h2>
          <h3 className="text-2xl md:text-3xl font-playfair mt-1 text-customGray">
            The Blog
          </h3>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              {/* Image Container */}
              <div className="relative h-64 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Date Overlay */}
                <div className="absolute bottom-0 left-0 bg-customGray text-white py-2 px-4 rounded-tr-lg">
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <Tags size={16} className="text-customRed" />
                    <span className="text-gray-600">{post.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-customRed" />
                    <span className="text-gray-600">
                      {post.comments} {post.comments === 1 ? 'Comment' : 'Comments'}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-playfair font-bold mb-4 text-customGray hover:text-customRed transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Read More Link */}
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-customRed hover:gap-2 transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
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