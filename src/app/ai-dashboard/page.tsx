'use client';

import { useState } from 'react';
import Sidebar from '@/components/ai-dashboard/Sidebar';
import ChatArea from '@/components/ai-dashboard/ChatArea';
import StatsCharts from '@/components/ai-dashboard/StatsCharts';
import { LayoutDashboard, Settings, BarChart3, Cpu } from 'lucide-react';

export default function AIDashboardPage() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <main className="min-h-screen bg-zinc-950 font-sans flex overflow-hidden text-zinc-200">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'chat' && (
        <div className="flex-1 flex overflow-hidden">
          <ChatArea />
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

      {activeTab === 'overview' && (
        <div className="flex-1 flex flex-col h-screen bg-zinc-950 ml-64 p-8 pt-24 overflow-y-auto">
          <div className="max-w-4xl w-full mx-auto space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
              <LayoutDashboard className="text-emerald-400" size={24} />
              <h1 className="text-2xl font-bold tracking-tight text-white">Vue d'ensemble du système</h1>
            </div>

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
          </div>
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="flex-1 flex flex-col h-screen bg-zinc-950 ml-64 p-8 pt-24 overflow-y-auto">
          <div className="max-w-4xl w-full mx-auto space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
              <BarChart3 className="text-emerald-400" size={24} />
              <h1 className="text-2xl font-bold tracking-tight text-white">Rapports d'Activité Analytique</h1>
            </div>
            <div className="w-full">
              <StatsCharts />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="flex-1 flex flex-col h-screen bg-zinc-950 ml-64 p-8 pt-24 overflow-y-auto">
          <div className="max-w-2xl w-full mx-auto space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
              <Settings className="text-emerald-400" size={24} />
              <h1 className="text-2xl font-bold tracking-tight text-white">Préférences du Workspace</h1>
            </div>
            <div className="bg-zinc-900 border border-zinc-800/50 rounded-2xl p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Clé API Secrète</label>
                <div className="flex gap-2">
                  <input type="password" value="sk-nexai-••••••••••••••••••••••••••••" disabled className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-500 cursor-not-allowed" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}