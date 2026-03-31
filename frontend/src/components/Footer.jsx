import React from 'react';
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Music, 
  Gamepad2,
  ExternalLink 
} from 'lucide-react';

/* ============================================
   FOOTER COMPONENT - Persona 5 Royal Theme
   ============================================
   
   USER CONTENT SECTIONS:
   1. Social Media Links - Update URLs for Atlus accounts
   2. Discord Server Links - Add your Discord invite URLs
   3. Spotify Soundtrack Link - Update with official link
   4. Game Purchase Links - Update store URLs
   
   ============================================ */

const Footer = () => {
  /* ----------------------------------------
     USER CONTENT: Update Atlus Social Media URLs
     Replace the '#' placeholders with actual URLs
     ---------------------------------------- */
  const socialLinks = [
    { 
      name: 'Twitter/X', 
      icon: Twitter, 
      url: '#', // USER CONTENT: Replace with Atlus Twitter URL (e.g., https://twitter.com/Atlus_West)
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: '#', // USER CONTENT: Replace with Atlus Instagram URL
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: '#', // USER CONTENT: Replace with Atlus YouTube URL (e.g., https://youtube.com/@AtlusUSA)
    },
  ];

  /* ----------------------------------------
     USER CONTENT: Update Discord Server URLs
     Add your Discord invite links here
     ---------------------------------------- */
  const discordLinks = [
    { 
      name: 'Official Persona Discord', 
      url: '#', // USER CONTENT: Replace with official Discord invite link
    },
    { 
      name: 'Phantom Thieves Community', 
      url: '#', // USER CONTENT: Replace with community Discord invite link
    },
  ];

  /* ----------------------------------------
     USER CONTENT: Update Spotify Soundtrack URL
     ---------------------------------------- */
  const spotifyLink = '#'; // USER CONTENT: Replace with Persona 5 Royal OST Spotify link

  /* ----------------------------------------
     USER CONTENT: Update Game Purchase URLs
     Replace '#' with actual store URLs
     ---------------------------------------- */
  const purchaseLinks = [
    { 
      name: 'PlayStation Store', 
      platform: 'PS4/PS5',
      url: '#', // USER CONTENT: PlayStation Store URL
    },
    { 
      name: 'Xbox Store', 
      platform: 'Xbox',
      url: '#', // USER CONTENT: Xbox Store URL
    },
    { 
      name: 'Nintendo eShop', 
      platform: 'Switch',
      url: '#', // USER CONTENT: Nintendo eShop URL
    },
    { 
      name: 'Steam', 
      platform: 'PC',
      url: '#', // USER CONTENT: Steam Store URL
    },
  ];

  return (
    <footer 
      className="footer-diagonal bg-[#0a0a0a] pt-24 pb-12 mt-20 relative"
      data-testid="main-footer"
    >
      {/* Halftone overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(circle, #E0000F 1px, transparent 1px)',
             backgroundSize: '10px 10px'
           }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Social Media Section */}
          <div>
            <h3 className="font-heading text-2xl tracking-wider text-[#E0000F] mb-6">
              FOLLOW ATLUS
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#B3B3B3] hover:text-white transition-colors duration-150 group"
                  data-testid={`social-link-${social.name.toLowerCase().replace('/', '-')}`}
                >
                  <social.icon 
                    size={20} 
                    className="group-hover:text-[#E0000F] transition-colors" 
                  />
                  <span className="font-body">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Discord Section */}
          <div>
            <h3 className="font-heading text-2xl tracking-wider text-[#E0000F] mb-6">
              DISCORD
            </h3>
            <div className="flex flex-col gap-4">
              {discordLinks.map((discord) => (
                <a
                  key={discord.name}
                  href={discord.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#B3B3B3] hover:text-white transition-colors duration-150 group"
                  data-testid={`discord-link-${discord.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <MessageCircle 
                    size={20} 
                    className="group-hover:text-[#E0000F] transition-colors" 
                  />
                  <span className="font-body">{discord.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Soundtrack Section */}
          <div>
            <h3 className="font-heading text-2xl tracking-wider text-[#E0000F] mb-6">
              SOUNDTRACK
            </h3>
            <a
              href={spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] text-black px-6 py-3 font-heading tracking-wider transition-all duration-150 hover:scale-105"
              data-testid="spotify-link"
            >
              <Music size={20} />
              <span>LISTEN ON SPOTIFY</span>
              <ExternalLink size={16} />
            </a>
            <p className="mt-4 text-[#666666] text-sm font-body">
              {/* USER CONTENT: Add description about the soundtrack */}
              Experience the award-winning Persona 5 Royal Original Soundtrack
            </p>
          </div>

          {/* Purchase Links Section */}
          <div>
            <h3 className="font-heading text-2xl tracking-wider text-[#E0000F] mb-6">
              BUY THE GAME
            </h3>
            <div className="flex flex-col gap-3">
              {purchaseLinks.map((purchase) => (
                <a
                  key={purchase.name}
                  href={purchase.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-link text-white hover:text-black font-heading tracking-wider text-sm"
                  data-testid={`purchase-link-${purchase.platform.toLowerCase().replace(/\//g, '-')}`}
                >
                  <Gamepad2 size={18} />
                  <span>{purchase.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E0000F] to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-heading text-xl tracking-widest">
            PHANTOM<span className="text-[#E0000F]">THIEVES</span>
          </div>
          
          {/* Copyright - USER CONTENT: Update copyright info */}
          <p className="text-[#666666] text-sm font-body text-center">
            {/* USER CONTENT: Update copyright and disclaimer */}
            Fan-made website. Persona 5 Royal © ATLUS. © SEGA. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-skew bg-[#E0000F] hover:bg-white hover:text-black px-4 py-2 font-heading tracking-wider transition-colors"
            data-testid="back-to-top-btn"
          >
            <span>BACK TO TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ============================================
   FOOTER CUSTOMIZATION GUIDE
   ============================================
   
   To update the footer content:
   
   1. SOCIAL MEDIA (socialLinks array):
      - Twitter: https://twitter.com/Atlus_West
      - Instagram: https://instagram.com/atlus_usa
      - YouTube: https://youtube.com/@AtlusUSA
   
   2. DISCORD (discordLinks array):
      - Add your Discord server invite links
      - Format: https://discord.gg/YOUR_INVITE_CODE
   
   3. SPOTIFY (spotifyLink variable):
      - Persona 5 Royal OST: Add official Spotify album link
   
   4. GAME STORES (purchaseLinks array):
      - PlayStation: https://store.playstation.com/...
      - Xbox: https://xbox.com/games/store/...
      - Nintendo: https://nintendo.com/store/...
      - Steam: https://store.steampowered.com/app/...
   
   ============================================ */
