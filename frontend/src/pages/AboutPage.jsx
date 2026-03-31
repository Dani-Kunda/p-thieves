import React from 'react';
import { Heart, Target, Users, Zap } from 'lucide-react';

/* ============================================
   ABOUT PAGE - Persona 5 Royal Theme
   ============================================
   
   USER CONTENT SECTIONS:
   1. Hero section title and text
   2. Story paragraphs
   3. Feature cards content
   4. Quote section
   
   ============================================ */

const AboutPage = () => {
  /* ----------------------------------------
     USER CONTENT: Feature cards data
     Edit the title, description, and icon for each feature
     ---------------------------------------- */
  const features = [
    {
      icon: Heart,
      title: 'STEAL HEARTS',
      // USER CONTENT: Edit description
      description: 'Change the hearts of corrupt adults by stealing their distorted desires from the Metaverse.',
    },
    {
      icon: Target,
      title: 'INFILTRATE PALACES',
      // USER CONTENT: Edit description
      description: 'Navigate through elaborate palaces formed from the twisted desires of your targets.',
    },
    {
      icon: Users,
      title: 'BUILD BONDS',
      // USER CONTENT: Edit description
      description: 'Form unbreakable connections with confidants to unlock new abilities and personas.',
    },
    {
      icon: Zap,
      title: 'AWAKEN PERSONAS',
      // USER CONTENT: Edit description
      description: 'Summon powerful Personas in battle, manifestations of your rebellious spirit.',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20" data-testid="about-page">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 clip-diagonal bg-[#0a0a0a]" data-testid="about-hero">
        <div className="max-w-5xl mx-auto text-center">
          {/* USER CONTENT: Edit main title */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-widest text-white mb-6">
            THE PHANTOM <span className="text-[#E0000F]">THIEVES</span>
          </h1>
          {/* USER CONTENT: Edit subtitle */}
          <p className="font-body text-xl text-[#B3B3B3] max-w-3xl mx-auto">
            A group of high school students who awaken to their power and decide to reform society by stealing the corrupt hearts of adults.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#E0000F]/30 -rotate-12" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#E0000F]/30 rotate-12" />
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" data-testid="story-section">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Red accent bar */}
            <div className="hidden md:block md:col-span-1">
              <div className="w-1 h-full bg-[#E0000F]" />
            </div>

            {/* Content */}
            <div className="md:col-span-11 space-y-8">
              {/* USER CONTENT: Edit story paragraphs */}
              <div className="animate-fade-up">
                <h2 className="font-heading text-3xl sm:text-4xl tracking-wider text-[#E0000F] mb-4">
                  THE STORY
                </h2>
                <p className="font-body text-[#B3B3B3] text-lg leading-relaxed">
                  {/* USER CONTENT: Edit this paragraph */}
                  Persona 5 Royal follows the story of a high school student who transfers to Shujin Academy in Tokyo after being falsely accused of assault. Shortly after arriving, he discovers a mysterious app on his phone that transports him to an alternate reality known as the Metaverse.
                </p>
              </div>

              <div className="animate-fade-up animation-delay-200">
                <p className="font-body text-[#B3B3B3] text-lg leading-relaxed">
                  {/* USER CONTENT: Edit this paragraph */}
                  In this cognitive world, he awakens to a power known as "Persona" – a manifestation of his rebellious spirit. Together with newfound allies, he forms the Phantom Thieves of Hearts, a vigilante group dedicated to reforming society by stealing the distorted desires of corrupt adults.
                </p>
              </div>

              <div className="animate-fade-up animation-delay-300">
                <p className="font-body text-[#B3B3B3] text-lg leading-relaxed">
                  {/* USER CONTENT: Edit this paragraph */}
                  Persona 5 Royal expands upon the original story with a brand-new semester, a new playable character named Kasumi Yoshizawa, and the mysterious counselor Takuto Maruki. Experience deeper story content, new locations, and enhanced gameplay mechanics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#E0000F] clip-diagonal-reverse" data-testid="quote-section">
        <div className="max-w-4xl mx-auto text-center py-8">
          {/* USER CONTENT: Edit quote */}
          <blockquote className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-wider text-white leading-tight">
            "YOU'LL NEVER SEE IT COMING"
          </blockquote>
          <cite className="block mt-6 font-body text-black/80 text-lg">
            {/* USER CONTENT: Edit quote attribution */}
            — Last Surprise, Persona 5 OST
          </cite>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="features-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-white text-center mb-16">
            CORE <span className="text-[#E0000F]">GAMEPLAY</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p5-card p-8 group"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`feature-card-${index}`}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-[#E0000F]/10 border border-[#E0000F] group-hover:bg-[#E0000F] transition-colors">
                    <feature.icon size={32} className="text-[#E0000F] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl tracking-wider text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-body text-[#B3B3B3]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Additions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]" data-testid="royal-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-white mb-4">
              NEW IN <span className="text-[#E0000F]">ROYAL</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* USER CONTENT: Edit Royal features list */}
            {[
              { title: 'NEW SEMESTER', desc: 'Experience an entirely new story arc in the third semester' },
              { title: 'KASUMI YOSHIZAWA', desc: 'A new playable character with her own unique Persona' },
              { title: 'GRAPPLING HOOK', desc: 'New traversal mechanics for palace infiltration' },
              { title: 'SHOWTIME ATTACKS', desc: 'Powerful new team-up attacks between party members' },
              { title: 'THIEVES DEN', desc: 'A new hub area to view achievements and awards' },
              { title: 'ENHANCED GRAPHICS', desc: 'Improved visuals and performance across the board' },
            ].map((item, index) => (
              <div 
                key={index}
                className="border border-[#333333] hover:border-[#E0000F] p-6 transition-colors"
                data-testid={`royal-feature-${index}`}
              >
                <h3 className="font-heading text-xl tracking-wider text-[#E0000F] mb-2">
                  {/* USER CONTENT: Edit title */}
                  {item.title}
                </h3>
                <p className="font-body text-[#B3B3B3] text-sm">
                  {/* USER CONTENT: Edit description */}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

/* ============================================
   ABOUT PAGE CUSTOMIZATION GUIDE
   ============================================
   
   EDITABLE SECTIONS:
   
   1. HERO TITLE (Line ~45)
      - Edit the main "THE PHANTOM THIEVES" title
   
   2. STORY PARAGRAPHS (Lines ~70-100)
      - Three paragraphs describing the game's story
      - Edit each paragraph to match your content
   
   3. QUOTE SECTION (Line ~110)
      - Change the featured quote and attribution
   
   4. FEATURES ARRAY (Lines ~20-40)
      - Edit title and description for each feature card
      - Change icons by importing from lucide-react
   
   5. ROYAL FEATURES LIST (Lines ~150-165)
      - Array of new features in Persona 5 Royal
      - Edit titles and descriptions
   
   ============================================ */
