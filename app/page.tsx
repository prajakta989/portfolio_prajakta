import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timelinesection from "@/components/timeline/Timelinesection";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Timelinesection/>
    </div>
  );
}
