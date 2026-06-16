import BackButton from '@/components/layout/BackButton';
import Hero from '@/components/restaurant/Hero';
import MenuCarousel from '@/components/restaurant/MenuCarousel';
import ChefSection from '@/components/restaurant/ChefSection';
import Footer from '@/components/restaurant/Footer';

export const metadata = {
  title: 'L\'Épicurien | Restaurant Gastronomique',
  description: 'Démo portfolio - Site vitrine de restaurant haut de gamme',
};

export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-neutral-50 font-sans antialiased">
      {/* Bouton de retour global */}
      <BackButton />
      
      {/* Séquence complète des sections */}
      <Hero />
      <MenuCarousel />
      <ChefSection />
      <Footer />
    </main>
  );
}