import AboutHeader from "@/components/about/AboutHeader";
import ContactSection from "@/components/about/ContactSection";
import TeamGrid from "@/components/about/TeamGrid";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <AboutHeader />
      <TeamGrid />
      <ContactSection />
    </main>
  );
}
