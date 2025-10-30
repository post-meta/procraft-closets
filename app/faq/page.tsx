import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - ProCraft Closets | Seattle Custom Closet Questions Answered',
  description: 'Get answers to frequently asked questions about ProCraft Closets custom closet design, installation, pricing, and services in Seattle, WA. Expert closet solutions explained.',
  keywords: 'ProCraft Closets FAQ, Seattle closet questions, custom closet pricing, closet installation process, closet design Seattle, walk-in closets FAQ',
  openGraph: {
    title: 'ProCraft Closets FAQ - Seattle Custom Closet Experts',
    description: 'Find answers to common questions about custom closet design, installation, and services in Seattle. Expert guidance from ProCraft Closets.',
    url: 'https://procraftclosets.com/faq',
    siteName: 'ProCraft Closets',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://procraftclosets.com/faq',
  },
};

interface FAQItem {
  question: string;
  answer: string;
  category: 'services' | 'pricing' | 'process' | 'areas' | 'qualifications' | 'guarantees';
}

const faqData: FAQItem[] = [
  {
    question: "What services does ProCraft Closets offer in Seattle?",
    answer: "ProCraft Closets offers comprehensive custom closet solutions including walk-in closet design, reach-in closet organization, pantry systems, garage storage, home office organization, and mudroom solutions. We provide complete design consultation, 3D rendering, custom manufacturing, and professional installation throughout the Seattle area.",
    category: "services"
  },
  {
    question: "How much does a custom closet cost in Seattle?",
    answer: "Custom closet pricing in Seattle typically ranges from $1,200 to $8,000 depending on size, materials, and complexity. Walk-in closets average $3,000-$6,000, while reach-in closets range from $1,200-$3,500. We provide free consultations and detailed quotes to match your budget and needs.",
    category: "pricing"
  },
  {
    question: "What is the process for getting a custom closet from ProCraft?",
    answer: "Our process begins with a free in-home consultation where we assess your space and discuss your needs. Next, we create a custom design with 3D renderings for your approval. After design approval, we manufacture your closet system and schedule professional installation. The entire process typically takes 3-4 weeks from design approval to completion.",
    category: "process"
  },
  {
    question: "Which areas in Seattle do you serve?",
    answer: "ProCraft Closets serves all of Seattle and surrounding areas including Bellevue, Redmond, Kirkland, Bothell, Lynnwood, Edmonds, Shoreline, Renton, Kent, Federal Way, Tacoma, and the entire Puget Sound region. We travel up to 50 miles from Seattle for closet installations.",
    category: "areas"
  },
  {
    question: "What qualifications do your installers have?",
    answer: "All ProCraft Closets installers are licensed, bonded, and insured professionals with extensive experience in custom closet installation. Our team undergoes continuous training on the latest installation techniques and safety protocols. We maintain full liability insurance and worker's compensation coverage for your protection.",
    category: "qualifications"
  },
  {
    question: "Do you offer warranties on your closet systems?",
    answer: "Yes, ProCraft Closets provides a comprehensive lifetime warranty on all hardware and a 10-year warranty on materials and craftsmanship. We also offer a 2-year warranty on installation workmanship. If any issues arise, we'll address them promptly at no additional cost to you.",
    category: "guarantees"
  },
  {
    question: "How long does it take to design and install a custom closet?",
    answer: "The typical timeline is 3-4 weeks total. Design consultation and approval takes 1-2 weeks, manufacturing takes 2-3 weeks, and installation is completed in 1-2 days. Rush orders can be accommodated for an additional fee, potentially reducing the timeline to 2-3 weeks.",
    category: "process"
  },
  {
    question: "Can you work with existing closet spaces or do you need to start from scratch?",
    answer: "We can work with any existing closet space, regardless of size or current condition. Whether you want to maximize a small reach-in closet or completely redesign a large walk-in space, our designers create solutions that optimize your existing footprint while incorporating your storage needs.",
    category: "services"
  },
  {
    question: "What materials do you use for custom closets?",
    answer: "ProCraft Closets uses high-quality materials including solid wood, engineered wood, melamine, and premium hardware. We offer various finishes including painted, stained, and laminated options. All materials are sourced from reputable suppliers and chosen for durability, functionality, and aesthetic appeal.",
    category: "services"
  },
  {
    question: "Is there a minimum project size or cost?",
    answer: "While we don't have a strict minimum project size, most of our custom closet projects start around $1,200. We work with various budgets and can suggest cost-effective solutions for smaller spaces. Even small reach-in closets can benefit significantly from professional organization systems.",
    category: "pricing"
  },
  {
    question: "Do you provide free estimates for closet projects?",
    answer: "Absolutely! ProCraft Closets provides completely free in-home consultations and estimates throughout the Seattle area. During this visit, we'll assess your space, discuss your needs, take measurements, and provide a detailed quote with no obligation to purchase.",
    category: "pricing"
  },
  {
    question: "Can you help with closet organization and space planning?",
    answer: "Yes, our professional designers specialize in space optimization and organization solutions. We analyze your wardrobe, storage habits, and lifestyle to create custom layouts that maximize efficiency and functionality. This includes specialized storage for shoes, accessories, folded items, and hanging garments.",
    category: "services"
  },
  {
    question: "What makes ProCraft Closets different from other Seattle closet companies?",
    answer: "ProCraft Closets stands out through our commitment to quality craftsmanship, personalized service, and local expertise. We're a Seattle-based company that understands local home styles and needs. Our team provides end-to-end service from design through installation, backed by comprehensive warranties and ongoing support.",
    category: "qualifications"
  },
  {
    question: "Do you install closet systems in condos and apartments?",
    answer: "Yes, we install custom closet systems in condos, apartments, townhomes, and single-family homes throughout Seattle. We work with property managers when necessary and can design systems that comply with rental agreements or HOA requirements while maximizing your storage potential.",
    category: "areas"
  },
  {
    question: "Can you match existing woodwork or finishes in my home?",
    answer: "Absolutely! Our designers work to complement your existing home décor and can match wood stains, paint colors, and hardware finishes. We bring samples during consultation to ensure perfect coordination with your current interior design and architectural features.",
    category: "services"
  },
  {
    question: "What happens if I need changes after installation?",
    answer: "ProCraft Closets stands behind our work with comprehensive post-installation support. Minor adjustments are included in our service, and we can accommodate larger modifications or additions as your needs change. Our modular systems are designed to be adaptable and expandable over time.",
    category: "guarantees"
  },
  {
    question: "Do you offer financing options for closet projects?",
    answer: "Yes, we offer flexible financing options to make your dream closet affordable. We work with several financing partners to provide competitive rates and terms. Many projects qualify for 0% interest for qualified buyers, with various payment plans available to suit different budgets.",
    category: "pricing"
  },
  {
    question: "How do I prepare my closet space before installation?",
    answer: "We'll provide a detailed preparation checklist before installation day. Generally, you'll need to remove all items from the closet space and ensure clear access to the area. Our team handles any necessary removal of existing shelving or fixtures as part of the installation process.",
    category: "process"
  },
  {
    question: "Can you design closets for children's rooms?",
    answer: "Yes! ProCraft Closets designs age-appropriate storage solutions for children of all ages. We create systems with adjustable components that grow with your child, incorporating easy-to-reach storage, specialized compartments for toys and clothes, and safety features appropriate for young users.",
    category: "services"
  },
  {
    question: "Do you work on closets in older Seattle homes?",
    answer: "Absolutely! Seattle's older homes often have unique architectural features and space constraints that our experienced designers know how to work with. We're skilled at maximizing storage in vintage homes while respecting their character and dealing with non-standard dimensions or structural elements.",
    category: "areas"
  },
  {
    question: "What if my closet has unusual dimensions or obstacles?",
    answer: "Our designers excel at working with challenging spaces including sloped ceilings, awkward angles, plumbing, electrical fixtures, and HVAC components. We create custom solutions that work around obstacles while maximizing every inch of available storage space in your unique closet area.",
    category: "services"
  },
  {
    question: "How do you handle permits for closet installations?",
    answer: "Most closet installations don't require permits since we're not doing structural modifications. However, if your project involves electrical work or structural changes, ProCraft Closets will handle all necessary permit applications and ensure compliance with Seattle building codes and regulations.",
    category: "qualifications"
  },
  {
    question: "Can you install lighting in my closet system?",
    answer: "Yes, we can incorporate various lighting solutions including LED strips, puck lights, and motion-activated systems. We work with licensed electricians when needed and can integrate lighting seamlessly into your closet design for optimal visibility and ambiance.",
    category: "services"
  },
  {
    question: "What is included in your lifetime hardware warranty?",
    answer: "Our lifetime warranty covers all drawer slides, hinges, handles, brackets, and other mechanical components. If any hardware fails or wears out during normal use, we'll replace it at no charge. This warranty is transferable to new homeowners if you sell your property.",
    category: "guarantees"
  },
  {
    question: "Do you offer seasonal maintenance for closet systems?",
    answer: "While our quality systems require minimal maintenance, we do offer optional annual check-ups and adjustments. We also provide guidance on proper care and cleaning of your closet system to ensure it maintains its beauty and functionality for years to come.",
    category: "guarantees"
  },
  {
    question: "Can you design walk-in closets for master bedrooms?",
    answer: "Absolutely! Master bedroom walk-in closets are one of our specialties. We design luxurious, spa-like spaces with specialized storage for different garment types, accessories, shoes, and personal items. Features can include islands, seating areas, full-length mirrors, and premium finishes.",
    category: "services"
  },
  {
    question: "How far in advance should I schedule my closet project?",
    answer: "We recommend scheduling 4-6 weeks in advance, especially during busy seasons like spring and early summer. However, we can often accommodate rush projects with shorter timelines. Contact us as early as possible to secure your preferred installation dates.",
    category: "process"
  },
  {
    question: "Do you provide 3D renderings of the proposed closet design?",
    answer: "Yes! Every ProCraft Closets project includes detailed 3D renderings so you can visualize your new closet before installation. These realistic images show exact layouts, finishes, and configurations, allowing you to make informed decisions and request any modifications to the design.",
    category: "process"
  },
  {
    question: "What payment methods do you accept?",
    answer: "ProCraft Closets accepts various payment methods including cash, check, major credit cards, and financing options. We typically require a deposit to begin manufacturing, with final payment due upon completion. We'll discuss payment schedules during your consultation to find what works best for you.",
    category: "pricing"
  },
  {
    question: "Are your installers employees or subcontractors?",
    answer: "Our installation teams are fully trained employees of ProCraft Closets, not subcontractors. This ensures consistent quality, accountability, and adherence to our high standards. All installers are background-checked, insured, and committed to delivering exceptional workmanship and customer service.",
    category: "qualifications"
  },
  {
    question: "Can you work around my schedule for installation?",
    answer: "Yes, we strive to accommodate our clients' schedules. We offer flexible installation times including evenings and weekends when possible. Most installations are completed in 1-2 days, and we'll work with you to minimize disruption to your daily routine.",
    category: "process"
  },
  {
    question: "Do you install closet systems in new construction homes?",
    answer: "Absolutely! ProCraft Closets works with homeowners, builders, and contractors on new construction projects throughout Seattle. We can coordinate with construction schedules and work directly with your builder to ensure seamless integration of your closet systems into your new home.",
    category: "services"
  },
  {
    question: "What if I'm not satisfied with my completed closet?",
    answer: "Customer satisfaction is our top priority. If you're not completely satisfied with your closet system, we'll work with you to address any concerns and make necessary adjustments. Our goal is to exceed your expectations, and we stand behind our work with comprehensive guarantees.",
    category: "guarantees"
  },
  {
    question: "Can you design closets that accommodate wheelchairs or mobility aids?",
    answer: "Yes, ProCraft Closets designs ADA-compliant and mobility-friendly closet systems. We create solutions with appropriate heights, clearances, and easy-access features to accommodate wheelchairs, walkers, and other mobility aids while maintaining full functionality and style.",
    category: "services"
  },
  {
    question: "Do you offer eco-friendly or sustainable closet materials?",
    answer: "Yes, we offer several eco-friendly options including sustainably sourced wood, low-VOC finishes, and recycled content materials. We can discuss green building options during your consultation and recommend environmentally responsible choices that meet your sustainability goals.",
    category: "services"
  },
  {
    question: "How do you handle dust and debris during installation?",
    answer: "Our professional installers use dust containment measures and clean up thoroughly after each day's work. We protect surrounding areas with plastic sheeting and use dust collection equipment when cutting or sanding. Your home will be left clean and ready to use.",
    category: "process"
  },
  {
    question: "Can you add shoe storage and accessories organization to existing closets?",
    answer: "Absolutely! We can retrofit existing closets with specialized shoe storage, accessory drawers, jewelry organization, and other custom features. This is a cost-effective way to dramatically improve your closet's functionality without a complete redesign.",
    category: "services"
  },
  {
    question: "What training do your designers receive?",
    answer: "Our designers are certified professionals with extensive training in space planning, ergonomics, and organizational psychology. They stay current with industry trends, attend continuing education programs, and regularly update their skills in design software and installation techniques.",
    category: "qualifications"
  },
  {
    question: "Do you provide references from previous Seattle customers?",
    answer: "Yes, we're happy to provide references from satisfied customers throughout the Seattle area. We also have an extensive portfolio of completed projects, online reviews, and testimonials that demonstrate our commitment to quality and customer satisfaction.",
    category: "qualifications"
  },
  {
    question: "What happens if there's damage during installation?",
    answer: "ProCraft Closets carries comprehensive liability insurance that covers any accidental damage during installation. In the unlikely event that damage occurs, we handle all repairs or replacements promptly and at no cost to you. Our experienced installers take great care to protect your home.",
    category: "guarantees"
  }
];

const categories =