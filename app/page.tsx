import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timelinesection from "@/components/timeline/Timelinesection"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import ContactSections from "@/components/contact/ContactSections";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Timelinesection/>
      <Projects/>
      <Skills/>
      <ContactSections/>
    </div>
  );
}
