import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import StatsBar from './components/StatsBar';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTheme } from './hooks/useTheme';
import { 
  createTask, 
  updateTask, 
  filterTasks, 
  sortTasksByPriority,
  getTaskStats 
} from './utils/taskHelpers';
import { FILTER_OPTIONS } from './constants/taskData';
import { FiPlus } from 'react-icons/fi';

/**
 * Main App component
 */
function App() {
  // Theme management
  const { theme, toggleTheme } = useTheme();

  // Task management with localStorage
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Filter state
  const [filters, setFilters] = useState({
    searchQuery: '',
    category: 'all',
    priority: 'all',
    status: FILTER_OPTIONS.ALL,
  });

  // Filter and sort tasks
  const filteredAndSortedTasks = useMemo(() => {
    const filtered = filterTasks(tasks, filters);
    return sortTasksByPriority(filtered);
  }, [tasks, filters]);

  // Calculate statistics
  const stats = useMemo(() => getTaskStats(tasks), [tasks]);

  // Task CRUD operations
  const handleCreateTask = (taskData) => {
    const newTask = createTask(taskData);
    setTasks(prev => [...prev, newTask]);
  };

  const handleUpdateTask = (taskData) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === editingTask.id ? updateTask(task, taskData) : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(prev => prev.filter(task => task.id !== taskId));
    }
  };

  const handleToggleComplete = (taskId) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? updateTask(task, { completed: !task.completed })
          : task
      )
    );
  };

  // Modal handlers
  const handleOpenCreateModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      handleUpdateTask(taskData);
    } else {
      handleCreateTask(taskData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        searchQuery={filters.searchQuery}
        setSearchQuery={(query) => setFilters(prev => ({ ...prev, searchQuery: query }))}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics */}
        <StatsBar stats={stats} />

        {/* Filter Bar */}
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          taskCount={filteredAndSortedTasks.length}
        />

        {/* Task List */}
        <TaskList
          tasks={filteredAndSortedTasks}
          onToggleComplete={handleToggleComplete}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteTask}
        />

        {/* Floating Action Button */}
        <button
          onClick={handleOpenCreateModal}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary-600 hover:bg-primary-700 
                   text-white rounded-full shadow-lg hover:shadow-xl 
                   transition-all duration-300 flex items-center justify-center
                   focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                   transform hover:scale-110 active:scale-95"
          aria-label="Add new task"
        >
          <FiPlus className="h-6 w-6" />
        </button>
      </main>

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
        task={editingTask}
      />
    </div>
  );
}

export default App;
