"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Palette, Users, Lightbulb, Zap, BookOpen, Smartphone, MapPin, Mail, Phone, Clock } from "lucide-react"
import Image from "next/image"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.0, 0.0, 0.2, 1] as any },
    },
  }

  const highlights = [
    {
      title: "UI Design",
      description:
        "Creating visually engaging mobile apps, websites, landing pages, and design systems with attention to detail.",
      icon: <Palette size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "UX Research",
      description:
        "Conducting user research, competitive analysis, and usability testing to create user-centered designs.",
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Prototyping",
      description: "Building interactive prototypes and wireframes to visualize and test design concepts.",
      icon: <Smartphone size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Visual Design",
      description: "Crafting logos, branding materials, social media designs, and thumbnail designs.",
      icon: <Zap size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Problem Solving",
      description: "Tackling complex design challenges with innovative solutions and a keen eye for aesthetics.",
      icon: <Lightbulb size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with latest design trends, tools, and methodologies in UI/UX.",
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="relative flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-6" />
                <div className="absolute inset-0 bg-card rounded-2xl overflow-hidden border-2 border-border">
                  <Image
                    src="/images/saimon-profile.png"
                    alt="Md Saimon Hossen - UI/UX Designer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="max-w-2xl">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                I'm Md Saimon Hossen, a passionate UI/UX and Graphic designer with{" "}
                <span className="font-semibold text-foreground">3+ years</span> of experience in the creative industry.
                I specialize in crafting visually engaging and user-friendly digital experiences using tools like Figma,
                Adobe XD, Adobe Illustrator, and Adobe Photoshop.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My passion for design began with a deep love for problem-solving, creating meaningful user experiences
                and a keen eye for aesthetics. Over the years, I've refined my skills, working on a variety of projects
                that blend creativity with functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's designing a{" "}
                <span className="font-semibold text-foreground">
                  mobile app, website interface, or branding material
                </span>
                , I strive to create designs that resonate with users while aligning with business goals.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Location", value: "Bangladesh", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: "WhatsApp",
                  value: "+880 1874460944",
                  link: "https://wa.me/8801874460944",
                  icon: <Phone size={24} strokeWidth={1.5} />,
                },
                {
                  label: "Portfolio",
                  value: "Behance",
                  link: "https://www.behance.net/saimonhossen",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
                { label: "Experience", value: "3+ Years", icon: <Clock size={24} strokeWidth={1.5} /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
