"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const instructores = [
  {
    "id": 1,
    "name": "Kevin Bethune",
    "designation": "Founder & Chief Creative Officer, dd•l",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3NmmlpJ3rKlh5NPGAd00zocHhdamnxDepg&s"
  },
  {
    "id": 2,
    "name": "Susan Seay",
    "designation": "Mentor & Family Speaker",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/024/354/252/small/businessman-isolated-illustration-ai-generative-free-photo.jpg"
  },
  {
    "id": 3,
    "name": "Kate Darling",
    "designation": "Social Robotics Expert, MIT Media Lab",
    "image": "https://media.gettyimages.com/id/1450788989/photo/portrait-of-happy-african-businesswoman-holding-digital-tablet-in-the-office.jpg?s=612x612&w=gi&k=20&c=DY5o7sHYUhvMmz9Ir1Q-51E0emUSkynClXvZtnvuUSU="
  },
  {
    "id": 4,
    "name": "Amy Webb",
    "designation": "Futurist & Founder, Future Today Strategy",
    "image": "https://thumbs.dreamstime.com/b/businessman-outdoor-business-center-background-successful-business-person-portrait-professional-people-formal-wear-red-119656046.jpg"
  },
  {
    "id": 5,
    "name": "Poppy Crum",
    "designation": "CTO & Neuroscientist, NextSense",
    "image": "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-260nw-2451544833.jpg"
  },
  {
    "id": 6,
    "name": "Revathi Advaithi",
    "designation": "CEO, Flex; Global Business Leader",
    "image": "https://www.shutterstock.com/image-photo/portrait-successful-business-woman-suit-260nw-2468636115.jpg"
  }
]


export function ShowCase() {
  return (
    <div className="relative h-[40rem] overflow-hidden">
      <WavyBackground
        className="relative z-10 flex flex-col items-center justify-center h-full w-full"
        containerClassName="absolute inset-0 h-full w-full"
      >
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-whote font-bold text-center mb-8">Meet Our Instructor</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructores} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default ShowCase;