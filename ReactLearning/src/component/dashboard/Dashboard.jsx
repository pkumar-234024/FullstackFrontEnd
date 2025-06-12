import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
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

  const navItems = [
    { path: "", icon: "fa-home", label: "Dashboard", exact: true },
    { path: "projects", icon: "fa-project-diagram", label: "Projects" },
    { path: "tasks", icon: "fa-tasks", label: "Tasks" },
    { path: "reports", icon: "fa-chart-bar", label: "Reports" },
    { path: "settings", icon: "fa-cog", label: "Settings" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "←" : "→"}
        </button>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={`/dashboard/${item.path}`}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
              end={item.exact}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
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

        {/* Dashboard Content with Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <DashboardHome projects={projects} tasks={tasks} user={user} />
            }
          />
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
