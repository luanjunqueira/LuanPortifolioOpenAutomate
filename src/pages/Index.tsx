import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import DevEnvironmentSection from "@/components/DevEnvironmentSection";
import DeploySection from "@/components/DeploySection";
import TechStackSection from "@/components/TechStackSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <DevEnvironmentSection />
      <DeploySection />
      <TechStackSection />
      <SkillsSection />
      <FooterSection />
      <AboutSection />
    </main>
  );
};

export default Index;
