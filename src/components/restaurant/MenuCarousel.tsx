'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const menuItems = [
  {
    id: 1,
    name: 'Saumon Gravlax',
    description: 'Betterave, aneth et crème fraîche au citron vert.',
    price: '18€',
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Saint-Jacques Poêlées',
    description: 'Mousseline de panais, éclats de noisettes torréfiées et émulsion au beurre blanc.',
    price: '22€',
    image: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Bœuf Wellington',
    description: 'Filet de bœuf charolais, duxelles de champignons sauvages, pâte feuilletée dorée.',
    price: '34€',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Risotto aux Truffes',
    description: 'Riz arborio crémeux, éclats de truffe noire fraîche, parmesan affiné 24 mois.',
    price: '28€',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Filet de Bar de Ligne',
    description: 'Asperges vertes croquantes, réduction d’agrumes et huile d’olive vierge aromatisée.',
    price: '32€',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Carré d’Agneau Rôti',
    description: 'Croûte d’herbes fines, jus corsé au romarin et fine purée de pommes de terre au beurre.',
    price: '36€',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Tartelette Citron',
    description: 'Meringue italienne aérienne, zestes confits et sablé breton croustillant.',
    price: '12€',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Sphère Chocolat Intense',
    description: 'Chocolat noir 70%, cœur coulant au caramel au beurre salé et glace vanille Bourbon.',
    price: '14€',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop'
  }
];

export default function MenuCarousel() {
  return (
    <section className="py-16 md:py-24 bg-neutral-100 text-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">Créations culinaires</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Notre Carte Signature</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            // Sur mobile (petits écrans)
            0: {
              slidesPerView: 1.25,
              spaceBetween: 16,
            },
            // Sur tablette
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            // Sur grand écran
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 80,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full py-8 !overflow-visible"
        >
          {menuItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-200/50 mx-auto transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden group">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-neutral-900 leading-tight">{item.name}</h3>
                      <span className="text-orange-600 font-bold bg-orange-50 px-2.5 py-1 rounded-lg text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light line-clamp-3">{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}