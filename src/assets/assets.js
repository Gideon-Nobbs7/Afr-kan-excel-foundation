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
}


export const projectsData = [
  {
    id: "community-health-outreach-kumasi",
    title: "Community Health Outreach - Kumasi",
    date: "Jun 2024",
    location: "Kumasi, Ghana",
    description: "Mobile clinics providing basic health screenings and health education to remote communities.",
    image: afkr2,
 
    // ── Extra detail fields ──
    fullDescription: `In June 2024, our team deployed mobile health clinics across five remote communities in the Ashanti Region. Over 600 residents received free health screenings including blood pressure checks, malaria testing, and nutritional assessments. Community health volunteers were also trained to sustain basic care long after our visit.`,
    impact: [
      "600+ residents screened",
      "5 communities reached",
      "30 health volunteers trained",
      "200 malaria test kits distributed",
    ],
    gallery: [afkr2],  // add more images here as needed
    category: "Health",
    status: "Completed",
  },
  {
    id: "youth-entrepreneurship-workshop",
    title: "Youth Entrepreneurship Workshop",
    date: "Sep 2024",
    location: "Accra, Ghana",
    description: "Training sessions and mentorship for young entrepreneurs to build sustainable small businesses.",
    image: afkr3,
 
    fullDescription: `Our Youth Entrepreneurship Workshop in Accra brought together 80 young people aged 18–30 for an intensive three-day programme. Participants learned business planning, financial literacy, and digital marketing skills. Ten selected participants received seed funding and ongoing mentorship to launch their ventures.`,
    impact: [
      "80 young entrepreneurs trained",
      "3-day intensive programme",
      "10 businesses received seed funding",
      "Ongoing mentorship for all graduates",
    ],
    gallery: [afkr3],
    category: "Education",
    status: "Completed",
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
    status: "Completed",
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
    status: "Completed",
  },
];

export const testimonialsData = [
  {
    name: "Amina Owusu",
    title: "Community Leader",
    image: afkr8,
    alt: "Portrait of Amina Owusu",
    rating: 5,
    text: "The foundation's team worked closely with our community to deliver sustainable solutions. Their support has been transformational."
  },
  {
    name: "Kwame Mensah",
    title: "Teacher",
    image: afkr9,
    alt: "Portrait of Kwame Mensah",
    rating: 5,
    text: "Their school renovation project gave our students a safe and inspiring place to learn. We are very grateful."
  },
  {
    name: "Alhassan Abdul",
    title: "Small Business Owner",
    image: afkr10,
    alt: "Portrait of Alhassan Abdul",
    rating: 5,
    text: "After the entrepreneurship workshops I received mentorship and seed funding that helped me grow my business."
  }
];