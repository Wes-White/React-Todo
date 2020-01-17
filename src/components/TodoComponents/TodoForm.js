import React from "react";

const TodoForm = props => {
  return (
    <div>
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
