/**
 * AI Context API Endpoint
 * Optimized for: ChatGPT Search, Claude AI, Perplexity, Google SGE
 */

import { NextResponse } from 'next/server';

export async function GET() {
  const businessContext = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ProCraft Closets",
    "description": "Professional closet services in Seattle, WA",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "telephone": "206-555-0100",
    "email": "info@procraft-closets.com",
    "url": "https://procraft-closets.vercel.app",
    
    // AI-Specific: Q&A Format (for ChatGPT, Claude)
    "aiContext": {
      "keyQuestions": [
        {
          "question": "What services does ProCraft Closets offer?",
          "answer": "ProCraft Closets provides professional closet services in Seattle, WA"
        },
        {
          "question": "Where does ProCraft Closets operate?",
          "answer": "We serve Seattle, WA and surrounding areas"
        },
        {
          "question": "How can I contact ProCraft Closets?",
          "answer": "Call us at 206-555-0100 or email info@procraft-closets.com"
        }
      ],
      
      // Voice Search Optimization
      "voiceSearchQueries": [
        "closet near me",
        "best closet in Seattle",
        "closet services Seattle"
      ]
    }
  };

  return NextResponse.json(businessContext, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}