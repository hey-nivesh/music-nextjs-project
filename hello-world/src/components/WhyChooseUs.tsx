'use client';
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const music_school_courses = [
    {
      "title": "Piano Fundamentals",
      "description": "Learn the basics of piano playing with proper posture, hand positioning, and finger techniques. This beginner-friendly course covers reading sheet music, basic scales, and simple melodies. Students will develop coordination between both hands while exploring classical and contemporary pieces."
    },
    {
      "title": "Advanced Guitar Mastery",
      "description": "Perfect your guitar skills through advanced techniques including fingerpicking, complex chord progressions, and improvisation. Students will explore various genres from classical to jazz, rock to blues, while developing their own unique playing style and stage presence."
    },
    {
      "title": "Violin Excellence Program",
      "description": "Master the art of violin through structured lessons focusing on bow technique, intonation, and musical expression. From beginner scales to advanced concertos, students will build a strong foundation in classical technique while exploring different musical styles."
    },
    {
      "title": "Drum Set Fundamentals",
      "description": "Develop rhythm, coordination, and timing through comprehensive drum instruction. Learn basic beats, fills, and rudiments while playing along to popular songs across multiple genres. Perfect for beginners wanting to build a solid rhythmic foundation."
    },
    {
      "title": "Classical Voice Training",
      "description": "Develop proper breathing techniques, vocal range, and classical repertoire interpretation. Students will work on posture, diction, and stage presence while exploring art songs, opera arias, and sacred music from various periods."
    },
    {
      "title": "Contemporary Vocal Styles",
      "description": "Explore modern singing techniques across pop, rock, R&B, and jazz genres. Focus on microphone technique, vocal styling, improvisation, and performance skills. Students will work on popular repertoire and develop their unique vocal identity."
    },
    {
      "title": "Choir and Ensemble Singing",
      "description": "Experience the joy of group singing while developing harmony skills, blend, and musical collaboration. Students will perform diverse repertoire from classical to contemporary, building confidence in ensemble performance and music reading."
    },
    {
      "title": "Music Theory Foundations",
      "description": "Understand the building blocks of music including scales, intervals, chord progressions, and harmonic analysis. Students will develop ear training skills and learn to analyze music from various periods and styles."
    },
    {
      "title": "Songwriting Workshop",
      "description": "Learn to craft compelling songs through melody writing, lyric composition, and chord progression techniques. Students will explore different song forms, develop their creative voice, and complete original compositions throughout the course."
    },
    {
      "title": "Jazz Improvisation",
      "description": "Explore the art of jazz improvisation through scale studies, chord-tone relationships, and rhythmic patterns. Students will learn to solo over standard jazz progressions while developing their own improvisational voice and understanding of jazz theory."
    },
    {
      "title": "Music Production Basics",
      "description": "Introduction to digital audio workstations, recording techniques, and music production fundamentals. Students will learn about mixing, basic effects, and how to produce their own recordings using industry-standard software and equipment."
    },
    {
      "title": "Chamber Music Ensemble",
      "description": "Develop advanced ensemble skills through small group performance. Students will work collaboratively to interpret classical and contemporary chamber music, focusing on communication, timing, and musical balance in an intimate setting."
    },
    {
      "title": "Bass Guitar Workshop",
      "description": "Master the foundation of rhythm section playing through bass guitar instruction. Learn proper technique, walking bass lines, slap bass, and how to lock in with drummers across funk, rock, jazz, and Latin styles."
    },
    {
      "title": "Music History and Appreciation",
      "description": "Journey through the evolution of Western classical music from medieval times to the present. Students will analyze major works, understand historical contexts, and develop critical listening skills while exploring how music reflects cultural changes."
    },
    {
      "title": "Electronic Music Creation",
      "description": "Dive into the world of electronic music production using synthesizers, samplers, and digital audio workstations. Students will learn sound design, beat making, and arrangement techniques while creating their own electronic compositions."
    },
    {
      "title": "Flute Performance",
      "description": "Develop beautiful tone, proper breath support, and technical facility on the flute. Students will work through progressive repertoire from baroque to contemporary, focusing on articulation, phrasing, and musical expression."
    },
    {
      "title": "Music Therapy Introduction",
      "description": "Explore the therapeutic applications of music in healthcare and wellness settings. Students will learn basic music therapy techniques, understand the psychological effects of music, and practice simple interventions for various populations."
    },
    {
      "title": "World Music Exploration",
      "description": "Discover musical traditions from around the globe including African drumming, Indian classical music, Latin American rhythms, and Middle Eastern scales. Students will learn about cultural contexts and practice authentic performance techniques."
    },
    {
      "title": "Music Business Fundamentals",
      "description": "Navigate the modern music industry with knowledge of copyright, contracts, publishing, and digital distribution. Students will learn about artist management, booking shows, and building a sustainable career in music."
    },
    {
      "title": "Advanced Music Composition",
      "description": "Create original compositions using advanced harmonic language, orchestration techniques, and contemporary compositional methods. Students will write for various ensembles and explore different musical styles while developing their compositional voice."
    }
  ]

function WhyChooseUs() {
  return (
    <div className="">
      <StickyScroll
  content={music_school_courses}
  contentClassName="space-between max-w-2xl mx-auto px-4 py-8 scrollbar-hidden space-y-8 text-left"
/>
    </div>
  );
}

export default WhyChooseUs;