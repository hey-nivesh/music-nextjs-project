import Herosection from "@/components/HeroSection";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
export default function Home() {
  return (
    <main className="min-h-screen bg-black[0.96] antialiased bg-grid-white/[0.2]">
      
      <Herosection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
    </main>
  );
}
