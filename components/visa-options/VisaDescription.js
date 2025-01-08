import Image from "next/image";

export default function VisaDescription({ description }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 items-center gap-8 p-8">
          {/* Left side - Image Container */}
          <div className="flex justify-center items-center">
            <div className="relative w-full h-96 max-w-lg">
              <Image
                src={description.image}
                alt="Visa Description"
                fill
                className="object-cover rounded-lg shadow-md"
                priority
              />
            </div>
          </div>

          {/* Right side - Content Container */}
          <div className="flex flex-col justify-center max-w-xl mx-auto">
            <div className="prose prose-lg">
              {description.content.map((item, index) => {
                switch (item.type) {
                  case "paragraph":
                    return (
                      <p 
                        key={index} 
                        className="text-gray-600 mb-4 leading-relaxed"
                      >
                        {item.text}
                      </p>
                    );
                  case "numbered":
                    const [number, ...textParts] = item.text.split('.');
                    return (
                      <div 
                        key={index} 
                        className="flex gap-4 text-gray-600 mb-4 items-start"
                      >
                        <span className="font-semibold min-w-8">
                          {number}.
                        </span>
                        <span className="leading-relaxed">
                          {textParts.join('.')}
                        </span>
                      </div>
                    );
                  case "citation":
                    return (
                      <p 
                        key={index} 
                        className="text-gray-500 italic mt-6 text-sm border-l-4 border-gray-200 pl-4"
                      >
                        {item.text}
                      </p>
                    );
                  default:
                    return (
                      <p 
                        key={index} 
                        className="text-gray-600 mb-4 leading-relaxed"
                      >
                        {item.text}
                      </p>
                    );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}