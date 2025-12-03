// Task categories with colors and icons
export const CATEGORIES = [
  { id: 'all', name: 'All Tasks', color: 'gray', icon: '📋' },
  { id: 'work', name: 'Work', color: 'blue', icon: '💼' },
  { id: 'personal', name: 'Personal', color: 'green', icon: '👤' },
  { id: 'study', name: 'Study', color: 'purple', icon: '📚' },
  { id: 'health', name: 'Health', color: 'red', icon: '❤️' },
  { id: 'shopping', name: 'Shopping', color: 'yellow', icon: '🛒' },
];

// Priority levels with colors
export const PRIORITIES = [
  { id: 'high', name: 'High', color: 'red', value: 3 },
  { id: 'medium', name: 'Medium', color: 'yellow', value: 2 },
  { id: 'low', name: 'Low', color: 'green', value: 1 },
];

// Filter options for task status
export const FILTER_OPTIONS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

// Color mapping for Tailwind classes
export const COLOR_CLASSES = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-300 dark:border-blue-700',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-700 dark:text-green-300',
    border: 'border-green-300 dark:border-green-700',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-700 dark:text-purple-300',
    border: 'border-purple-300 dark:border-purple-700',
  },
  red: {
    bg: 'bg-red-100 dark:bg-red-900/30',
    text: 'text-red-700 dark:text-red-300',
    border: 'border-red-300 dark:border-red-700',
  },
  yellow: {
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    text: 'text-yellow-700 dark:text-yellow-300',
    border: 'border-yellow-300 dark:border-yellow-700',
  },
  gray: {
    bg: 'bg-gray-100 dark:bg-gray-800',
    text: 'text-gray-700 dark:text-gray-300',
    border: 'border-gray-300 dark:border-gray-600',
  },
};

// Get category by id
export const getCategoryById = (id) => {
  return CATEGORIES.find(cat => cat.id === id) || CATEGORIES[0];
};

// Get priority by id
export const getPriorityById = (id) => {
  return PRIORITIES.find(pri => pri.id === id) || PRIORITIES[2];
};

