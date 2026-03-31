import logo from './logo.jpg'
import logo2 from './logo-rbg.png'
import favicon from './favicon.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import brand_img from './brand_img.png'
import afkr2 from './afkr2.jpg'
import afkr3 from './afkr3.jpg'
import afkr4 from './afkr4.jpg'
import afkr5 from './afkr5.jpg'
import afkr6 from './afkr6.jpg'
import afkr7 from './afkr7.jpg'
import afkr8 from './afkr8.jpg'
import afkr9 from './afkr9.jpg'
import afkr10 from './afkr10.jpg'
import agileCommunity from './agile-community.jpg'
import communityIntelligence from './community-intelligence.jpg'
import manifestoMovement from './manifesto-movement.jpg'
import josephBandoh from './joseph-bandoh-knust-basic-school.jpg'
import opokuPeprah from './opoku-peprah-head-bosomtwe.jpg'
import richObeng from './past-rich-obeng.jpg'
import supiirElisha from './supiir-elisha-commonwealth.jpg'


export const assets = {
  logo,
  logo2,
  favicon,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  brand_img,
  left_arrow,
  right_arrow,
  afkr2,
  afkr3,
  afkr4,
  afkr5,
  afkr6,
  afkr7,
  afkr8,
  afkr9,
  afkr10,
  agileCommunity,
  communityIntelligence,
  manifestoMovement,
  josephBandoh,
  opokuPeprah,
  richObeng,
  supiirElisha


  
  
}


export const projectsData = [
  {
    id: "the-foundation-solidarity",
    title: "The Foundation of Solidarity",
    date: "2022-2024",
    location: "Kumasi, Ghana",
    description: "Providing immediate support to those in need. We focused on being present.",
    image: afkr2,
 
    // ── Extra detail fields ──
    fullDescription: `We established a deep, personal presence in five local areas in Accra -Ghana( Hobor, Akutuase, Adator, Addyman and Odenkey) building friendships that still exist today. We Directly supported over 95 people with essential resources, food and solidarity.`,
    impact: [
      "95+ Individuals",
      "5 communities reached"
    ],
    gallery: [afkr2,],   // add more images here as needed
    category: "Philantropy",
    status: "",
  },
  {
    id: "my-manifesto-movement",
    title: "The 'My Manifesto' Movement",
    date: "2025",
    location: "Ashanti, Ghana",
    description: "Training 3,000+ youth in Civic Responsibility, Cultural Intelligence (CQ), and Leadership.",
    image: manifestoMovement,
 
    fullDescription: `Training 3,000+ youth in Civic Responsibility, Cultural Intelligence (CQ), and Leadership. Transitioning youth from passive beneficiaries to High-Integrity Stewards of their communities.`,
    impact: [
      "Training 3,000+ youth in Civic Responsibility",
      "Cultural Intelligence (CQ)",
      "Leadership",
    ],
    gallery: [afkr3],
    category: "Sanitation",
    status: "",
  },
  {
    id: "school-renovation-supplies-drive",
    title: "School Renovation & Supplies Drive",
    date: "Dec 2023",
    location: "Tamale, Ghana",
    description: "Renovated classrooms and delivered learning materials to improve study conditions for students.",
    image: afkr4,
 
    fullDescription: `In December 2023, volunteers renovated four classrooms at a primary school in Tamale, repainting walls, fixing roofing, and installing new furniture. Over 500 sets of learning materials including textbooks, exercise books, and stationery were donated to students across three grade levels.`,
    impact: [
      "4 classrooms fully renovated",
      "500+ students received supplies",
      "3 grade levels covered",
      "20 volunteers participated",
    ],
    gallery: [afkr4],
    category: "Education",
    status: "",
  },
  {
    id: "the-community-intelligence",
    title: "The Community Intelligence (2026)",
    date: "Dec 2023",
    location: "Ashanti, Ghana",
    description: "Data research and report on Cultural Intelligence & Youth Agency .We believe that a lasting impact is built on trust, data and coordinated action",
    image: communityIntelligence,
 
    fullDescription: `The GWILAY Initiative: A deep-dive Research and Report into Social Capital. By mapping what our communities value and love about one another, we are creating a new "Data Currency" for impact that recognises indigenous identity`,
    impact: [
      "Providing Cultural Intelligence ",
      "creation of a new Data Currency",
      "A deep-dive Research",
      "Data research and report ",
    ],
    gallery: [afkr4],
    category: "Data Research",
    status: "",
  },
];

export const testimonialsData = [
  {
    name: "Mr. Opoku Peprah",
    title: "HEADMASTER - BOSOMTWE OYOKO SENIOR HIGH SCHOOL",
    image: opokuPeprah,
    alt: "Portrait of Mr. Opoku Peprah",
    rating: 5,
    text: "As a former District Chief Executive(DCE) , I've seen many youth groups come and go. AERF is different. They don't just show up when there's a problem; they build the skills to prevent one. When they visited my school, I saw a spark ignite in my students that every community needs. Without a second thought, I believe AERF deserves the investment to scale this impact"
  },
  {
    name: "Ing. Richard Obeng",
    title: "HEADPASTOR AND FOUNDER OF GLORY INTERCONTINENTAL CHURCH",
    image: richObeng,
    alt: "Portrait of Ing. Richard Obeng",
    rating: 5,
    text: "It was an honor to chair the AERF launching ceremony. What struck me wasn't just the energy in the room, but the sheer discipline of the team. This is an institution built to last, and I am proud to stand behind their mission"
  },
  {
    name: "Mr. Joseph Bandoh",
    title: "TUTOR - KNUST BASIC SCHOOL",
    image: josephBandoh,
    alt: "Portrait of Mr. Joseph Bandoh",
    rating: 5,
    text: "After the entrepreneurship workshops I received mentorship and seed funding that helped me grow my business."
  },
  {
    name: "Npoangnan Supiir Elisha",
    title: "CHAIRPERSON, COMMONWEALTH- YOUTH LEADERSHIP AND CAPACITY SUBCOMMITTEE.",
    image: supiirElisha,
    alt: "Portrait Supiir Elisha",
    rating: 5,
    text: "I've sat on their panels twice, and here's the truth: while everyone else is still debating, these guys are out there doing it. If you want to see what real youth leadership looks like in practice, this is it."
  },
  {
    name: "ELLEN AGYEMANG",
    title: "HIGH SCHOOL STUDENT",
    // image: supiirElisha,
    alt: "Portrait of Ellen Agyemang",
    rating: 5,
    text: "Before AERF came to my school, I thought leadership was only for people with titles or big offices. They showed me that if I see a problem in my community, I don't have to wait for anyone, I can start fixing it myself. They gave us the confidence to actually lead. Now, I’m not just waiting for the future anymore"
  }
];