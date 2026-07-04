"use client";
import Heading from "../Heading";
import { icons } from "@/data/mockdata";
import { motion } from "framer-motion";
import { CiMail, CiLocationOn, CiTimer  } from "react-icons/ci";
import ContactForm from "./ContactForm";


const ContactSections = () => {
  return (
    <section id="contact" className="relative flex flex-col py-20 md:py-28">
      <Heading data="CONTACT" />
      <div className="grid lg:grid-cols-6 gap-6 py-4">
        <div className="lg:col-span-3  flex flex-col justify-between">
          <motion.div
            className="flex flex-col  lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="mb-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Let's Work <span className="projects_heading">Together</span>
            </h3>
            <p className="text-white/40 text-lg md:text-base cursor-default">
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>
            <div className="flex mt-4 ">
              <CiMail
                size={20}
              />
              <span className="px-2">prajaktanaik98@gmail.com</span>
            </div>
            <div className="flex mt-4 ">
              <CiLocationOn 
                size={20}
              />
              <span className="px-2">Goa, India</span>
            </div>
            <div className="flex mt-4 ">
              <CiTimer  
                size={20}
              />
              <span className="px-2">Replies within 24h</span>
            </div>
          </motion.div>
        </div>
         <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ContactForm/>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSections;
