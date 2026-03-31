import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ScrollArea } from '../components/ui/scroll-area';
import { Star, Shield, Sword, Zap } from 'lucide-react';

/* ============================================
   CHARACTERS & PERSONAS PAGE - Persona 5 Royal Theme
   ============================================
   
   USER CONTENT SECTIONS:
   1. Characters array - All playable characters info
   2. Personas array - Collectible Personas info
   
   ============================================ */

const CharactersPage = () => {
  /* ----------------------------------------
     USER CONTENT: Character Data
     Edit each character's information
     
     For each character:
     - id: Unique identifier
     - name: Character's real name
     - codename: Phantom Thief codename
     - image: URL to character image/portrait
     - persona: Name of their initial Persona
     - personaImage: URL to Persona image
     - description: Character background
     - arcana: Tarot arcana
     - howToRecruit: How to unlock/recruit (for party members)
     ---------------------------------------- */
  const characters = [
    {
      id: 1,
      name: 'Ren Amamiya',
      codename: 'JOKER',
      // USER CONTENT: Replace with character image URL
      image: 'https://images.pexels.com/photos/34062274/pexels-photo-34062274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
      persona: 'Arsène',
      // USER CONTENT: Replace with Persona image URL
      personaImage: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=300',
      // USER CONTENT: Edit description
      description: 'The protagonist and leader of the Phantom Thieves. A transfer student with a criminal record who awakens to the power of Persona.',
      arcana: 'Fool',
      // USER CONTENT: Edit recruitment info
      howToRecruit: 'Main protagonist - available from start',
    },
    {
      id: 2,
      name: 'Ryuji Sakamoto',
      codename: 'SKULL',
      // USER CONTENT: Replace with character image URL
      image: 'https://images.pexels.com/photos/34062274/pexels-photo-34062274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
      persona: 'Captain Kidd',
      // USER CONTENT: Replace with Persona image URL
      personaImage: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=300',
      // USER CONTENT: Edit description
      description: 'A former track star with a rebellious spirit. One of Joker\'s first allies and the team\'s physical powerhouse.',
      arcana: 'Chariot',
      // USER CONTENT: Edit recruitment info
      howToRecruit: 'Joins automatically during Kamoshida\'s Palace arc',
    },
    {
      id: 3,
      name: 'Ann Takamaki',
      codename: 'PANTHER',
      // USER CONTENT: Replace with character image URL
      image: 'https://images.pexels.com/photos/34062274/pexels-photo-34062274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
      persona: 'Carmen',
      // USER CONTENT: Replace with Persona image URL
      personaImage: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=300',
      // USER CONTENT: Edit description
      description: 'A quarter-American student known for her beauty. Joins the Phantom Thieves to seek justice for her friend.',
      arcana: 'Lovers',
      // USER CONTENT: Edit recruitment info
      howToRecruit: 'Joins automatically during Kamoshida\'s Palace arc',
    },
    {
      id: 4,
      name: 'Yusuke Kitagawa',
      codename: 'FOX',
      // USER CONTENT: Replace with character image URL
      image: 'https://images.pexels.com/photos/34062274/pexels-photo-34062274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
      persona: 'Goemon',
      // USER CONTENT: Replace with Persona image URL
      personaImage: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=300',
      // USER CONTENT: Edit description
      description: 'An eccentric art student from Kosei High School. His refined aesthetic extends to his elegant combat style.',
      arcana: 'Emperor',
      // USER CONTENT: Edit recruitment info
      howToRecruit: 'Joins automatically during Madarame\'s Palace arc',
    },
    {
      id: 5,
      name: 'Makoto Niijima',
      codename: 'QUEEN',
      // USER CONTENT: Replace with character image URL
      image: 'https://images.pexels.com/photos/34062274/pexels-photo-34062274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
      persona: 'Johanna',
      // USER CONTENT: Replace with Persona image URL
      personaImage: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=300',
      // USER CONTENT: Edit description
      description: 'Student council president of Shujin Academy. A genius strategist who becomes the team\'s advisor.',
      arcana: 'Priestess',
      // USER CONTENT: Edit recruitment info
      howToRecruit: 'Joins automatically during Kaneshiro\'s Palace arc',
    },
    {
      id: 6,
      name: 'Futaba Sakura',
      codename: 'ORACLE',
      // USER CONTENT: Replace with character image URL
      image: 'https://images.pexels.com/photos/34062274/pexels-photo-34062274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
      persona: 'Necronomicon',
      // USER CONTENT: Replace with Persona image URL
      personaImage: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=300',
      // USER CONTENT: Edit description
      description: 'A genius hacker and shut-in who serves as the team\'s navigator and tech support.',
      arcana: 'Hermit',
      // USER CONTENT: Edit recruitment info
      howToRecruit: 'Joins automatically after completing Futaba\'s Palace',
    },
    {
      id: 7,
      name: 'Haru Okumura',
      codename: 'NOIR',
      // USER CONTENT: Replace with character image URL
      image: 'https://images.pexels.com/photos/34062274/pexels-photo-34062274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
      persona: 'Milady',
      // USER CONTENT: Replace with Persona image URL
      personaImage: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=300',
      // USER CONTENT: Edit description
      description: 'The heiress to Okumura Foods. Despite her gentle demeanor, she fights with devastating power.',
      arcana: 'Empress',
      // USER CONTENT: Edit recruitment info
      howToRecruit: 'Joins during Okumura\'s Palace arc',
    },
    {
      id: 8,
      name: 'Kasumi Yoshizawa',
      codename: 'VIOLET',
      // USER CONTENT: Replace with character image URL
      image: 'https://images.pexels.com/photos/34062274/pexels-photo-34062274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
      persona: 'Cendrillon',
      // USER CONTENT: Replace with Persona image URL
      personaImage: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=300',
      // USER CONTENT: Edit description
      description: 'A talented gymnast and new character exclusive to Persona 5 Royal. Her graceful style hides a powerful fighter.',
      arcana: 'Faith',
      // USER CONTENT: Edit recruitment info
      howToRecruit: 'Royal exclusive - joins in the third semester',
    },
    {
      id: 9,
      name: 'Goro Akechi',
      codename: 'CROW',
      // USER CONTENT: Replace with character image URL
      image: 'https://images.pexels.com/photos/34062274/pexels-photo-34062274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400',
      persona: 'Robin Hood / Loki',
      // USER CONTENT: Replace with Persona image URL
      personaImage: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=300',
      // USER CONTENT: Edit description
      description: 'A famous teenage detective known as the "Detective Prince". His true nature is more complex than it appears.',
      arcana: 'Justice',
      // USER CONTENT: Edit recruitment info
      howToRecruit: 'Temporarily joins during Sae\'s Palace. Full party member in Royal third semester.',
    },
  ];

  /* ----------------------------------------
     USER CONTENT: Collectible Personas Data
     Edit Persona information for collection guide
     
     For each Persona:
     - id: Unique identifier
     - name: Persona name
     - arcana: Tarot arcana
     - image: URL to Persona image
     - level: Base level
     - skills: Array of notable skills
     - howToObtain: How to acquire this Persona
     ---------------------------------------- */
  const personas = [
    {
      id: 1,
      name: 'Arsène',
      arcana: 'Fool',
      // USER CONTENT: Replace with Persona image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=200',
      level: 1,
      // USER CONTENT: Edit skills
      skills: ['Eiha', 'Cleave', 'Sukunda', 'Dream Needle'],
      // USER CONTENT: Edit how to obtain
      howToObtain: 'Protagonist\'s initial Persona - obtained automatically at start',
    },
    {
      id: 2,
      name: 'Satanael',
      arcana: 'Fool',
      // USER CONTENT: Replace with Persona image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=200',
      level: 95,
      // USER CONTENT: Edit skills
      skills: ['Sinful Shell', 'Maeigaon', 'Megidolaon', 'Riot Gun'],
      // USER CONTENT: Edit how to obtain
      howToObtain: 'NG+ only. Fuse using Arsène, Anzu, Ishtar, Satan, Lucifer, and Michael.',
    },
    {
      id: 3,
      name: 'Yoshitsune',
      arcana: 'Tower',
      // USER CONTENT: Replace with Persona image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=200',
      level: 87,
      // USER CONTENT: Edit skills
      skills: ['Hassou Tobi', 'Brave Blade', 'Charge', 'Arms Master'],
      // USER CONTENT: Edit how to obtain
      howToObtain: 'Advanced fusion. Requires: Shiki-Ouji, Arahabaki, Yatagarasu, Okuninushi, and Futsunushi.',
    },
    {
      id: 4,
      name: 'Alice',
      arcana: 'Death',
      // USER CONTENT: Replace with Persona image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=200',
      level: 83,
      // USER CONTENT: Edit skills
      skills: ['Die For Me!', 'Maeigaon', 'Megidolaon', 'Concentrate'],
      // USER CONTENT: Edit how to obtain
      howToObtain: 'Fuse using Nebiros and Belial.',
    },
    {
      id: 5,
      name: 'Izanagi-no-Okami',
      arcana: 'World',
      // USER CONTENT: Replace with Persona image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=200',
      level: 80,
      // USER CONTENT: Edit skills
      skills: ['Myriad Truths', 'Victory Cry', 'Angelic Grace', 'Heat Riser'],
      // USER CONTENT: Edit how to obtain
      howToObtain: 'DLC Persona - available through Persona 5 Royal DLC pack',
    },
    {
      id: 6,
      name: 'Maria',
      arcana: 'Faith',
      // USER CONTENT: Replace with Persona image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=200',
      level: 93,
      // USER CONTENT: Edit skills
      skills: ['Holy Embrace', 'Salvation', 'Heat Riser', 'Absorb Curse'],
      // USER CONTENT: Edit how to obtain
      howToObtain: 'Royal exclusive. Max Faith Arcana, then fuse in third semester.',
    },
    {
      id: 7,
      name: 'Kaguya',
      arcana: 'Moon',
      // USER CONTENT: Replace with Persona image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=200',
      level: 16,
      // USER CONTENT: Edit skills
      skills: ['Shining Arrows', 'Mediarama', 'Divine Grace', 'Repel Phys'],
      // USER CONTENT: Edit how to obtain
      howToObtain: 'DLC Persona - available through Persona 4 Golden DLC',
    },
    {
      id: 8,
      name: 'Raoul',
      arcana: 'Fool',
      // USER CONTENT: Replace with Persona image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=200',
      level: 76,
      // USER CONTENT: Edit skills
      skills: ['Phantom Show', 'Eigaon', 'Ali Dance', 'Concentrate'],
      // USER CONTENT: Edit how to obtain
      howToObtain: 'Royal exclusive. Available after 11/24 by evolving Arsène with third-tier awakening.',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20" data-testid="characters-page">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative" data-testid="characters-hero">
        <div className="max-w-5xl mx-auto text-center">
          {/* USER CONTENT: Edit page title */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-widest text-white mb-4">
            CHARACTERS & <span className="text-[#E0000F]">PERSONAS</span>
          </h1>
          {/* USER CONTENT: Edit subtitle */}
          <p className="font-body text-lg text-[#B3B3B3] max-w-2xl mx-auto">
            Meet the Phantom Thieves and discover the Personas you can collect
          </p>
        </div>

        {/* Decorative skull icon */}
        <div className="absolute top-8 right-8 opacity-10">
          <div className="w-32 h-32 border-4 border-[#E0000F] transform rotate-12" />
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" data-testid="tabs-section">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="characters" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-12 bg-[#121212] border border-[#333333] p-1">
              <TabsTrigger 
                value="characters" 
                className="flex-1 font-heading tracking-wider data-[state=active]:bg-[#E0000F] data-[state=active]:text-white"
                data-testid="tab-characters"
              >
                CHARACTERS
              </TabsTrigger>
              <TabsTrigger 
                value="personas" 
                className="flex-1 font-heading tracking-wider data-[state=active]:bg-[#E0000F] data-[state=active]:text-white"
                data-testid="tab-personas"
              >
                PERSONAS
              </TabsTrigger>
            </TabsList>

            {/* Characters Tab */}
            <TabsContent value="characters" data-testid="characters-content">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {characters.map((character, index) => (
                  <div 
                    key={character.id}
                    className="character-card overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                    data-testid={`character-card-${character.id}`}
                  >
                    {/* Character Image */}
                    <div className="relative h-64 overflow-hidden">
                      {/* 
                        =============================================
                        USER CONTENT: Character Image
                        Replace the image URL in the characters array above
                        =============================================
                      */}
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Codename overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <span className="font-heading text-3xl tracking-widest text-[#E0000F]">
                          {character.codename}
                        </span>
                      </div>
                      {/* Arcana badge */}
                      <div className="absolute top-3 right-3">
                        <span className="collection-badge text-xs">
                          <span>{character.arcana}</span>
                        </span>
                      </div>
                    </div>

                    {/* Character Info */}
                    <div className="p-6">
                      <h3 className="font-heading text-2xl tracking-wider text-white mb-2">
                        {/* USER CONTENT: Character name from array */}
                        {character.name}
                      </h3>
                      <p className="font-body text-[#B3B3B3] text-sm mb-4">
                        {/* USER CONTENT: Character description from array */}
                        {character.description}
                      </p>
                      
                      {/* Persona info */}
                      <div className="border-t border-[#333333] pt-4 mt-4">
                        <div className="flex items-center gap-3">
                          <Zap size={16} className="text-[#E0000F]" />
                          <span className="font-heading tracking-wider text-white">
                            PERSONA: {character.persona}
                          </span>
                        </div>
                      </div>

                      {/* How to recruit */}
                      <div className="mt-4 p-3 bg-[#1a1a1a] border-l-2 border-[#E0000F]">
                        <span className="font-heading text-xs tracking-wider text-[#666666]">
                          HOW TO RECRUIT:
                        </span>
                        <p className="font-body text-sm text-[#B3B3B3] mt-1">
                          {/* USER CONTENT: Recruitment info from array */}
                          {character.howToRecruit}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Personas Tab */}
            <TabsContent value="personas" data-testid="personas-content">
              <ScrollArea className="h-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {personas.map((persona, index) => (
                    <div 
                      key={persona.id}
                      className="p5-card p-5"
                      style={{ animationDelay: `${index * 50}ms` }}
                      data-testid={`persona-card-${persona.id}`}
                    >
                      {/* Persona Image */}
                      <div className="relative aspect-square mb-4 overflow-hidden border border-[#333333]">
                        {/* 
                          =============================================
                          USER CONTENT: Persona Image
                          Replace the image URL in the personas array above
                          =============================================
                        */}
                        <img
                          src={persona.image}
                          alt={persona.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Level badge */}
                        <div className="absolute top-2 left-2 bg-black/80 px-2 py-1">
                          <span className="font-heading text-sm text-[#E0000F]">
                            LV.{persona.level}
                          </span>
                        </div>
                      </div>

                      {/* Persona Info */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-heading text-xl tracking-wider text-white">
                            {/* USER CONTENT: Persona name from array */}
                            {persona.name}
                          </h3>
                          <span className="text-xs font-heading text-[#666666]">
                            {persona.arcana}
                          </span>
                        </div>

                        {/* Skills */}
                        <div>
                          <span className="font-heading text-xs tracking-wider text-[#666666]">
                            NOTABLE SKILLS:
                          </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {persona.skills.slice(0, 3).map((skill, i) => (
                              <span 
                                key={i}
                                className="text-xs bg-[#1a1a1a] text-[#B3B3B3] px-2 py-1"
                              >
                                {/* USER CONTENT: Skills from array */}
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* How to obtain */}
                        <div className="border-t border-[#222222] pt-3">
                          <div className="flex items-start gap-2">
                            <Star size={14} className="text-[#E0000F] mt-0.5 flex-shrink-0" />
                            <p className="font-body text-xs text-[#B3B3B3]">
                              {/* USER CONTENT: How to obtain from array */}
                              {persona.howToObtain}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Add more personas note */}
              <div className="text-center mt-12 py-8 border-t border-[#222222]">
                <p className="font-body text-[#666666]">
                  {/* USER CONTENT: Edit note */}
                  This is a sample of available Personas. The full game features over 200 Personas to collect and fuse.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Collection Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]" data-testid="tips-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl tracking-wider text-white text-center mb-8">
            COLLECTION <span className="text-[#E0000F]">TIPS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* USER CONTENT: Edit collection tips */}
            {[
              {
                icon: Sword,
                title: 'NEGOTIATE',
                desc: 'Talk to Shadows in battle to convince them to join you',
              },
              {
                icon: Shield,
                title: 'FUSE',
                desc: 'Combine Personas in the Velvet Room to create stronger ones',
              },
              {
                icon: Star,
                title: 'REGISTER',
                desc: 'Register Personas in the compendium to resummon them later',
              },
            ].map((tip, index) => (
              <div 
                key={index}
                className="text-center p-6 border border-[#333333] hover:border-[#E0000F] transition-colors"
                data-testid={`tip-card-${index}`}
              >
                <tip.icon size={32} className="mx-auto mb-4 text-[#E0000F]" />
                <h3 className="font-heading text-xl tracking-wider text-white mb-2">
                  {/* USER CONTENT: Edit title */}
                  {tip.title}
                </h3>
                <p className="font-body text-sm text-[#B3B3B3]">
                  {/* USER CONTENT: Edit description */}
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharactersPage;

/* ============================================
   CHARACTERS PAGE CUSTOMIZATION GUIDE
   ============================================
   
   CHARACTER DATA (characters array):
   
   Each character object contains:
   {
     id: 1,                        // Unique number
     name: 'Character Name',       // Real name
     codename: 'CODENAME',        // Phantom Thief name (ALL CAPS)
     image: 'URL',                // Character portrait URL
     persona: 'Persona Name',     // Initial Persona name
     personaImage: 'URL',         // Persona image URL
     description: 'Bio text',     // Character background
     arcana: 'Arcana Name',       // Tarot arcana
     howToRecruit: 'Info',        // How to unlock
   }
   
   PERSONA DATA (personas array):
   
   Each Persona object contains:
   {
     id: 1,                        // Unique number
     name: 'Persona Name',         // Persona name
     arcana: 'Arcana',            // Tarot arcana
     image: 'URL',                // Persona image URL
     level: 50,                   // Base level (number)
     skills: ['Skill1', 'Skill2'], // Array of skill names
     howToObtain: 'Fusion info',  // How to get this Persona
   }
   
   IMAGE RECOMMENDATIONS:
   - Character portraits: 400x500 or portrait orientation
   - Persona images: 200x200 or square
   
   ============================================ */
