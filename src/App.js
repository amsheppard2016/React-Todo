import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./components/Todo.css";

const todoItems = [
    {
        task: "Organize Garage",
        id: 1528817077241,
        completed: false
    },
    {
        task: "Bake Cookies",
        id: 1528817084342,
        completed: false
    },
    {
        task: "Cook Dinner",
        id: 1528817084343,
        completed: false
    },
    {
        task: "Do Laundry",
        id: 1528817084344,
        completed: false
    }
];
class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
        super();
        this.state = {
            todoItems
        };
    }

    toggleCompleted = itemId => {
        console.log("itemId: ", itemId);
        this.setState({
            todoItems: this.state.todoItems.map(item => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            })
        });
    };
    addItem = itemTask => {
        this.setState({
            todoItems: [
                ...this.state.todoItems,
                {
                    task: itemTask,
                    completed: false,
                    id: Math.random()
                }
            ]
        });
    };

    clearCompleted = () => {
        console.log("clearCompleted");
        this.setState({
            todoItems: this.state.todoItems.filter(item => {
                return !item.completed;
            })
        });
    };
    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>To Do App!</h1>
                    <TodoForm addItem={this.addItem} />
                </div>
                <TodoList
                    todoItems={this.state.todoItems}
                    toggleCompleted={this.toggleCompleted}
                    clearCompleted={this.clearCompleted}
                />
            </div>
        );
    }
}

export default App;
