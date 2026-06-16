export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Notre <span className="text-indigo-600">Savoir-Faire</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl text-lg font-light">
            Découvrez nos dernières réalisations. Des coupes classiques aux styles les plus contemporains, notre équipe maîtrise l'art du détail.
          </p>
        </div>

        {/* Grille d'images style bento/masonry statique */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className={`group relative rounded-2xl overflow-hidden bg-slate-100 shadow-sm ${
                index === 0 || index === 3 ? 'md:row-span-2 h-96 md:h-auto' : 'h-72'
              }`}
            >
              <img 
                src={src} 
                alt={`Coupe de cheveux ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold tracking-wide">Style #{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}