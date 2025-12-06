import { v4 as uuidv4 } from 'uuid';

/**
 * Create a new task object with default values
 * @param {Object} taskData - The task data from form
 * @returns {Object} - Complete task object
 */
export const createTask = (taskData) => {
  const now = new Date().toISOString();
  return {
    id: uuidv4(),
    title: taskData.title || '',
    description: taskData.description || '',
    category: taskData.category || 'personal',
    priority: taskData.priority || 'medium',
    completed: false,
    dueDate: taskData.dueDate || '',
    createdAt: now,
    updatedAt: now,
  };
};

/**
 * Update an existing task
 * @param {Object} task - The existing task
 * @param {Object} updates - The updates to apply
 * @returns {Object} - Updated task object
 */
export const updateTask = (task, updates) => {
  return {
    ...task,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * Sort tasks by priority (high to low) then by creation date
 * @param {Array} tasks - Array of tasks
 * @returns {Array} - Sorted tasks
 */
export const sortTasksByPriority = (tasks) => {
  const priorityValues = { high: 3, medium: 2, low: 1 };
  
  return [...tasks].sort((a, b) => {
    const priorityDiff = priorityValues[b.priority] - priorityValues[a.priority];
    if (priorityDiff !== 0) return priorityDiff;
    
    // If same priority, sort by creation date (newest first)
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
};

/**
 * Filter tasks based on search query and filters
 * @param {Array} tasks - Array of tasks
 * @param {Object} filters - Filter criteria
 * @returns {Array} - Filtered tasks
 */
export const filterTasks = (tasks, filters) => {
  const { searchQuery, category, priority, status } = filters;

  return tasks.filter(task => {
    // Search filter (title or description)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        task.title.toLowerCase().includes(query) || 
        task.description.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Category filter
    if (category && category !== 'all' && task.category !== category) {
      return false;
    }

    // Priority filter
    if (priority && priority !== 'all' && task.priority !== priority) {
      return false;
    }

    // Status filter
    if (status === 'active' && task.completed) return false;
    if (status === 'completed' && !task.completed) return false;

    return true;
  });
};

/**
 * Format date to readable string
 * @param {string} dateString - Date string in YYYY-MM-DD or ISO format
 * @returns {string} - Formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  // Parse date string (handles both YYYY-MM-DD and ISO format)
  // Create date at midnight in local timezone to avoid timezone shifts
  let date;
  if (dateString.includes('T')) {
    // ISO format: parse as-is
    date = new Date(dateString);
  } else {
    // YYYY-MM-DD format: create date at midnight local time
    const [year, month, day] = dateString.split('-').map(Number);
    date = new Date(year, month - 1, day);
  }
  
  // Get today's date at midnight local time for accurate comparison
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const taskDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  const diffTime = taskDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === -1) return 'Yesterday';
  if (diffDays < 0) return `${Math.abs(diffDays)} days ago`;
  if (diffDays < 7) return `In ${diffDays} days`;

  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined 
  });
};

/**
 * Check if task is overdue
 * @param {Object} task - Task object
 * @returns {boolean} - True if overdue
 */
export const isTaskOverdue = (task) => {
  if (!task.dueDate || task.completed) return false;
  
  // Parse date string (handles both YYYY-MM-DD and ISO format)
  let dueDate;
  if (task.dueDate.includes('T')) {
    // ISO format: parse as-is
    dueDate = new Date(task.dueDate);
  } else {
    // YYYY-MM-DD format: create date at midnight local time
    const [year, month, day] = task.dueDate.split('-').map(Number);
    dueDate = new Date(year, month - 1, day);
  }
  
  // Compare with today at midnight local time
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const taskDate = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
  
  return taskDate < today;
};

/**
 * Get task statistics
 * @param {Array} tasks - Array of tasks
 * @returns {Object} - Statistics object
 */
export const getTaskStats = (tasks) => {
  return {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    active: tasks.filter(t => !t.completed).length,
    overdue: tasks.filter(t => isTaskOverdue(t)).length,
    highPriority: tasks.filter(t => t.priority === 'high' && !t.completed).length,
  };
};

