import React from "react";

const DashboardHome = ({ projects, tasks, user }) => {
  return (
    <div className="dashboard-content">
      <header className="welcome-section">
        <h1>Hello, {user?.email?.split("@")[0] || "User"}!</h1>
        <p>Here's your progress for today</p>
      </header>

      {/* Project Summary Cards */}
      <section className="project-summary">
        {/* Your existing project cards code */}
      </section>

      {/* Task List */}
      <section className="task-list">
        {/* Your existing task list code */}
      </section>
    </div>
  );
};

export default DashboardHome;
