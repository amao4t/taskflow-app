import React from 'react';
import { CATEGORIES, PRIORITIES, FILTER_OPTIONS } from '../constants/taskData';
import { FiFilter } from 'react-icons/fi';

/**
 * FilterBar component for filtering tasks by category, priority, and status
 * @param {Object} props - Component props
 * @param {Object} props.filters - Current filter values
 * @param {Function} props.setFilters - Function to update filters
 * @param {number} props.taskCount - Number of tasks matching current filters
 */
const FilterBar = ({ filters, setFilters, taskCount }) => {
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      priority: 'all',
      status: FILTER_OPTIONS.ALL,
    });
  };

  const hasActiveFilters = 
    filters.category !== 'all' || 
    filters.priority !== 'all' || 
    filters.status !== FILTER_OPTIONS.ALL ||
    filters.searchQuery !== '';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FiFilter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Filters
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({taskCount} {taskCount === 1 ? 'task' : 'tasks'})
          </span>
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-colors duration-200"
          >
            {CATEGORIES.map(category => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Priority Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Priority
          </label>
          <select
            value={filters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-colors duration-200"
          >
            <option value="all">All Priorities</option>
            {PRIORITIES.map(priority => (
              <option key={priority.id} value={priority.id}>
                {priority.name}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-colors duration-200"
          >
            <option value={FILTER_OPTIONS.ALL}>All Tasks</option>
            <option value={FILTER_OPTIONS.ACTIVE}>Active</option>
            <option value={FILTER_OPTIONS.COMPLETED}>Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

