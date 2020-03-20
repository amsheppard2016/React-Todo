import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemTask: ""
        };
    }

    handleChanges = e => {
        this.setState({ itemTask: e.target.value });
    };

    handleAddItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemTask);
        this.setState({ itemTask: "" });
    };

    render() {
        console.log("renderingform");
        return (
            <form onSubmit={this.handleAddItem}>
                <input
                    type="text"
                    name="item"
                    value={this.state.itemTask}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;
