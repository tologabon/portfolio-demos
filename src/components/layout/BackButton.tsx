'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all shadow-lg"
    >
      <ArrowLeft size={18} />
      <span className="font-medium">Retour</span>
    </button>
  );
}