"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedCard } from "./aceternity/animated-card"
import Image from "next/image"

type Category = "all" | "case-study" | "website" | "mobile-app" | "branding" | "graphic"

interface Project {
  title: string
  category: Category[]
  link: string
  gradient: string
  thumbnail: string
}

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "case-study", label: "Case Studies" },
    { id: "website", label: "Website Design" },
    { id: "mobile-app", label: "Mobile App" },
    { id: "branding", label: "Logo & Branding" },
    { id: "graphic", label: "Graphic Design" },
  ]

  const projects: Project[] = [
    // Case Studies

// components/projects.tsx (projects array এর মধ্যে যেকোনো স্থানে যোগ করো)
{
  title: "Case Study - Smart Home Gardening Website UI/UX Design",
  description: "Case study on Home Gardening Website.",
  technologies: ["UI/UX", "Figma", "Case Study"],
  link: "https://www.behance.net/gallery/240844389/Case-Study-Smart-Home-Gardening-Website-UIUX-Design", // আপনার link দিন বা '#' রাখো
  gradient: "from-emerald-500 to-lime-400",
  thumbnail: "/images/projects/gardening.jpg",
},





    {
      title: "Case Study on CellFusion Smartphone Selling App",
      category: ["case-study", "mobile-app"],
      link: "https://www.behance.net/gallery/180700151/Case-Study-on-CellFusion-Smartphone-Selling-App",
      gradient: "from-blue-500 to-cyan-500",
      thumbnail: "/images/projects/cellfusion.png",
    },
    {
      title: "UI/UX Case Study - London City Dashboard Redesign",
      category: ["case-study", "website"],
      link: "https://www.behance.net/gallery/181376677/UIUX-Case-Study-London-City-Dashboard-Redesign",
      gradient: "from-purple-500 to-pink-500",
      thumbnail: "/images/projects/london-dashboard.png",
    },
    {
      title: "Case Study - Shiritori Game Mobile Website Redesign",
      category: ["case-study", "website"],
      link: "https://www.behance.net/gallery/195349155/Case-study-Shiritori-Game-Mobile-Website-Redesign",
      gradient: "from-green-500 to-teal-500",
      thumbnail: "/images/projects/shiritori.png",
    },
    // Website Design
    {
      title: "Modern Website UI/UX Design - CryptoPulse",
      category: ["website"],
      link: "https://www.behance.net/gallery/230183039/Modern-Website-UIUX-Design-CryptoPulse",
      gradient: "from-amber-500 to-orange-500",
      thumbnail: "/images/projects/cryptopulse.png",
    },
    {
      title: "IT Consultancy and Services Website Design",
      category: ["website"],
      link: "https://www.behance.net/gallery/189887559/IT-Consultancy-and-Services-website-design",
      gradient: "from-indigo-500 to-blue-500",
      thumbnail: "/it-consultancy-website-blue-professional.jpg",
    },
    {
      title: "E-commerce Website UI/UX Design",
      category: ["website"],
      link: "https://www.behance.net/gallery/194089307/E-commerce-Website-UIUX-Design",
      gradient: "from-rose-500 to-pink-500",
      thumbnail: "/ecommerce-shopping-website-pink-modern.jpg",
    },
    {
      title: "Modern E-commerce Website for Modif",
      category: ["website"],
      link: "https://www.behance.net/gallery/207953699/Modern-e-commerce-website-for-Modif",
      gradient: "from-cyan-500 to-blue-500",
      thumbnail: "/modif-fashion-ecommerce-website-cyan.jpg",
    },
    {
      title: "Digital Agency Website UI/UX Design",
      category: ["website"],
      link: "https://www.behance.net/gallery/225239897/Digital-Agency-Website-UIUX-Design",
      gradient: "from-violet-500 to-purple-500",
      thumbnail: "/digital-agency-website-purple-creative.jpg",
    },
    {
      title: "NFT Selling Landing Page Design",
      category: ["website"],
      link: "https://www.behance.net/gallery/185858887/NFT-Selling-Landing-Page-Design",
      gradient: "from-emerald-500 to-teal-500",
      thumbnail: "/nft-marketplace-landing-page-dark-teal.jpg",
    },
    // Mobile App Design
    {
      title: "Spatial UI Design - Spotify",
      category: ["mobile-app"],
      link: "https://www.behance.net/gallery/232449931/Spatial-UI-Design-Spotify",
      gradient: "from-green-500 to-emerald-500",
      thumbnail: "/images/projects/spatial-ui.png",
    },
    {
      title: "FitTrack - A Smart Fitness App with Light & Dark Mode",
      category: ["mobile-app"],
      link: "https://www.behance.net/gallery/231695063/FitTrack-A-Smart-Fitness-App-with-Light-Dark-Mode",
      gradient: "from-orange-500 to-red-500",
      thumbnail: "/images/projects/fittrack.png",
    },
    {
      title: "Tramedi Mobile App UI UX Design",
      category: ["mobile-app"],
      link: "https://www.behance.net/gallery/210767311/Tramedi-Mobile-App-UI-UX-Design",
      gradient: "from-blue-500 to-indigo-500",
      thumbnail: "/images/projects/tramedi.png",
    },
    {
      title: "OTT Platform Mobile App UI Design",
      category: ["mobile-app"],
      link: "https://www.behance.net/gallery/185537843/OTT-Platform-Mobile-App-UI-Design",
      gradient: "from-red-500 to-rose-500",
      thumbnail: "/ott-streaming-app-dark-entertainment.jpg",
    },
    {
      title: "AR Watch Selling App UI Design",
      category: ["mobile-app"],
      link: "https://www.behance.net/gallery/185165365/AR-Watch-Selling-App-UI-Design",
      gradient: "from-slate-500 to-zinc-500",
      thumbnail: "/ar-watch-app-dark-luxury.jpg",
    },
    {
      title: "Hotel Booking App Design",
      category: ["mobile-app"],
      link: "https://www.behance.net/gallery/225917459/Hotel-Booking-App-Design",
      gradient: "from-teal-500 to-cyan-500",
      thumbnail: "/hotel-booking-travel-app-teal.jpg",
    },
    // Logo & Branding
    {
      title: "Modern Logo Design - SNIPIXEL",
      category: ["branding"],
      link: "https://www.behance.net/gallery/228830319/Modern-Logo-Design-SNIPIXEL",
      gradient: "from-fuchsia-500 to-pink-500",
      thumbnail: "/snipixel-modern-logo-pink-branding.jpg",
    },
    {
      title: "E-Radhuni - Crafting Bold Logo & Brand Identity Design",
      category: ["branding"],
      link: "https://www.behance.net/gallery/232737775/E-Radhuni-Crafting-Bold-Logo-Brand-Identity-Design",
      gradient: "from-amber-500 to-yellow-500",
      thumbnail: "/e-radhuni-logo-brand-identity-amber.jpg",
    },
    {
      title: "Logo and Branding Design - Softsource",
      category: ["branding"],
      link: "https://www.behance.net/gallery/231295551/Logo-and-Branding-Design-Softsource",
      gradient: "from-sky-500 to-blue-500",
      thumbnail: "/softsource-logo-branding-blue-tech.jpg",
    },
    // Graphic Design
    {
      title: "Clickbait Youtube Thumbnail Design Projects",
      category: ["graphic"],
      link: "https://www.behance.net/gallery/169223335/Clickbait-Youtube-Thumbnail-Design-Projects",
      gradient: "from-red-500 to-orange-500",
      thumbnail: "/youtube-thumbnail-clickbait-red-orange.jpg",
    },
    {
      title: "Social Media Post Design",
      category: ["graphic"],
      link: "https://www.behance.net/gallery/171087759/Social-Media-Post-Design",
      gradient: "from-pink-500 to-rose-500",
      thumbnail: "/social-media-post-design-pink.jpg",
    },
    {
      title: "Sports Social Media Designs",
      category: ["graphic"],
      link: "https://www.behance.net/gallery/165334259/Sports-Social-Media-Designs",
      gradient: "from-green-500 to-lime-500",
      thumbnail: "/sports-social-media-design-green.jpg",
    },
    {
      title: "YouTube Thumbnail Design",
      category: ["graphic"],
      link: "https://www.behance.net/gallery/228486395/YouTube-Thumbnail-Design",
      gradient: "from-red-600 to-red-400",
      thumbnail: "/youtube-thumbnail-design-red.jpg",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((p) => p.category.includes(activeCategory))

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">Case Studies & Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of UI/UX designs, mobile apps, websites, branding, and graphic design projects.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Updated to show thumbnail images */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedCard className="h-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-xl h-full flex flex-col overflow-hidden"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-full aspect-[3/2] overflow-hidden">
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                      />
                    </div>
                    {/* Content */}
                    <div className="relative z-10 p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-sm mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="mt-auto flex items-center gap-2 text-xs font-medium text-primary">
                        <span>View on Behance</span>
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </AnimatedCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.behance.net/SaimonHossen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-full font-medium hover:opacity-90 transition-opacity text-white"
          >
            View All Projects on Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
