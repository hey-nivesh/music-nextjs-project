'use client';
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpComingWebinar = [
  
  {
    "title": "Getting Started with Blockchain Development",
    "description": "An introductory session for developers curious about creating dApps and smart contracts.",
    "link": "https://example.com/webinars/blockchain-basics"
  },
  {
    "title": "Cybersecurity Trends in 2025",
    "description": "Explore the top threats, security practices, and tools every developer and IT team should know.",
    "link": "https://example.com/webinars/cybersecurity-2025"
  },
  {
    "title": "Design Thinking for Product Innovation",
    "description": "Understand how design thinking fuels user-centric innovation and startup success.",
    "link": "https://example.com/webinars/design-thinking"
  },
  {
    "title": "Kubernetes for Absolute Beginners",
    "description": "Deploy and manage containerized applications using Kubernetes with ease.",
    "link": "https://example.com/webinars/kubernetes-beginners"
  },
  {
    "title": "From Figma to Code: UI/UX for Developers",
    "description": "Bridge the gap between design and development with real-world Figma to frontend workflows.",
    "link": "https://example.com/webinars/figma-to-code"
  },
  {
    "title": "Building Scalable Web Apps with React & Node.js",
    "description": "Architect and optimize full-stack apps for performance and maintainability.",
    "link": "https://example.com/webinars/react-node-scalability"
  },
  {
    "title": "The Future of Remote Work & Digital Collaboration",
    "description": "Learn the tools, habits, and strategies redefining workplace productivity.",
    "link": "https://example.com/webinars/future-of-work"
  },
  {
    "title": "Prompt Engineering: Crafting Better AI Interactions",
    "description": "Discover techniques to write better prompts for GPT-style models and improve output quality.",
    "link": "https://example.com/webinars/prompt-engineering"
  },
  {
    "title": "Intro to Data Science with Python",
    "description": "Start your data science journey by exploring pandas, NumPy, and visualizations in Python.",
    "link": "https://example.com/webinars/data-science-python"
  }
]


function UpComingWebinars(){
    return(
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Feartured Webinars</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10 ">
                  <HoverEffect
                    items={UpComingWebinar.map(webinar => ({
                      title: webinar.title,
                      description: webinar.description,
                      link: "/"
                    }))}
                  />
                </div>
                <div className="mt-10 text-center">
                    <Link href="/Courses"
                    className="px-4 py-2 rouded border border0neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All courses</Link>
                </div>
            </div>
        </div>
    )
}

export default UpComingWebinars;