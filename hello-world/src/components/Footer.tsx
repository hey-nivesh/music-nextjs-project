import { footer } from "motion/react-client";

export function Footer(){
    return (
       <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">

           <div>
  <h3 className="text-white font-semibold mb-4">About Us</h3>
  <p className="text-sm">
    At Harmony Music Academy, we nurture talent with personalized instruction in vocals, instruments, and music theory. Unleash your sound with us!
  </p>
</div>

<div>
  <h3 className="text-white font-semibold mb-4">Courses</h3>
  <ul className="space-y-2 text-sm">
    <li>🎸 Guitar Basics</li>
    <li>🎹 Piano for Beginners</li>
    <li>🎤 Vocal Coaching</li>
    <li>📚 Music Theory</li>
  </ul>
</div>

<div>
  <h3 className="text-white font-semibold mb-4">Contact</h3>
  <ul className="text-sm space-y-2">
    <li>📍 42 Melody Lane, Firozabad</li>
    <li>📞 +91-98765-43210</li>
    <li>✉️ contact@harmonymusic.ac.in</li>
  </ul>
</div>

<div>
  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
  <ul className="flex space-x-4 text-xl">
    <li><a href="#" className="hover:text-white">🎵 Instagram</a></li>
    <li><a href="#" className="hover:text-white">🎶 Facebook</a></li>
    <li><a href="#" className="hover:text-white">🎥 YouTube</a></li>
  </ul>
</div>
        </div>
       </footer>
    )
}
export default Footer;