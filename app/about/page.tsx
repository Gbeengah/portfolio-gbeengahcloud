import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about/about-hero";
import { ProfessionalSummary } from "@/components/about/professional-summary";
import { WhatIDo } from "@/components/about/what-i-do";
import { AboutCertifications } from "@/components/about/about-certifications";
import { ToolsPlatforms } from "@/components/about/tools-platforms";
import { CareerFocus } from "@/components/about/career-focus";
import { AboutContact } from "@/components/about/about-contact";

export const metadata = {
  title: "About | GbengaCloud - Senior DevOps & Cloud Infrastructure Engineer",
  description:
    "Learn more about GbengaCloud - A Senior DevOps & Cloud Infrastructure Engineer specializing in AWS, Azure, Terraform, Kubernetes, and cloud automation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <ProfessionalSummary />
      <WhatIDo />
      <AboutCertifications />
      <ToolsPlatforms />
      <CareerFocus />
      <AboutContact />
      <Footer />
    </main>
  );
}
