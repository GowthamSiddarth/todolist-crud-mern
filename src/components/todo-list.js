import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Todo(props) {
    return (
        <tr>
            <td>{props.todo.description}</td>
            <td>{props.todo.responsible}</td>
            <td>{props.todo.priority}</td>
            <td>
                <Link to={"update/" + props.todo._id}>Update</Link>
            </td>
        </tr>
    );
}

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/todo/list')
            .then(res => {
                this.setState({ todos: res.data });
            })
            .catch(err => console.log(err));
    }

    getTodoList() {
        return this.state.todos.map((todo, idx) => {
            return <Todo todo={todo} key={idx} />
        });
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getTodoList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;