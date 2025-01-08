// components/PageTitle.js
import Image from 'next/image';
import Link from 'next/link';

export default function PageTitle({ title, subtitle }) {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image with New Zealand themed image */}
      <Image
        src="/images/page-title/visa options.png"
        alt="New Zealand Visa Services"
        fill
        className="object-cover"
        priority
      />      
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            {title}
          </h1>

          {/* Additional description text */}
          <p className="text-white/90 text-lg max-w-3xl">
            Get professional guidance and support for your New Zealand immigration journey
          </p>
        </div>
      </div>

      {/* Right Side Pattern */}
      <div className="absolute right-0 top-0 h-full w-32 opacity-5">
        <div 
          className="h-full w-full bg-repeat" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h8v8H0zM16 0h8v8h-8zM8 8h8v8H8zM0 16h8v8H0zM16 16h8v8h-8z' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
            backgroundSize: '32px 32px'
          }} 
        />
      </div>
    </section>
  );
}