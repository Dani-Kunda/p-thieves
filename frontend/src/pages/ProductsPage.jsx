import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';

/* ============================================
   PRODUCTS PAGE - Persona 5 Royal Theme
   ============================================
   
   USER CONTENT SECTIONS:
   1. Product items array - Edit all merchandise listings
   2. Each product has: image, name, price, description, link
   
   ============================================ */

const ProductsPage = () => {
  /* ----------------------------------------
     USER CONTENT: Product Listings
     Edit the products array to add/modify merchandise
     
     For each product:
     - id: Unique identifier
     - image: URL to product image
     - name: Product name
     - price: Price string (e.g., "$29.99")
     - description: Short description
     - link: URL to purchase (store link)
     - category: Category for filtering
     ---------------------------------------- */
  const products = [
    {
      id: 1,
      // USER CONTENT: Replace image URL
      image: 'https://images.pexels.com/photos/32191794/pexels-photo-32191794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
      name: 'Joker Mask Replica',
      price: '$49.99',
      description: 'High-quality replica of Joker\'s signature mask',
      link: '#', // USER CONTENT: Replace with actual store link
      category: 'Collectibles',
    },
    {
      id: 2,
      // USER CONTENT: Replace image URL
      image: 'https://images.pexels.com/photos/17122728/pexels-photo-17122728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
      name: 'Phantom Thieves T-Shirt',
      price: '$29.99',
      description: 'Official Phantom Thieves logo tee',
      link: '#', // USER CONTENT: Replace with actual store link
      category: 'Apparel',
    },
    {
      id: 3,
      // USER CONTENT: Replace image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=400',
      name: 'Morgana Plush',
      price: '$24.99',
      description: 'Adorable Morgana plush toy',
      link: '#', // USER CONTENT: Replace with actual store link
      category: 'Plush',
    },
    {
      id: 4,
      // USER CONTENT: Replace image URL
      image: 'https://images.pexels.com/photos/32191794/pexels-photo-32191794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
      name: 'Persona 5 Royal Art Book',
      price: '$39.99',
      description: 'Official art book with exclusive illustrations',
      link: '#', // USER CONTENT: Replace with actual store link
      category: 'Books',
    },
    {
      id: 5,
      // USER CONTENT: Replace image URL
      image: 'https://images.pexels.com/photos/17122728/pexels-photo-17122728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
      name: 'Phantom Thieves Hoodie',
      price: '$59.99',
      description: 'Cozy hoodie with Phantom Thieves emblem',
      link: '#', // USER CONTENT: Replace with actual store link
      category: 'Apparel',
    },
    {
      id: 6,
      // USER CONTENT: Replace image URL
      image: 'https://images.unsplash.com/photo-1597361860389-d818d6b8a12e?crop=entropy&cs=srgb&fm=jpg&w=400',
      name: 'Arsène Figure',
      price: '$89.99',
      description: 'Detailed figure of Joker\'s initial Persona',
      link: '#', // USER CONTENT: Replace with actual store link
      category: 'Figures',
    },
    {
      id: 7,
      // USER CONTENT: Replace image URL
      image: 'https://images.pexels.com/photos/32191794/pexels-photo-32191794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
      name: 'Calling Card Poster Set',
      price: '$19.99',
      description: 'Set of 5 iconic Calling Card posters',
      link: '#', // USER CONTENT: Replace with actual store link
      category: 'Posters',
    },
    {
      id: 8,
      // USER CONTENT: Replace image URL
      image: 'https://images.pexels.com/photos/17122728/pexels-photo-17122728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
      name: 'Shujin Academy Bag',
      price: '$44.99',
      description: 'Replica school bag from Shujin Academy',
      link: '#', // USER CONTENT: Replace with actual store link
      category: 'Accessories',
    },
  ];

  /* ----------------------------------------
     USER CONTENT: Categories for filtering
     Add/remove categories as needed
     ---------------------------------------- */
  const categories = ['All', 'Apparel', 'Collectibles', 'Figures', 'Plush', 'Books', 'Posters', 'Accessories'];

  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-20" data-testid="products-page">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative halftone" data-testid="products-hero">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* USER CONTENT: Edit page title */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-widest text-white mb-4">
            PHANTOM THIEVES <span className="text-[#E0000F]">MERCH</span>
          </h1>
          {/* USER CONTENT: Edit subtitle */}
          <p className="font-body text-lg text-[#B3B3B3] max-w-2xl mx-auto">
            Official merchandise to show your support for the Phantom Thieves
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-[#222222]" data-testid="category-filter">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn-skew px-6 py-2 font-heading tracking-wider text-sm transition-colors
                  ${activeCategory === category 
                    ? 'bg-[#E0000F] text-white' 
                    : 'bg-transparent border border-[#333333] text-[#B3B3B3] hover:border-[#E0000F] hover:text-white'
                  }`}
                data-testid={`category-btn-${category.toLowerCase()}`}
              >
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-testid="products-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="product-card overflow-hidden group"
                style={{ animationDelay: `${index * 50}ms` }}
                data-testid={`product-card-${product.id}`}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  {/* 
                    =============================================
                    USER CONTENT: Product Image
                    Each product's image URL is defined in the products array above
                    =============================================
                  */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="collection-badge text-xs">
                      <span>{product.category}</span>
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#E0000F]/0 group-hover:bg-[#E0000F]/20 transition-colors" />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-heading text-xl tracking-wider text-white mb-2 line-clamp-1">
                    {/* USER CONTENT: Product name from array */}
                    {product.name}
                  </h3>
                  <p className="font-body text-[#666666] text-sm mb-4 line-clamp-2">
                    {/* USER CONTENT: Product description from array */}
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl text-[#E0000F]">
                      {/* USER CONTENT: Product price from array */}
                      {product.price}
                    </span>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#E0000F] hover:bg-white hover:text-black px-4 py-2 font-heading text-sm tracking-wider transition-colors"
                      data-testid={`buy-btn-${product.id}`}
                    >
                      <ShoppingCart size={16} />
                      BUY
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-[#666666] text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Store Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]" data-testid="store-notice">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-[#666666]">
            {/* USER CONTENT: Edit store notice/disclaimer */}
            All merchandise is officially licensed by ATLUS and SEGA. 
            Prices and availability may vary by region.
          </p>
          {/* USER CONTENT: Add link to official store */}
          <a
            href="#" // USER CONTENT: Replace with official store URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 font-heading tracking-wider text-[#E0000F] hover:text-white transition-colors"
            data-testid="official-store-link"
          >
            VISIT OFFICIAL STORE <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

/* ============================================
   PRODUCTS PAGE CUSTOMIZATION GUIDE
   ============================================
   
   TO ADD/EDIT PRODUCTS:
   
   Find the 'products' array at the top of the component and edit:
   
   {
     id: 1,                           // Unique number
     image: 'YOUR_IMAGE_URL',         // Product image URL
     name: 'Product Name',            // Display name
     price: '$XX.XX',                 // Price string
     description: 'Description',      // Short description
     link: 'STORE_URL',              // Link to purchase
     category: 'Category Name',       // Must match a category in categories array
   }
   
   TO ADD NEW CATEGORIES:
   
   Edit the 'categories' array:
   const categories = ['All', 'Your', 'Categories', 'Here'];
   
   IMAGES:
   - Recommended size: 400x400 or square aspect ratio
   - Can use any image hosting service
   - Update the src in product.image
   
   ============================================ */
