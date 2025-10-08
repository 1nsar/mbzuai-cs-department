'use client'

import { Hero } from "@/components/hero";
import { FeatureCards } from "@/components/feature-cards";
import MinervaHero from "@/components/minerva-hero";
import MBZUAIResearchStats from "@/components/mbzuai-research-stats";
import UniversityCollaborations from "@/components/university-collaborations";
import StanfordNewsSection from "@/components/stanford-news-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <FeatureCards
        title="Where Intelligence Meets Innovation"
        subtitle="MBZUAI fosters a vibrant research ecosystem led by world-class faculty and driven by ambitious students from around the world. Here, breakthroughs in artificial intelligence emerge from diverse perspectives, collaborative inquiry, and a shared commitment to advancing knowledge that benefits humanity."

        cards={[
          {
            eyebrow: "Power from knowledge to serve",
            title: "AI Research & Innovation",
            description:
              "We pioneer cutting-edge research across multiple domains of computer science, from artificial intelligence and machine learning to human-computer interaction and robotics. Our work addresses real-world challenges and pushes the boundaries of what's possible in technology.",
            imageUrl:
              "/myphoto1.jpg",
            imageAlt: "Researchers working with robotic arms and equipment",
            linkText: "More about CS department",
            linkHref: "/research",
          },
          {
            eyebrow: "Advancing the Frontiers of AI",
            title: "Our Faculty",
            description:
              "Our distinguished faculty includes leaders in their fields, recognized for groundbreaking contributions to computer science. They bring diverse expertise and perspectives, fostering an environment of innovation and excellence in education and research.",
            imageUrl:
              "/myphoto2.jpg",
            imageAlt:
              "Faculty member presenting research on screen with Bimanual Manipulation content",
            linkText: "Meet the minds behind the breakthroughs",
            linkHref: "/faculty",
          },
        ]}
      />
  <MinervaHero />
  <UniversityCollaborations />
  <StanfordNewsSection />
  <MBZUAIResearchStats />
    </div>
  );
}
