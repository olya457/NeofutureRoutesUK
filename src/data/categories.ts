import { Category } from '../types/zone';
import { Colors } from '../theme/colors';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'All', emoji: '✨', color: Colors.accentCyan },
  { id: 'science', label: 'Science', emoji: '🔬', color: Colors.categoryScience },
  { id: 'energy', label: 'Energy', emoji: '⚡', color: Colors.categoryEnergy },
  { id: 'infra', label: 'Infra', emoji: '🏗️', color: Colors.categoryInfra },
  { id: 'urban', label: 'Urban', emoji: '🏙️', color: Colors.categoryUrban },
  { id: 'underground', label: 'Underground', emoji: '🛤️', color: Colors.categoryUnderground },
];

export const getCategoryLabel = (id: Category['id']): string =>
  CATEGORIES.find(c => c.id === id)?.label ?? 'Unknown';

export const getCategoryColor = (id: Category['id']): string =>
  CATEGORIES.find(c => c.id === id)?.color ?? Colors.accentCyan;

export const getCategoryEmoji = (id: Category['id']): string =>
  CATEGORIES.find(c => c.id === id)?.emoji ?? '✨';
