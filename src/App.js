import React from "react";
import "./App.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const defaultTodos = [
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
      todos: defaultTodos,
      newTodo: ""
    };
  }

  toggleItem = id => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: newTodos
    });
  };

  addtodo = todo => {
    const newtodo = {
      todo: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newtodo]
    });
  };

  handleChanges = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addtodo(this.state.todo);
    e.target.reset();
  };

  handleClear = e => {
    e.preventDefault();
    let newList = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos: newList });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h1>My Todo List!</h1>
        <TodoForm
          addtodo={this.addtodo}
          handleSubmit={this.handleSubmit}
          handleChanges={this.handleChanges}
          todo={this.todo}
          handleClear={this.handleClear}
        />
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
