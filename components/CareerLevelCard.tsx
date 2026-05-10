'use client';

import { motion } from 'framer-motion';
import { careerLevels } from '../lib/data';

interface CareerLevelCardProps {
  level: typeof careerLevels[0];
  index: number;
}

export default function CareerLevelCard({ level, index }: CareerLevelCardProps) {
  const getColor = (levelName: string) => {
    switch (levelName) {
      case 'Jr':
        return {
          bg: 'from-purple-600 to-purple-800',
          text: 'text-purple-200',
          border: 'border-purple-500',
        };
      case 'Pl':
        return {
          bg: 'from-blue-600 to-blue-800',
          text: 'text-blue-200',
          border: 'border-blue-500',
        };
      case 'Sr':
        return {
          bg: 'from-orange-600 to-orange-800',
          text: 'text-orange-200',
          border: 'border-orange-500',
        };
      default:
        return {
          bg: 'from-indigo-600 to-indigo-800',
          text: 'text-indigo-200',
          border: 'border-indigo-500',
        };
    }
  };

  const colors = getColor(level.level);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative p-6 bg-gradient-to-br bg-clip-padding rounded-2xl border border-zinc-700 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
    >
      <div className={`absolute inset-0 bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />

      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center text-2xl font-bold ${colors.text}`}>
            {level.level}
          </div>
          <div>
            <h3 className={`text-xl font-bold ${colors.text}`}>
              {level.title}
            </h3>
            <p className="text-zinc-400 text-sm">{level.years}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">
            Salário Médio
          </div>
          <div className="text-lg font-semibold text-zinc-200">
            {level.salary}
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
            Principais Responsabilidades
          </div>
          <ul className="space-y-2">
            {level.responsibilities.map((resp, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span className="mt-0.5 w-1 h-1 rounded-full bg-purple-500 flex-shrink-0" />
                {resp}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">
            Skills Principais
          </div>
          <div className="flex flex-wrap gap-2">
            {level.skills.map((skill, i) => (
              <span
                key={i}
                className={`text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
