import Link from "next/link";
import React from "react";
import { Spotlight } from "@/components/ui/Spotligth";
import { Button } from "./ui/moving-border";
function HeroSection() {
    return (

        <div className="h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md: text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-netral-50 to-neutral-400">Master the Art of music</h1>
                <p>
                    Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
                </p>
                <div className="mt-4">
                    <Link href={"/Courses"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;