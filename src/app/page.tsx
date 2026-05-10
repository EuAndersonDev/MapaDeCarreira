import {
  Header,
  AboutSection,
  CareerMapSection,
  SkillsSection,
  Footer,
} from "@/components";
import { mockProfileData } from "@/data/mockData";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header data={mockProfileData} />
      <main className="flex-1">
        <AboutSection data={mockProfileData} />
        <CareerMapSection careerLevels={mockProfileData.careerLevels} />
        <SkillsSection
          skillCategories={mockProfileData.skillCategories}
          languages={mockProfileData.languages}
        />
      </main>
      <Footer data={mockProfileData} />
    </div>
  );
}
