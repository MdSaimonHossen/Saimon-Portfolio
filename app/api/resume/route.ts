import { NextResponse } from "next/server"

export async function GET() {
  try {
    const resumeContent = `
MD SAIMON HOSSEN
UI/UX Designer | Visual Designer
WhatsApp: +880 1874460944 | Bangladesh

SUMMARY
Passionate UI/UX and Graphic designer with over 3 years of experience in the creative industry. I specialize in crafting visually engaging and user-friendly digital experiences using tools like Figma, Adobe XD, Adobe Illustrator, and Adobe Photoshop. My design journey is fueled by a passion for problem-solving, ensuring that each project I undertake is not just visually appealing but also user-centric.

SKILLS

UI Design:
- Mobile App Design
- Website Design
- Landing Page Design
- Design System
- Typography
- Color Theory
- Responsive Design

UX Design:
- UX Research
- Competitive Analysis
- Usability Testing
- User Flow
- Wireframing
- Prototyping

Graphic Design:
- Logo Design
- Social Media Design
- Thumbnail Design
- Branding Design

Tools:
- Figma
- Adobe XD
- Adobe Illustrator
- Adobe Photoshop

EXPERIENCE

UI/UX & Graphic Designer | Freelance
2021 – Present | Bangladesh
• Designing mobile apps, websites, and landing pages for diverse clients
• Creating brand identities, logos, and social media designs
• Conducting UX research and usability testing for optimal user experiences
• Delivering pixel-perfect designs using Figma, Adobe XD, and Photoshop

UI/UX Designer | Dynamic Companies
2022 – Present | Remote
• Contributing to a wide range of digital design solutions
• Understanding user needs and turning them into intuitive interfaces
• Creating design systems for consistency across products
• Collaborating with development teams for seamless implementation

FEATURED PROJECTS

• CellFusion Smartphone Selling App - Case study on mobile app design
• London City Dashboard Redesign - UI/UX case study
• CryptoPulse Website Design - Modern cryptocurrency platform
• FitTrack Fitness App - Smart fitness app with light & dark mode
• Digital Agency Website - Complete UI/UX design
• Hotel Booking App - User-friendly booking application

EDUCATION

B.Sc in CSE
Port City International University | Bangladesh

Google UX Design Certificate
Coursera | Online

PORTFOLIO
Behance: behance.net/mdsaimonhossen
Website: sites.google.com/view/saimonhossen
    `

    const headers = new Headers()
    headers.set("Content-Type", "text/plain; charset=utf-8")
    headers.set("Content-Disposition", 'https://drive.google.com/file/d/1XQrVvVKVM9kk37X-8cdChYKdqjyseelP/view"')

    return new NextResponse(resumeContent, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error generating resume:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
