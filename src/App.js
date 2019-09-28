import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './components/todo-list';
import EditTodo from './components/edit-todo';
import CreateTodo from './components/create-todo';


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">TodoList App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" exact component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
