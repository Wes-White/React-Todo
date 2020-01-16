import React from "react";

const defaultTasks = [
  //using this to check if app is working with generic data
  {
    todo: "Learn Class components",
    id: 1,
    completed: false
  },
  {
    todo: "Use Class components",
    id: 2,
    completed: false
  },
  {
    todo: "Miss Hooks :(",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: defaultTasks,
      newTask: ""
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
