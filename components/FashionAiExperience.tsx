import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const sections = [
  {
    include: true,
    title: 'The Future of Personalized Shopping',
    content: [
      'A paradigm shift from static websites to dynamic, conversational experiences.',
      'Traditional navigation is replaced by natural language interaction.',
      'Every user journey becomes unique, contextual, and guided by AI.',
      'Product discovery is no longer a click-based funnel, but a dialogue.',
      'The storefront becomes invisible — what remains is the brand experience.',
      'From website to conversation. From customer to co-creator.'
    ]
  },
  {
    include: true,
    title: 'Vision',
    content: [
      'No more pages – only conversations',
      'No more navigation – just interaction',
      'AI-powered experience, tailored in real time'
    ]
  },
  {
    include: true,
    title: 'Solution Architecture',
    content: [
      'Frontend: Next.js + Tailwind – fast and chat-centric',
      'AI backend: GPT-4 / Claude for intent & response generation',
      'Shopify Storefront API: real-time product data',
      'Live RAG (Retrieval Augmented Generation) from API',
      'Optional: Klaviyo, wishlist, AI-driven cart'
    ]
  },
  {
    include: true,
    title: 'User-AI Flow',
    content: [
      "1. User says: 'I need a formal outfit for a July wedding in Sicily'",
      '2. AI extracts context (season, event, location)',
      '3. Dynamic query to Shopify API for matching products',
      '4. AI generates tailored response with product visuals',
      '5. User can refine, add to cart, or ask follow-ups'
    ]
  },
  {
    include: true,
    title: 'Conversational UI',
    content: [
      'Minimalist mobile-first layout',
      'AI assistant always visible in the experience',
      'Product suggestions appear dynamically',
      'No static pages, only interactive blocks'
    ]
  },
  {
    include: true,
    title: 'Business Value',
    content: [
      '+ Higher conversions and AOV',
      '+ Fully personalized shopping experience',
      '− Reduced support costs thanks to AI assistant',
      '+ UX + AI fully controlled by the brand'
    ]
  },
  {
    include: true,
    title: 'Tech Stack',
    content: [
      'Frontend: Next.js, Tailwind CSS, Vercel AI SDK',
      'AI: GPT-4 / Claude + dynamic RAG system',
      'Catalog: Shopify Storefront API (GraphQL)',
      'Storage: Supabase / Redis',
      'Optional: Klaviyo, Stripe, CDN image delivery'
    ]
  },
  {
    include: false,
    title: 'Roadmap',
    content: [
      'Week 1: MVP frontend + AI + Shopify API integration',
      'Week 2: Dynamic RAG + outfit suggestion logic',
      'Week 3: User login + AI-driven cart',
      'Week 4: UX polish, testing, launch'
    ]
  },
  {
    include: true,
    title: 'Expected KPIs & Sources',
    content: [
      '+20% Conversion uplift – AI-driven stores → https://dragonflyai.co/...',
      '1.7× higher CR in marketing – Personalized experiences → https://www.salesforce.com',
      '−30% Customer support cost – AI chatbots → https://www.ibm.com',
      '2.5 billion hours saved – Chatbot automation → https://www.businessinsider.com',
      '2× Engagement rate – AI personalization → https://venturebeat.com'
    ]
  }
];

export default function FashionAiExperience() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-8 flex flex-col items-center">
        <nav className="w-full flex flex-wrap justify-center gap-4 mb-6">
          {sections.filter(section => section.include).map((section, i) => (
            <button
              key={section.title}
              onClick={() => setIndex(i)}
              className={`px-3 py-1 rounded text-sm md:text-base transition ${
                index === i
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
              }`}
            >
              {section.title.split(' ')[0]}
            </button>
          ))}
        </nav>
        <div
          key={index}
          className="w-full max-w-4xl text-center animate-fade-in"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {sections[index].title}
          </h1>
          <Card className="bg-neutral-900 border border-neutral-700">
            <CardContent className="p-6 space-y-3">
              {sections[index].content.map((line, i) => (
                <p key={i} className="text-base md:text-lg text-neutral-300">
                  {line}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="flex gap-4 mt-8">
          <Button
            variant="secondary"
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
          >
            Back
          </Button>
          <Button
            onClick={() =>
              setIndex((i) => Math.min(i + 1, sections.length - 1))
            }
            disabled={index === sections.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}