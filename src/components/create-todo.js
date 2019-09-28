import React, { Component } from "react";

class CreateTodo extends Component {
    
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
            <div style={{ marginTop: 10 }}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
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
                        <input type="text"
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
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div >
        );
    }
}

export default CreateTodo;