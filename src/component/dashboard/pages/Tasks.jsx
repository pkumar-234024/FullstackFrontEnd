import React from "react";

const Tasks = () => {
  return (
    <div className="dashboard-content">
      <header className="welcome-section">
        <h1>Tasks</h1>
        <p>Manage your tasks</p>
      </header>
      <div className="task-list">{/* Your tasks content */}</div>
    </div>
  );
};

export default Tasks;
