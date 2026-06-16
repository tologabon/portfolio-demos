'use client';

import { Calendar, Clock, Scissors, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function BookingInterface() {
  const [selectedService, setSelectedService] = useState<string | null>('Coupe Homme');
  const [selectedTime, setSelectedTime] = useState<string | null>('10:00');

  const services = ['Coupe Homme', 'Taille de Barbe', 'Coupe + Barbe', 'Coloration'];
  const timeSlots = ['09:00', '09:30', '10:00', '11:00', '14:00', '15:30', '16:00', '17:30'];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Colonne de gauche : Informations */}
            <div className="bg-slate-900 text-white p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Réservez votre instant.</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Sélectionnez votre prestation et trouvez le créneau qui vous convient. Notre équipe s'occupe du reste.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 bg-slate-800 rounded-full text-indigo-400">
                    <Scissors size={20} />
                  </div>
                  <span>Des coiffeurs visagistes experts</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 bg-slate-800 rounded-full text-indigo-400">
                    <Calendar size={20} />
                  </div>
                  <span>Réservation rapide et garantie</span>
                </div>
              </div>
            </div>

            {/* Colonne de droite : Sélection */}
            <div className="p-10">
              {/* Prestations */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">1. Prestation</h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map(service => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`p-3 rounded-xl text-sm font-medium border transition-all ${
                        selectedService === service 
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                          : 'border-slate-200 text-slate-600 hover:border-indigo-300'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Créneaux */}
              <div className="mb-10">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">2. Créneaux disponibles (Aujourd'hui)</h3>
                <div className="flex flex-wrap gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Clock size={14} />
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                <CheckCircle2 size={20} />
                Confirmer le rendez-vous
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}