'use client';

import { motion } from 'framer-motion';
import { Skill } from '../lib/data';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return 'from-purple-500 to-pink-500';
      case 'avancado':
        return 'from-blue-500 to-cyan-500';
      case 'intermediario':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-yellow-500 to-orange-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
        <div className="text-5xl mb-4">{skill.icon}</div>

        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
          {skill.name}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          {skill.description}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            Nível: {skill.level}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
