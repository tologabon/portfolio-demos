'use client';

import { Bot, LayoutDashboard, MessageSquare, BarChart3, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'overview', icon: LayoutDashboard, label: "Vue d'ensemble" },
    { id: 'chat', icon: MessageSquare, label: 'Chat IA' },
    { id: 'stats', icon: BarChart3, label: 'Statistiques' },
    { id: 'settings', icon: Settings, label: 'Paramètres' },
  ];

  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800/50 flex flex-col h-screen fixed left-0 top-0 z-20">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <Bot className="text-emerald-400" size={24} />
        </div>
        <span className="text-white font-bold text-xl tracking-tight">NexAI</span>
      </div>

      {/* Navigation Interactive */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-zinc-800/50 text-emerald-400'
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Profil utilisateur */}
      <div className="p-4 border-t border-zinc-800/50">
        <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900 rounded-xl">
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400">
            JD
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-zinc-500">Pro Plan</p>
          </div>
          <button className="text-zinc-500 hover:text-red-400 transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}