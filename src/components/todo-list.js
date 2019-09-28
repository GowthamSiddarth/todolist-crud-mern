import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            responsible: '',
            priority: '',
            completed: false
        };

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleResponsibleChange = this.handleResponsibleChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleCompletedChange = this.handleCompletedChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleResponsibleChange(e) {
        this.setState({
            responsible: e.target.value
        })
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        })
    }

    handleCompletedChange(e) {
        this.setState({
            completed: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        this.state({
            description: '',
            responsible: '',
            priority: '',
            completed: false
        });
    }

    render() {
        return (
            <div>
                <p>Welcome to Todo List Component</p>
            </div >
        );
    }
}

export default TodoList;