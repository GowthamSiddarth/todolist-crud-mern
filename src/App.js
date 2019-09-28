import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h2>TodoList MERN Stack</h2>
      </div>
      <Route path="/" exact component={TodoList} />
      <Route path="/edit/:id" exact component={EditTodo} />
      <Route path="/create" exact component={CreateTodo} />
    </Router>
  );
}

export default App;
