import React from 'react';
import TaskCard from './TaskCard';
import { FiInbox } from 'react-icons/fi';

/**
 * TaskList component to display list of tasks
 * @param {Object} props - Component props
 * @param {Array} props.tasks - Array of task objects
 * @param {Function} props.onToggleComplete - Function to toggle task completion
 * @param {Function} props.onEdit - Function to edit task
 * @param {Function} props.onDelete - Function to delete task
 */
const TaskList = ({ tasks, onToggleComplete, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <FiInbox className="h-24 w-24 text-gray-400 dark:text-gray-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          No tasks found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-center">
          Create a new task to get started or adjust your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;

