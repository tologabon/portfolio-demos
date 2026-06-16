import { Clock, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Infos & Réseaux */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight">L'Épicurien</h3>
          <p className="text-neutral-400 text-sm font-light leading-relaxed">
            Une table d'exception pour vos moments précieux. Suivez nos créations éphémères au fil des semaines sur nos réseaux.
          </p>
          {/* Remplacement par des SVGs natifs pour éviter les bris de version Lucide */}
          <div className="flex gap-4 text-neutral-400">
            <a href="#" className="hover:text-orange-400 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Horaires d'ouverture */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
            <Clock size={16} />
            Horaires
          </h4>
          <ul className="space-y-3 text-sm text-neutral-400 font-light">
            <li className="flex justify-between border-b border-neutral-900 pb-2">
              <span>Mardi — Samedi</span>
              <span className="text-white font-medium">12:00 - 14:30</span>
            </li>
            <li className="flex justify-between border-b border-neutral-900 pb-2">
              <span>Mardi — Samedi</span>
              <span className="text-white font-medium">19:30 - 22:30</span>
            </li>
            <li className="flex justify-between text-neutral-600">
              <span>Dimanche & Lundi</span>
              <span>Fermé</span>
            </li>
          </ul>
        </div>

        {/* Contact & Accès */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
            <MapPin size={16} />
            Contact & Accès
          </h4>
          <address className="not-italic space-y-3 text-sm text-neutral-400 font-light">
            <p className="flex items-start gap-3">
              <MapPin size={18} className="text-neutral-600 flex-shrink-0 mt-0.5" />
              <span>14 Rue de la Haute Gastronomie,<br />75001 Paris</span>
            </p>
            <p className="flex items-center gap-3 pt-2">
              <Phone size={18} className="text-neutral-600" />
              <a href="tel:+33100000000" className="hover:text-white transition-colors">+33 (0)1 00 00 00 00</a>
            </p>
          </address>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600 font-medium">
        <p>&copy; 2026 L'Épicurien. Tous droits réservés. Démo Portfolio Front-End.</p>
      </div>
    </footer>
  );
}