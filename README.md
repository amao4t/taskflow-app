# TaskFlow - Modern Task Management Application

A beautiful and intuitive task management application built with React, featuring dark mode, local storage persistence, and modern UI design.

## 🚀 Features

- ✅ **Task CRUD Operations** - Create, Read, Update, and Delete tasks
- 📁 **Task Categorization** - Organize tasks by categories (Work, Personal, Study, Health, Shopping)
- 🎯 **Priority Management** - Assign priority levels (High, Medium, Low)
- 🔍 **Search and Filter** - Real-time search and advanced filtering
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes
- 📱 **Responsive Design** - Works seamlessly on all devices
- 💾 **Local Storage** - Tasks persist across browser sessions
- 📊 **Statistics Dashboard** - View task statistics at a glance
- ⚡ **Fast Performance** - Optimized with React hooks and memoization

## 🛠️ Tech Stack

- **React 18+** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **UUID** - Generate unique task IDs

## 📦 Installation

1. Clone the repository or navigate to the project directory:
```bash
cd taskflow-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features Overview

### Task Management
- Create new tasks with title, description, category, priority, and due date
- Edit existing tasks
- Mark tasks as complete/incomplete
- Delete tasks with confirmation
- View tasks in a beautiful card layout

### Filtering & Search
- Real-time search by title or description
- Filter by category (Work, Personal, Study, Health, Shopping)
- Filter by priority (High, Medium, Low)
- Filter by status (All, Active, Completed)
- Combine multiple filters

### Dark Mode
- Toggle between light and dark themes
- Theme preference saved in localStorage
- Smooth transitions between themes

### Statistics
- Total tasks count
- Active tasks count
- Completed tasks count
- High priority tasks count
- Overdue tasks count

## 📂 Project Structure

```
taskflow-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header with search and theme toggle
│   │   ├── FilterBar.jsx       # Filter controls
│   │   ├── TaskList.jsx        # Task list container
│   │   ├── TaskCard.jsx        # Individual task card
│   │   ├── TaskModal.jsx       # Create/Edit task modal
│   │   └── StatsBar.jsx        # Statistics dashboard
│   ├── hooks/
│   │   ├── useLocalStorage.js  # localStorage hook
│   │   └── useTheme.js         # Theme management hook
│   ├── utils/
│   │   └── taskHelpers.js      # Task utility functions
│   ├── constants/
│   │   └── taskData.js         # Categories, priorities, colors
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 💡 Usage

### Creating a Task
1. Click the "+" floating action button (bottom right)
2. Fill in task details (title is required)
3. Click "Create Task"

### Editing a Task
1. Click the edit icon on any task card
2. Modify task details
3. Click "Update Task"

### Deleting a Task
1. Click the trash icon on any task card
2. Confirm deletion in the dialog

### Filtering Tasks
1. Use the filter bar to select category, priority, or status
2. Use the search bar in the header for text search
3. Click "Clear all" to reset filters

### Toggle Theme
- Click the sun/moon icon in the header to switch themes

## 🎯 Task Data Model

```javascript
{
  id: "unique-uuid",
  title: "string",
  description: "string",
  category: "work" | "personal" | "study" | "health" | "shopping",
  priority: "high" | "medium" | "low",
  completed: boolean,
  dueDate: "ISO date string",
  createdAt: "ISO date string",
  updatedAt: "ISO date string"
}
```

## 🎨 Color Scheme

The application uses a modern color palette with support for both light and dark modes:

- **Primary:** Blue tones for main actions and highlights
- **Categories:** 
  - Work: Blue
  - Personal: Green
  - Study: Purple
  - Health: Red
  - Shopping: Yellow
- **Priority:**
  - High: Red
  - Medium: Yellow
  - Low: Green

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔧 Customization

### Adding New Categories

Edit `src/constants/taskData.js`:

```javascript
export const CATEGORIES = [
  // Add your custom category
  { id: 'custom', name: 'Custom', color: 'indigo', icon: '🎨' },
];
```

### Changing Theme Colors

Edit `tailwind.config.js` to customize the color palette.

## 🚀 Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📄 License

This project is created for educational purposes as part of CPSC 349 - Web Front-End Engineering course.

## 👨‍💻 Developer

Duong Vu

## 🙏 Acknowledgments

- React Icons for the beautiful icon set
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing fast build tool
