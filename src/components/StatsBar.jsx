import React from 'react';
import { FiCheckCircle, FiCircle, FiAlertCircle, FiFlag } from 'react-icons/fi';

/**
 * StatsBar component to display task statistics
 * @param {Object} props - Component props
 * @param {Object} props.stats - Statistics object
 */
const StatsBar = ({ stats }) => {
  const statItems = [
    {
      label: 'Total',
      value: stats.total,
      icon: FiCircle,
      color: 'text-gray-600 dark:text-gray-400',
      bgColor: 'bg-gray-100 dark:bg-gray-700',
    },
    {
      label: 'Active',
      value: stats.active,
      icon: FiCircle,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      label: 'Completed',
      value: stats.completed,
      icon: FiCheckCircle,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      label: 'High Priority',
      value: stats.highPriority,
      icon: FiFlag,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
    },
    {
      label: 'Overdue',
      value: stats.overdue,
      icon: FiAlertCircle,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {statItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={`${item.bgColor} rounded-lg p-4 transition-all duration-300 hover:shadow-md`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
                <p className={`text-2xl font-bold ${item.color} mt-1`}>
                  {item.value}
                </p>
              </div>
              <Icon className={`h-8 w-8 ${item.color} opacity-75`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBar;

