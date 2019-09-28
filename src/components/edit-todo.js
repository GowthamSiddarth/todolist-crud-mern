import React, { Component } from "react";
import axios from 'axios';

class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: this.props.match.params.description,
            responsible: '',
            priority: '',
            completed: false
        };

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleResponsibleChange = this.handleResponsibleChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleCompletedChange = this.handleCompletedChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/todo/' + this.props.match.params.id)
            .then(res => {
                const todo = res.data.message;
                this.setState({
                    description: todo.description,
                    responsible: todo.responsible,
                    priority: todo.priority,
                    completed: todo.completed
                });
            })
            .catch(err => console.log(err));
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleResponsibleChange(e) {
        this.setState({
            responsible: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleCompletedChange(e) {
        this.setState({
            completed: !this.state.completed
        });
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const newTodo = {
            description: this.state.description,
            responsible: this.state.responsible,
            priority: this.state.priority,
            completed: this.state.completed
        };

        axios.put('http://localhost:4000/api/todo/update/' + this.props.match.params.id, newTodo)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.handleResponsibleChange}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.priority === 'Low'}
                                onChange={this.handlePriorityChange}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.priority === 'Medium'}
                                onChange={this.handlePriorityChange}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.priority === 'High'}
                                onChange={this.handlePriorityChange}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                            id="completedCheckbox"
                            type="checkbox"
                            name="completedCheckbox"
                            onChange={this.handleCompletedChange}
                            checked={this.state.completed}
                            value={this.state.completed}
                        />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default EditTodo;