import { Award, ShieldCheck, Star } from 'lucide-react';

export default function ChefSection() {
  return (
    <section className="py-24 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Bloc Image asymétrique */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/10 rounded-3xl transform rotate-3 translate-x-3 translate-y-3 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
              alt="Notre Chef en cuisine" 
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute bottom-6 -right-6 bg-neutral-950 text-white p-6 rounded-2xl shadow-2xl hidden sm:block max-w-xs border border-neutral-800">
              <p className="text-orange-400 font-serif italic text-lg mb-2">"La cuisine est un art de la mémoire."</p>
              <p className="text-xs text-neutral-400 font-medium">— Chef Édouard Masson</p>
            </div>
          </div>

          {/* Bloc Texte */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-3">L'excellence au piano</span>
              <h2 className="text-4xl font-extrabold tracking-tight mb-4">Une philosophie, des saisons</h2>
              <p className="text-neutral-600 leading-relaxed font-light">
                À L'Épicurien, chaque assiette raconte une histoire de terroir. Notre Chef sélectionne minutieusement ses partenaires locaux pour vous garantir des produits d'une fraîcheur absolue, magnifiés par des techniques contemporaines.
              </p>
            </div>

            {/* Grille de distinctions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-xl text-orange-500 flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Maître Restaurateur</h4>
                  <p className="text-xs text-neutral-500 mt-1">Cuisine 100% fait maison certifiée.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-xl text-orange-500 flex-shrink-0">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Produits d'Exception</h4>
                  <p className="text-xs text-neutral-500 mt-1">Circuits courts et agriculture raisonnée.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}