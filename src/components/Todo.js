import React from "react";

const Todo = props => {
    return (
        console.log("Todoprops", props),
        (
            <div
                className={`item${props.item.completed ? " completed" : ""}`}
                onClick={e => props.toggleCompleted(props.item.id)}
            >
                <p>{props.item.task}</p>
            </div>
        )
    );
};

export default Todo;
