import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ExploreSection from "@/components/ExploreSection";
import Hero from "@/components/Hero";
import ImmigrationServices from "@/components/ImmigrationServices";
import TestimonialsSection from "@/components/TestimonialsSection";

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
