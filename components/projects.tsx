"use client"

import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "./aceternity/animated-card"

export default function Projects() {
  const projects = [



    
    {
      title: "CellFusion Smartphone App",
      description: "Case study on a smartphone selling mobile app with complete UX research and UI design.",
      technologies: ["UI/UX", "Mobile App", "Figma", "Case Study"],
      link: "https://www.behance.net/gallery/180700151/Case-Study-on-CellFusion-Smartphone-Selling-App",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "London City Dashboard Redesign",
      description: "UI/UX case study for redesigning the London City Dashboard with improved user experience.",
      technologies: ["Dashboard", "UI/UX", "Redesign", "Case Study"],
      link: "https://www.behance.net/gallery/181376677/UIUX-Case-Study-London-City-Dashboard-Redesign",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "CryptoPulse Website Design",
      description: "Modern website UI/UX design for a cryptocurrency platform with sleek visuals.",
      technologies: ["Website", "Crypto", "UI/UX", "Modern Design"],
      link: "https://www.behance.net/gallery/230183039/Modern-Website-UIUX-Design-CryptoPulse",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "FitTrack Fitness App",
      description: "Smart fitness app design featuring both light and dark mode interfaces.",
      technologies: ["Mobile App", "Fitness", "Dark Mode", "UI Design"],
      link: "https://www.behance.net/gallery/231695063/FitTrack-A-Smart-Fitness-App-with-Light-Dark-Mode",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Digital Agency Website",
      description: "Complete UI/UX design for a digital agency website with modern aesthetics.",
      technologies: ["Website", "Agency", "UI/UX", "Landing Page"],
      link: "https://www.behance.net/gallery/225239897/Digital-Agency-Website-UIUX-Design",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Hotel Booking App",
      description: "User-friendly hotel booking mobile application design with seamless booking flow.",
      technologies: ["Mobile App", "Booking", "Travel", "UI/UX"],
      link: "https://www.behance.net/gallery/225917459/Hotel-Booking-App-Design",
      gradient: "from-teal-500 to-cyan-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-balance"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <AnimatedCard key={project.title} className="h-full">
              <div className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-xl h-full overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ x: 4 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      View on Behance
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
