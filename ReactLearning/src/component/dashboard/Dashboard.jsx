import { useState } from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const user = useSelector((state) => state.user.user);

  const projects = [
    { id: 1, name: "Website Redesign", progress: 75, tasks: 12, completed: 8 },
    { id: 2, name: "Mobile App Dev", progress: 45, tasks: 20, completed: 9 },
    { id: 3, name: "Marketing Campaign", progress: 90, tasks: 8, completed: 7 },
  ];

  const tasks = [
    {
      id: 1,
      title: "Design Homepage",
      project: "Website Redesign",
      dueDate: "2024-06-15",
      status: "In Progress",
    },
    {
      id: 2,
      title: "API Integration",
      project: "Mobile App Dev",
      dueDate: "2024-06-18",
      status: "Pending",
    },
    {
      id: 3,
      title: "Content Writing",
      project: "Marketing Campaign",
      dueDate: "2024-06-14",
      status: "Completed",
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? "←" : "→"}
        </button>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item">
            <i className="fas fa-project-diagram"></i>
            <span>Projects</span>
          </a>
          <a href="#" className="nav-item">
            <i className="fas fa-tasks"></i>
            <span>Tasks</span>
          </a>
          <a href="#" className="nav-item">
            <i className="fas fa-chart-bar"></i>
            <span>Reports</span>
          </a>
          <a href="#" className="nav-item">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Navbar */}
        <nav className="top-navbar">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="nav-actions">
            <button className="notification-btn">
              <i className="fas fa-bell"></i>
              <span className="notification-badge">3</span>
            </button>
            <div className="user-profile">
              <img src="https://via.placeholder.com/40" alt="User avatar" />
              <span>{user?.email || "User"}</span>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <header className="welcome-section">
            <h1>Hello, {user?.email?.split("@")[0] || "User"}!</h1>
            <p>Here's your progress for today</p>
          </header>

          {/* Project Summary Cards */}
          <section className="project-summary">
            <h2>Active Projects</h2>
            <div className="project-cards">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <h3>{project.name}</h3>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="project-stats">
                    <span>
                      {project.completed}/{project.tasks} tasks
                    </span>
                    <span>{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Task List */}
          <section className="task-list">
            <h2>Recent Tasks</h2>
            <div className="task-table">
              {tasks.map((task) => (
                <div key={task.id} className="task-item">
                  <label className="task-checkbox">
                    <input
                      type="checkbox"
                      checked={task.status === "Completed"}
                      onChange={() => {}}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <div className="task-info">
                    <h4>{task.title}</h4>
                    <span>{task.project}</span>
                  </div>
                  <div className="task-due-date">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </div>
                  <button className="timer-btn">
                    <i className="fas fa-play"></i>
                    Start Timer
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
