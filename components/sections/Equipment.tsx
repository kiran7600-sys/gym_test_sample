'use client';

import EquipmentCard from '@/components/ui/EquipmentCard';
import { EQUIPMENT_LIST } from '@/lib/constants';

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent-red text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-3 block">
            OUR EQUIPMENT
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wide">
            Built for Serious Lifters
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every machine, every rep — precision equipment from world-renowned brands. We do not compromise on the tools you use to sculpt your best physique.
          </p>
        </div>

        {/* Equipment List */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {EQUIPMENT_LIST.map((equipment, idx) => (
            <EquipmentCard
              key={equipment.id}
              equipment={equipment}
              index={idx}
              reversed={idx % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
