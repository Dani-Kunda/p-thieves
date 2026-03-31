import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ChevronRight, Skull } from 'lucide-react';

/* ============================================
   HOME PAGE - Persona 5 Royal Theme
   ============================================
   
   USER CONTENT SECTIONS:
   1. BANNER IMAGE (Image 2) - Line ~45
   2. MAIN FEATURE IMAGE (Image 4) with red box - Line ~95
   3. YOUTUBE VIDEO - Line ~130
   4. Hero text and descriptions
   
   ============================================ */

const HomePage = () => {
  /* ----------------------------------------
     USER CONTENT: YouTube Video ID
     Replace with actual Persona 5 gameplay/trailer video ID
     Example: For https://youtube.com/watch?v=QnsdmZJLCWk
     Use just: QnsdmZJLCWk
     ---------------------------------------- */
  const youtubeVideoId = 'QnsdmZJLCWk'; // USER CONTENT: Replace with Persona 5 trailer/gameplay video ID

  return (
    <div className="min-h-screen bg-black" data-testid="home-page">
      {/* ============================================
          HERO SECTION WITH BANNER
          USER CONTENT: Replace banner image URL (Image 2)
          ============================================ */}
      <section className="relative h-screen" data-testid="hero-section">
        {/* Banner Image Container */}
        <div className="absolute inset-0">
          {/* 
            =============================================
            USER CONTENT: BANNER IMAGE (Image 2)
            Replace the src URL below with your Image 2
            Recommended: 1920x1080 or higher resolution
            =============================================
          */}
          <img
            src="https://images.unsplash.com/photo-1646651024829-454814d2fb62?crop=entropy&cs=srgb&fm=jpg&w=1920"
            alt="Persona 5 Royal Banner"
            className="w-full h-full object-cover"
            data-testid="hero-banner-image"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          {/* Red accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E0000F]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            {/* USER CONTENT: Edit main title */}
            <h1 
              className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-widest text-white mb-4 glitch-text"
              data-text="PERSONA 5"
              data-testid="hero-title"
            >
              PERSONA 5
            </h1>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wider text-[#E0000F]">
              ROYAL
            </h2>
          </div>
          
          {/* USER CONTENT: Edit tagline */}
          <p className="mt-8 font-body text-lg sm:text-xl text-[#B3B3B3] max-w-2xl animate-fade-up animation-delay-200">
            Wear the mask. Find your justice.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Link
              to="/characters"
              className="btn-skew bg-[#E0000F] hover:bg-white hover:text-black px-8 py-4 font-heading text-xl tracking-wider transition-colors"
              data-testid="cta-characters"
            >
              <span className="flex items-center gap-2">
                MEET THE THIEVES <ChevronRight size={20} />
              </span>
            </Link>
            <Link
              to="/products"
              className="btn-skew border-2 border-white hover:border-[#E0000F] hover:bg-[#E0000F] px-8 py-4 font-heading text-xl tracking-wider transition-colors"
              data-testid="cta-products"
            >
              <span>VIEW MERCH</span>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-[#E0000F] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED IMAGE SECTION WITH RED BOX (Image 4)
          USER CONTENT: Replace feature image URL
          ============================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative halftone" data-testid="feature-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image with Red Box Overlay */}
            <div className="relative" data-testid="feature-image-container">
              {/* 
                =============================================
                USER CONTENT: MAIN FEATURE IMAGE (Image 4)
                Replace the src URL below with your Image 4
                This image will have a red box overlay
                =============================================
              */}
              <img
                src="https://images.unsplash.com/photo-1552298048-702bc534e0d4?crop=entropy&cs=srgb&fm=jpg&w=800"
                alt="Phantom Thieves Feature"
                className="w-full h-auto"
                data-testid="feature-image"
              />
              {/* Red Box Overlay - as requested */}
              <div 
                className="absolute inset-4 sm:inset-6 border-4 border-[#E0000F] bg-[#E0000F]/20 pointer-events-none"
                data-testid="red-box-overlay"
              />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#E0000F]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#E0000F]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#E0000F]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#E0000F]" />
            </div>

            {/* Content */}
            <div>
              {/* USER CONTENT: Edit this section title and text */}
              <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-white mb-6">
                TAKE YOUR <span className="text-[#E0000F]">HEART</span>
              </h2>
              <p className="font-body text-[#B3B3B3] text-lg leading-relaxed mb-8">
                {/* USER CONTENT: Edit description text */}
                Don the mask of Joker and join the Phantom Thieves of Hearts as they stage 
                grand heists, infiltrate the palaces of the corrupt, and make them confess 
                their sins. With an all-new semester, new characters, and additional story 
                content, Persona 5 Royal delivers an experience unlike any other.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-heading text-xl tracking-wider text-[#E0000F] hover:text-white transition-colors group"
                data-testid="learn-more-link"
              >
                <Skull className="group-hover:rotate-12 transition-transform" size={24} />
                LEARN MORE
                <ChevronRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="diagonal-divider" />

      {/* ============================================
          VIDEO SECTION
          USER CONTENT: Update YouTube video ID above
          ============================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]" data-testid="video-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {/* USER CONTENT: Edit section title */}
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-white mb-4">
              WITNESS THE <span className="text-[#E0000F]">REBELLION</span>
            </h2>
            <p className="font-body text-[#B3B3B3] text-lg">
              {/* USER CONTENT: Edit video section description */}
              Watch Persona 5 Royal in action
            </p>
          </div>

          {/* Video Embed */}
          <div className="video-container pulse-red" data-testid="video-container">
            {/* 
              =============================================
              USER CONTENT: YouTube Video Embed
              The video ID is set in the youtubeVideoId variable at the top
              Change that variable to update the video
              =============================================
            */}
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Persona 5 Royal Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              data-testid="youtube-iframe"
            />
          </div>

          {/* Play button decoration */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3 text-[#666666]">
              <Play size={16} className="text-[#E0000F]" />
              <span className="font-body text-sm">Official Persona 5 Royal Content</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="quick-links-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Characters Card */}
            <Link 
              to="/characters" 
              className="p5-card p-8 group"
              data-testid="quick-link-characters"
            >
              <h3 className="font-heading text-2xl tracking-wider text-[#E0000F] mb-4 group-hover:text-white transition-colors">
                CHARACTERS & PERSONAS
              </h3>
              <p className="font-body text-[#B3B3B3] mb-4">
                {/* USER CONTENT: Edit card description */}
                Meet the Phantom Thieves and discover their Personas
              </p>
              <span className="inline-flex items-center gap-2 font-heading tracking-wider text-white group-hover:text-[#E0000F] transition-colors">
                EXPLORE <ChevronRight size={18} />
              </span>
            </Link>

            {/* Products Card */}
            <Link 
              to="/products" 
              className="p5-card p-8 group"
              data-testid="quick-link-products"
            >
              <h3 className="font-heading text-2xl tracking-wider text-[#E0000F] mb-4 group-hover:text-white transition-colors">
                MERCHANDISE
              </h3>
              <p className="font-body text-[#B3B3B3] mb-4">
                {/* USER CONTENT: Edit card description */}
                Official Phantom Thieves gear and collectibles
              </p>
              <span className="inline-flex items-center gap-2 font-heading tracking-wider text-white group-hover:text-[#E0000F] transition-colors">
                SHOP NOW <ChevronRight size={18} />
              </span>
            </Link>

            {/* About Card */}
            <Link 
              to="/about" 
              className="p5-card p-8 group"
              data-testid="quick-link-about"
            >
              <h3 className="font-heading text-2xl tracking-wider text-[#E0000F] mb-4 group-hover:text-white transition-colors">
                THE STORY
              </h3>
              <p className="font-body text-[#B3B3B3] mb-4">
                {/* USER CONTENT: Edit card description */}
                Learn about the Phantom Thieves' mission
              </p>
              <span className="inline-flex items-center gap-2 font-heading tracking-wider text-white group-hover:text-[#E0000F] transition-colors">
                DISCOVER <ChevronRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

/* ============================================
   HOME PAGE CUSTOMIZATION GUIDE
   ============================================
   
   IMAGE REPLACEMENTS:
   
   1. BANNER IMAGE (Image 2) - Line ~45
      - Find: src="https://images.unsplash.com/..."
      - Replace with your Image 2 URL
      - Recommended size: 1920x1080 or larger
   
   2. FEATURE IMAGE (Image 4) - Line ~110
      - Find: src="https://images.unsplash.com/..."
      - Replace with your Image 4 URL
      - This will have the red box overlay
   
   3. YOUTUBE VIDEO - Variable at top
      - Find: const youtubeVideoId = '...'
      - Replace with your video ID
      - Get ID from YouTube URL: youtube.com/watch?v=VIDEO_ID
   
   TEXT CONTENT:
   - Search for "USER CONTENT:" comments to find editable text
   - Edit hero titles, descriptions, and card text as needed
   
   ============================================ */
