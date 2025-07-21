"use client";

import React from "react";
import courseData from "@/data/music_courses.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function Cards() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All Courses ({courseData.courses.length})
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {courseData.courses.map((course, idx) => (
          <CardContainer className="inter-var" key={idx}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-6 border">
              
              <div className="text-white space-y-4">
                
                <CardItem translateZ={30}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardItem>

                <CardItem translateZ={40}>
                  <h2 className="text-xl font-bold">{course.title}</h2>
                </CardItem>

                <CardItem translateZ={20}>
                  <p className="text-sm text-gray-300">{course.description}</p>
                </CardItem>

                <CardItem translateZ={10}>
                  <div className="text-sm font-medium">
                    Instructor: {course.instructor}
                  </div>
                </CardItem>

                <CardItem translateZ={20}>
                  <div className="text-lg font-semibold text-emerald-400">
                    ₹{course.price}
                  </div>
                </CardItem>
              </div>

            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Cards;
