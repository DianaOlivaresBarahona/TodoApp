import React from "react";
import "./CompletedTaskPage.css";

const CompletedTasksPage = ({ completedList, deleteCompletedTodo }) => {
  return (
    <div>
      <h1>Slutförda uppgifter</h1>
      {completedList.length === 0 ? (
        <div className="no-todo-card">
          <p>Inga slutförda uppgifter ännu.</p>{" "}
        </div>
      ) : (
        <ul>
          {completedList.map((task) => (
            <li key={task.id}>
              {task.todo}{" "}
              <button onClick={() => deleteCompletedTodo(task.id)}>
                ❌ Ta bort
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTasksPage;
