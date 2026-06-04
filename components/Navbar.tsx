"use client";
import {
  GraduationCap,
  FolderOpen,
  Trophy,
  Code2,
  Mail,
  Download,
  Icon,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navItems = [
  { name: "Education", icon: GraduationCap, active: true },
  { name: "Projects", icon: FolderOpen },
  { name: "Experience", icon: Trophy },
  { name: "Skills", icon: Code2 },
  { name: "Contact", icon: Mail },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between rounded-3xl border border-white/10 bg-black/40 px-4 py-4 backdrop-blur-xl lg:px-8 lg:py-4">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-tight text-white">
        Prajakta<span className="text-blue-500">.</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-md lg:flex">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                item.active
                  ? "bg-white/10 text-white shadow-lg"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={16} />
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Desktop Resume */}
      <button className="hidden items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-500 px-8 py-4 font-semibold text-white transition hover:scale-105 lg:flex">
        <Download size={18} />
        Resume
      </button>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="text-white lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-full mt-4 w-full rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-zinc-300 transition bg-white/5 hover:text-white"
                >
                  <Icon size={18} />
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                </button>
              );
            })}

            <button className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 py-3 font-medium text-white">
              <Download size={18} />
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
