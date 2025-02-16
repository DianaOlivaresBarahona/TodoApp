import React from "react";
import "./CompletedTaskPage.css";

const CompletedTasksPage = ({ completedList, deleteCompletedTodo }) => {
  return (
    <div>
      <h1>Finished Tasks</h1>
      {completedList.length === 0 ? (
        <div className="no-todo-card">
          <p>No finished tasks yet.</p>
        </div>
      ) : (
        <ul className="task-list">
          {completedList.map((task) => (
            <li key={task.id} className="task-card">
              <p className="task-text">{task.todo}</p>
              <div className="button-container">
                <button
                  className="delete-button"
                  onClick={() => deleteCompletedTodo(task.id)}
                >
                  <span className="delete-icon">×</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTasksPage;
