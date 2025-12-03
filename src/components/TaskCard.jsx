import React from 'react';
import { FiEdit2, FiTrash2, FiCalendar, FiFlag } from 'react-icons/fi';
import { getCategoryById, getPriorityById, COLOR_CLASSES } from '../constants/taskData';
import { formatDate, isTaskOverdue } from '../utils/taskHelpers';

/**
 * TaskCard component to display individual task
 * @param {Object} props - Component props
 * @param {Object} props.task - Task object
 * @param {Function} props.onToggleComplete - Function to toggle task completion
 * @param {Function} props.onEdit - Function to edit task
 * @param {Function} props.onDelete - Function to delete task
 */
const TaskCard = ({ task, onToggleComplete, onEdit, onDelete }) => {
  const category = getCategoryById(task.category);
  const priority = getPriorityById(task.priority);
  const categoryColors = COLOR_CLASSES[category.color];
  const priorityColors = COLOR_CLASSES[priority.color];
  const isOverdue = isTaskOverdue(task);

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg 
                 transition-all duration-300 p-4 border-l-4 
                 ${task.completed ? 'opacity-70' : ''} 
                 ${isOverdue ? 'border-red-500' : categoryColors.border}
                 animate-fade-in`}
    >
      {/* Header with checkbox and actions */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start space-x-3 flex-1">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="mt-1 h-5 w-5 text-primary-600 rounded focus:ring-2 focus:ring-primary-500 
                     cursor-pointer transition-transform hover:scale-110"
          />
          
          {/* Title and Description */}
          <div className="flex-1 min-w-0">
            <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 
                          ${task.completed ? 'line-through text-gray-500 dark:text-gray-500' : ''}`}>
              {task.title}
            </h3>
            {task.description && (
              <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2
                           ${task.completed ? 'line-through' : ''}`}>
                {task.description}
              </p>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-2 ml-2">
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 
                     dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 
                     rounded-lg transition-colors duration-200"
            aria-label="Edit task"
          >
            <FiEdit2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 
                     dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 
                     rounded-lg transition-colors duration-200"
            aria-label="Delete task"
          >
            <FiTrash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Footer with category, priority, and due date */}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        {/* Category Badge */}
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${categoryColors.bg} ${categoryColors.text}`}>
          <span className="mr-1">{category.icon}</span>
          {category.name}
        </span>

        {/* Priority Badge */}
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${priorityColors.bg} ${priorityColors.text}`}>
          <FiFlag className="h-3 w-3 mr-1" />
          {priority.name}
        </span>

        {/* Due Date */}
        {task.dueDate && (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${isOverdue && !task.completed 
                            ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
            <FiCalendar className="h-3 w-3 mr-1" />
            {formatDate(task.dueDate)}
            {isOverdue && !task.completed && ' (Overdue)'}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;

