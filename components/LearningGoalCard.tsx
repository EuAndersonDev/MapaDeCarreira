'use client';

import { motion } from 'framer-motion';
import { LearningGoal } from '../lib/data';

interface LearningGoalCardProps {
  goal: LearningGoal;
  index: number;
}

export default function LearningGoalCard({ goal, index }: LearningGoalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 hover:border-blue-500 transition-colors duration-300 shadow-lg"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">
          {goal.name}
        </h3>
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
          {goal.timeline}
        </span>
      </div>

      <p className="text-zinc-300 mb-6">
        {goal.description}
      </p>

      <div className="space-y-2">
        <div className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
          Pré-requisitos:
        </div>

        <ul className="space-y-1">
          {goal.prerequisites.map((prereq, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-zinc-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {prereq}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
