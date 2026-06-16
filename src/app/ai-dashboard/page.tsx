'use client';

import { useState } from 'react';
import Sidebar from '@/components/ai-dashboard/Sidebar';
import ChatArea from '@/components/ai-dashboard/ChatArea';
import StatsCharts from '@/components/ai-dashboard/StatsCharts';
import BackButton from '@/components/layout/BackButton';
import { LayoutDashboard, Settings, BarChart3, Cpu, Sparkles } from 'lucide-react';

export default function AIDashboardPage() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <main className="min-h-screen bg-zinc-950 font-sans flex overflow-hidden text-zinc-200">
      {/* Bouton de retour global */}
      <BackButton />

      {/* Barre latérale partagée */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 1. COMPOSANT : CHAT IA (Vue par défaut) */}
      {activeTab === 'chat' && (
        <div className="flex-1 flex overflow-hidden">
          <ChatArea />
          {/* Panneau latéral droit (Statistiques d'activité légères lors du chat) */}
          <div className="hidden xl:flex w-96 border-l border-zinc-800/50 p-6 flex-col bg-zinc-950 h-screen pt-24 overflow-y-auto flex-shrink-0">
            <StatsCharts />
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-xl">
                <p className="text-xs text-zinc-500 font-medium">Temps de réponse</p>
                <p className="text-lg font-semibold text-emerald-400 mt-1">240ms</p>
              </div>
              <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-xl">
                <p className="text-xs text-zinc-500 font-medium">Précision API</p>
                <p className="text-lg font-semibold text-emerald-400 mt-1">99.8%</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. COMPOSANT : VUE D'ENSEMBLE */}
      {activeTab === 'overview' && (
        <div className="flex-1 flex flex-col h-screen bg-zinc-950 ml-64 p-8 pt-24 overflow-y-auto transition-all duration-300">
          <div className="max-w-4xl w-full mx-auto space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
              <LayoutDashboard className="text-emerald-400" size={24} />
              <h1 className="text-2xl font-bold tracking-tight text-white">Vue d'ensemble du système</h1>
            </div>

            {/* Cartes de métriques clés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-zinc-900 border border-zinc-800/50 rounded-2xl">
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Crédits d'utilisation</p>
                <p className="text-3xl font-extrabold text-white mt-2">84,230 <span className="text-xs text-zinc-600">/ 100k</span></p>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-4 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[84%]" />
                </div>
              </div>

              <div className="p-6 bg-zinc-900 border border-zinc-800/50 rounded-2xl">
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Cluster LLM</p>
                <p className="text-lg font-semibold text-emerald-400 mt-2 flex items-center gap-2">
                  <Cpu size={16} /> NexAI-Ultra v4
                </p>
                <p className="text-xs text-zinc-500 mt-3 font-light">Latence optimisée pour les requêtes asynchrones.</p>
              </div>

              <div className="p-6 bg-zinc-900 border border-zinc-800/50 rounded-2xl">
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">État des passerelles</p>
                <p className="text-lg font-bold text-white mt-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Opérationnel
                </p>
                <p className="text-xs text-zinc-500 mt-3 font-light">99.99% d'uptime enregistré ce mois-ci.</p>
              </div>
            </div>

            {/* Historique d'activité mocké */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Derniers appels de jetons</h3>
              <div className="space-y-4 text-sm font-light">
                <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
                  <span className="text-zinc-300">Analyse de contexte matriciel (Q2_Sales.csv)</span>
                  <span className="text-xs text-zinc-500">Il y a 8 min</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
                  <span className="text-zinc-300">Génération de résumés via webhook corporatif</span>
                  <span className="text-xs text-zinc-500">Il y a 2 heures</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300">Indexation vectorielle de base documentaire</span>
                  <span className="text-xs text-zinc-500">Hier à 16:40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. COMPOSANT : VUE STATISTIQUES DÉTAILLÉES */}
      {activeTab === 'stats' && (
        <div className="flex-1 flex flex-col h-screen bg-zinc-950 ml-64 p-8 pt-24 overflow-y-auto transition-all duration-300">
          <div className="max-w-4xl w-full mx-auto space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
              <BarChart3 className="text-emerald-400" size={24} />
              <h1 className="text-2xl font-bold tracking-tight text-white">Rapports d'Activité Analytique</h1>
            </div>

            <div className="w-full">
              <StatsCharts />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-900 border border-zinc-800/50 rounded-2xl">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Charge réseau de pointe</h4>
                <p className="text-2xl font-bold text-white">45.2 req / sec <span className="text-xs font-normal text-zinc-500">médiane</span></p>
              </div>
              <div className="p-6 bg-zinc-900 border border-zinc-800/50 rounded-2xl">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Volume de transfert API</h4>
                <p className="text-2xl font-bold text-white">1.28 TB <span className="text-xs font-normal text-zinc-500">transmis</span></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. COMPOSANT : VUE PARAMÈTRES */}
      {activeTab === 'settings' && (
        <div className="flex-1 flex flex-col h-screen bg-zinc-950 ml-64 p-8 pt-24 overflow-y-auto transition-all duration-300">
          <div className="max-w-2xl w-full mx-auto space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
              <Settings className="text-emerald-400" size={24} />
              <h1 className="text-2xl font-bold tracking-tight text-white">Préférences du Workspace</h1>
            </div>

            <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 space-y-6">
              {/* Token d'accès */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Clé API Secrète</label>
                <div className="flex gap-2">
                  <input 
                    type="password" 
                    value="sk-nexai-••••••••••••••••••••••••••••" 
                    disabled 
                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-500 cursor-not-allowed select-none"
                  />
                  <button className="px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-sm font-medium transition-colors">
                    Révéler
                  </button>
                </div>
              </div>

              {/* Paramètre curseur : Température du modèle */}
              <div className="pt-4 border-t border-zinc-800/60 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-white">Température du modèle (Créativité)</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Une valeur plus élevée produit des réponses plus originales.</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">0.7</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.1" 
                  defaultValue="0.7" 
                  className="w-full accent-emerald-500 bg-zinc-800 rounded-lg h-1.5 cursor-pointer" 
                />
              </div>

              {/* Interrupteur : Pipeline d'authentification */}
              <div className="pt-4 border-t border-zinc-800/60 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-white">Chiffrement matériel (MFA)</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Exiger une clé physique ou applicative lors de l'accès au terminal.</p>
                </div>
                <div className="w-11 h-6 bg-emerald-500 rounded-full p-0.5 cursor-pointer flex items-center justify-end">
                  <div className="w-5 h-5 bg-white rounded-full shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}