'use client';
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "The instructors at this music school transformed my understanding of piano technique...",
    name: "Sarah Chen",
    title: "Piano Student"
  },
  {
    quote: "As a working professional, I appreciated the flexible scheduling and personalized approach...",
    name: "Michael Rodriguez",
    title: "Adult Guitar Student"
  },
  {
    quote: "The vocal coaching program here is exceptional. My daughter's confidence has soared...",
    name: "Jennifer Thompson",
    title: "Parent of Vocal Student"
  },
  {
    quote: "I've been teaching music for over 20 years, and this school's commitment is unmatched...",
    name: "Dr. Robert Martinez",
    title: "Violin Instructor"
  },
  {
    quote: "The music theory classes opened up a whole new world for me...",
    name: "Emily Foster",
    title: "Composition Student"
  }
];

function TestimonialCards() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask for faded effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Main testimonial content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Hear Our Harmony: Voices of success
        </h2>
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;