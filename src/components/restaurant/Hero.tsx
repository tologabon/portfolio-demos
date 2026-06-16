import { UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-neutral-900 text-white overflow-hidden">
      {/* Image de fond avec overlay sombre */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40"
      />
      
      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center animate-fade-in">
        <div className="p-4 bg-orange-500/20 rounded-full backdrop-blur-sm mb-6">
          <UtensilsCrossed size={48} className="text-orange-400" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          L'Épicurien
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light">
          Une expérience gastronomique inoubliable au cœur de la ville, où la tradition culinaire rencontre la modernité.
        </p>
        
        <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
          Réserver une table
        </button>
      </div>
    </section>
  );
}