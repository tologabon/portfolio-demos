import BackButton from '@/components/layout/BackButton';
import Gallery from '@/components/coiffeur/Gallery';
import BookingInterface from '@/components/coiffeur/BookingInterface';

export const metadata = {
  title: 'L\'Atelier Barbier | Salon de coiffure',
  description: 'Démo portfolio - Site vitrine de coiffeur/barbier',
};

export default function CoiffeurPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Bouton de retour global */}
      <BackButton />
      
      {/* En-tête de la page */}
      <header className="pt-32 pb-10 text-center bg-slate-50 border-b border-slate-200">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          L'Atelier <span className="text-indigo-600">Barbier</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto px-4">
          L'élégance au masculin, sur mesure. Prenez le temps de soigner votre style dans une ambiance détendue.
        </p>
      </header>

      {/* Assemblage des sections */}
      <Gallery />
      <BookingInterface />
    </main>
  );
}