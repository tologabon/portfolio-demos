import Link from 'next/link';
import { UtensilsCrossed, Scissors, Bot, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Démos Portfolio | Développeur Front-End',
  description: 'Découvrez mes trois concepts de sites web premium et ultra-rapides.',
};

const demos = [
  {
    title: "L'Épicurien",
    description: "Site vitrine gastronomique haut de gamme doté d'un carrousel de menu fluide et d'un visuel immersif.",
    path: '/restaurant',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-amber-600',
  },
  {
    title: "L'Atelier Barbier",
    description: "Site moderne pour salon de coiffure incluant une galerie de réalisations et une interface de réservation épurée.",
    path: '/coiffeur',
    icon: Scissors,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'NexAI Dashboard',
    description: 'Interface SaaS complète en Dark Mode intégrant un espace de discussion IA et des graphiques de performance.',
    path: '/ai-dashboard',
    icon: Bot,
    color: 'from-emerald-500 to-teal-600',
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
      {/* Effets de lumière diffus en arrière-plan */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl w-full text-center z-10">
        <header className="mb-16">
          <span className="px-4 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Démonstrations UI/UX
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-6 bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Une Architecture, Trois Expériences.
          </h1>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto font-light">
            Explorez ces trois interfaces thématiques conçues sans base de données, optimisées pour la performance et le rendu visuel.
          </p>
        </header>

        {/* Grille des démos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            return (
              <Link 
                key={index} 
                href={demo.path}
                className="group relative bg-slate-900/50 border border-slate-800/80 rounded-2xl p-8 hover:border-slate-700 transition-all hover:scale-[1.02] flex flex-col justify-between h-80 backdrop-blur-sm"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${demo.color} p-3 flex items-center justify-center mb-6 shadow-md`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight mb-3 text-white transition-colors">
                    {demo.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {demo.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-white transition-colors mt-6">
                  <span>Visiter la démo</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}