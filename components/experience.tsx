"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Graphic Designer",
      company: "MODIF BD",
      period: "May 2024 – Present",
      location: "Bangladesh",
      highlights: [
        "Creating visual designs and brand assets for various projects",
        "Designing marketing materials, social media graphics, and promotional content",
        "Collaborating with teams to deliver consistent brand identity",
        "Producing high-quality designs using Adobe Illustrator and Photoshop",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "Makeup Coders",
      type: "Contractual",
      period: "August 2022 – Present",
      location: "Bangladesh",
      highlights: [
        "Designing user interfaces for web and mobile applications",
        "Conducting UX research and creating user flows and wireframes",
        "Building design systems and prototypes in Figma",
        "Collaborating with developers to ensure seamless implementation",
      ],
    },
    {
      title: "UI/UX & Graphic Designer",
      company: "Freelance",
      period: "2021 – Present",
      location: "Bangladesh",
      highlights: [
        "Designing mobile apps, websites, and landing pages for diverse clients",
        "Creating brand identities, logos, and social media designs",
        "Conducting UX research and usability testing for optimal user experiences",
        "Delivering pixel-perfect designs using Figma, Adobe XD, and Photoshop",
      ],
    },
  ]

  const education = [
    {
      title: "B.Sc in CSE",
      institution: "Port City International University",
      period: "Completed",
      location: "Bangladesh",
    },
    {
      title: "Google UX Design Certificate",
      institution: "Coursera",
      period: "Completed",
      location: "Online",
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                whileHover={{ paddingLeft: 32 }}
              >
                <motion.div
                  className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    {exp.type && <p className="font-medium text-muted-foreground">{exp.type}</p>}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold mb-6 text-balance flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education & Certification
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-bold text-foreground mb-1">{edu.title}</h4>
              <p className="text-primary text-sm font-medium mb-2">{edu.institution}</p>
              <p className="text-xs text-muted-foreground">{edu.location}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
