import Image from "next/image";
import { 
  Building2, 
  GraduationCap, 
  Users, 
  Globe, 
  Briefcase,
  Landmark,
  School,
  Plane,
  Heart,
  Buildings,
  BookOpen,
  Building,
  Wallet,
  Wheat, 
  Ship, 
  Church, 
  Trophy, 
} from "lucide-react";
import Link from "next/link";

// Icon mapping for all categories across different visa types
const getCategoryIcon = (categoryTitle) => {
  const iconMap = {
    // Residence Visa Categories
    "Business Categories": Building2,
    "Skilled Migrant Category": GraduationCap,
    "Family Categories": Users,
    "Special Categories": Globe,
    "Residence from Work Category": Briefcase,
    
   // Work Visa Categories
   "Post-Study work visa": GraduationCap,
   "Student and trainee work visa": School,
   "Family stream work visa": Users,
   "Horticulture and viticulture seasonal work visa": Wheat,
   "Foreign crew of fishing vessels": Ship,
   "Religious Worker": Church,
   "Essential Skills work visa": Briefcase,
   "International/Humanitarian work visa": Globe,
   "Work to Residence": Trophy,
    
    // Student Visa Categories
    "Fee Paying Student Visa": School,
    "Exchange Student Visa": Globe,
    "Pathway Student Visa": BookOpen,
    
    // Visitor Visa Categories
    "Tourist Visa": Plane,
    "Business Visitor Visa": Building,
    "Family Visit Visa": Heart,
    
    // Investor Visa Categories
    "Investor 1 Category": Landmark,
    "Investor 2 Category": Buildings,
    "Business Investment": Wallet
  };

  return iconMap[categoryTitle] || Building2; // Default to Building2 if no match found
};

export default function VisaCategories({ categories, title }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            The Different Categories of {title}
          </h2>
          <div className="mt-2 h-1 w-20 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const rowNumber = Math.floor(index / 2) + 1;
            const isEvenRow = rowNumber % 2 === 0;
            const IconComponent = getCategoryIcon(category.title);

            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* For odd rows, image first */}
                  {!isEvenRow && (
                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    {/* Category Icon */}
                    <div className="mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>

                    {/* Description */}
                    {category.content && (
                      <p className="text-gray-600 mb-4">{category.content}</p>
                    )}

                    {/* Read More Link */}
                    <Link
                      href="#"
                      className="group inline-flex flex-col items-start"
                    >
                      <div className="inline-flex items-center text-blue-800">
                        <span className="font-medium">Read More</span>
                        <svg
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <div className="w-full border-b border-dotted border-blue-800 mt-1"></div>
                    </Link>
                  </div>

                  {/* For even rows, image last */}
                  {isEvenRow && (
                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}