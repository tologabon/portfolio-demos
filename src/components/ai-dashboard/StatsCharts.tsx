'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Données statiques pour la démonstration
const data = [
  { name: 'Lun', requetes: 4000 },
  { name: 'Mar', requetes: 3000 },
  { name: 'Mer', requetes: 5000 },
  { name: 'Jeu', requetes: 2780 },
  { name: 'Ven', requetes: 6890 },
  { name: 'Sam', requetes: 2390 },
  { name: 'Dim', requetes: 3490 },
];

export default function StatsCharts() {
  return (
    <div className="p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl w-full mt-6 shadow-sm backdrop-blur-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-zinc-100 mb-1">Volume de Requêtes IA</h3>
        <p className="text-sm text-zinc-400">Activité analysée sur les 7 derniers jours</p>
      </div>
      
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRequetes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#a1a1aa" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#a1a1aa" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '0.75rem', color: '#e4e4e7' }}
              itemStyle={{ color: '#34d399', fontWeight: 'bold' }}
              cursor={{ stroke: '#3f3f46', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area 
              type="monotone" 
              dataKey="requetes" 
              stroke="#34d399" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRequetes)" 
              activeDot={{ r: 6, fill: '#10b981', stroke: '#042f2e', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}