import Image from 'next/image';
import Link from 'next/link';

export default function PageTitle({ title, subtitle }) {
  return (
    <section className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] w-full overflow-hidden">
      {/* Background Image with New Zealand themed image */}
      <Image
        src="/images/page-title/visa options.png"
        alt="New Zealand Visa Services"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />      
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full py-12 sm:py-16 md:py-20">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-3 sm:mb-4 md:mb-6 
            tracking-tight leading-tight sm:leading-tight md:leading-tight">
            {title}
          </h1>

          {/* Additional description text */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl 
            leading-relaxed sm:leading-relaxed md:leading-relaxed">
            Get professional guidance and support for your New Zealand immigration journey
          </p>
        </div>
      </div>

      {/* Right Side Pattern */}
      <div className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 opacity-5">
        <div 
          className="h-full w-full bg-repeat" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h8v8H0zM16 0h8v8h-8zM8 8h8v8H8zM0 16h8v8H0zM16 16h8v8h-8z' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px sm:28px sm:28px md:32px md:32px'
          }} 
        />
      </div>
    </section>
  );
}