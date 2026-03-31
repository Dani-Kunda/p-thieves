# Persona 5 Royal - Phantom Thieves Fan Website

## Original Problem Statement
Build a Persona 5 Royal Phantom Thieves themed fan website with:
- Index/Home page with banner and feature image with red box overlay
- About page
- Products/Merchandise page
- Characters & Personas collection guide page
- Embedded YouTube videos
- Social media & Discord footer links
- Spotify soundtrack link
- Game purchase links (PS, Xbox, Switch, Steam)
- Placeholder comments for user-editable content

## User Choices
- Placeholder comments in code for editing (not admin panel)
- Embedded YouTube videos
- User has URLs for social media/Discord
- No official domain needed
- Image 2 = banner, Image 4 = red box feature, Image 3 = favicon

## Architecture
- **Frontend**: React 19 with Tailwind CSS + Shadcn/UI
- **Styling**: Persona 5 themed (Red #E0000F, Black, White)
- **Fonts**: Bebas Neue (headings), Outfit (body), Anton (accent)
- **Components**: Navbar, Footer (shared), 4 page components

## What's Been Implemented (March 31, 2026)

### Pages Created
1. **Home Page** (`/`)
   - Full-screen hero banner with P5R title
   - Feature section with red box overlay
   - Embedded YouTube video
   - Quick links cards

2. **About Page** (`/about`)
   - Story sections with Phantom Thieves lore
   - Feature cards (Steal Hearts, Infiltrate Palaces, etc.)
   - Quote section
   - Royal additions grid

3. **Products Page** (`/products`)
   - 8 merchandise items
   - Category filtering
   - Product cards with buy buttons

4. **Characters Page** (`/characters`)
   - Tabs: Characters / Personas
   - 9 character cards with codenames & arcanas
   - 8 persona cards with skills & fusion info
   - Collection tips section

### Components
- **Navbar**: Fixed, responsive with mobile menu
- **Footer**: Social links, Discord, Spotify, purchase links

### User Content Placeholders
All pages have `USER CONTENT:` comments for:
- Image URLs (banner, feature, characters, personas, products)
- Social media URLs (Twitter, Instagram, YouTube)
- Discord invite links
- Spotify soundtrack link
- Game store URLs
- Text content (descriptions, bios, etc.)

## Prioritized Backlog

### P0 (Done)
- [x] All 4 pages implemented
- [x] Navigation working
- [x] Footer with all links
- [x] Responsive design
- [x] Persona 5 theme styling

### P1 (Future Enhancements)
- [ ] Add actual Persona 5 images when user provides them
- [ ] Update all social media URLs
- [ ] Add more merchandise items
- [ ] Add more personas to collection guide

### P2 (Nice to Have)
- [ ] Add Confidant system page
- [ ] Add palace guides
- [ ] Add music player for OST previews
- [ ] Add news/updates section

## File Structure
```
/app/frontend/src/
├── App.js                 (main router)
├── App.css                (P5 specific styles)
├── index.css              (global styles, fonts)
├── components/
│   ├── Navbar.jsx         (navigation)
│   └── Footer.jsx         (social links, purchases)
└── pages/
    ├── HomePage.jsx       (hero, video, quick links)
    ├── AboutPage.jsx      (story, features)
    ├── ProductsPage.jsx   (merchandise)
    └── CharactersPage.jsx (characters & personas)
```
