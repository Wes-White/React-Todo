import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="task"
          value={props.todo}
          onChange={props.handleChanges}
        />
        <button>Add Task</button>
        <button onClick={props.handleClear}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
