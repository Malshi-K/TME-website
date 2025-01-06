import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import ExploreSection from "@/components/home/ExploreSection";
import Hero from "@/components/home/Hero";
import ImmigrationServices from "@/components/home/ImmigrationServices";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImmigrationServices />
      <AboutSection />
      <ExploreSection />
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
}
