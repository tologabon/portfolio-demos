'use client';

import { Send, User, Bot, Sparkles } from 'lucide-react';

export default function ChatArea() {
  const messages = [
    { role: 'user', content: 'Peux-tu analyser les données de ventes du dernier trimestre ?' },
    { role: 'ai', content: 'Bien sûr. J\'ai analysé les données. Les ventes ont augmenté de 15% par rapport au trimestre précédent, principalement grâce à la nouvelle campagne marketing sur le segment B2B. Veux-tu que je génère un graphique détaillé ?' }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen bg-zinc-950 text-zinc-200 ml-64">
      {/* En-tête */}
      <header className="h-16 border-b border-zinc-800/50 flex items-center px-6 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <h2 className="text-lg font-medium flex items-center gap-2">
          <Sparkles className="text-emerald-400" size={18} />
          Assistant Analytique
        </h2>
      </header>

      {/* Zone des messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, index) => (
          <div key={index} className={`flex gap-4 max-w-3xl ${msg.role === 'user' ? 'ml-auto' : ''}`}>
            {msg.role === 'ai' && (
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot size={18} className="text-emerald-400" />
              </div>
            )}
            
            <div className={`p-4 rounded-2xl shadow-sm ${
              msg.role === 'user' 
                ? 'bg-zinc-800 text-zinc-100 rounded-tr-sm' 
                : 'bg-zinc-900 border border-zinc-800/50 text-zinc-300 rounded-tl-sm'
            }`}>
              <p className="leading-relaxed text-sm">{msg.content}</p>
            </div>

            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-1">
                <User size={18} className="text-zinc-400" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Zone de saisie */}
      <div className="p-4 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Posez votre question à l'IA..." 
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-4 pr-12 py-4 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all shadow-inner"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors">
            <Send size={16} />
          </button>
        </div>
        <p className="text-center text-xs text-zinc-600 mt-3 font-medium">
          L'IA peut faire des erreurs. Pensez à vérifier les informations importantes.
        </p>
      </div>
    </div>
  );
}