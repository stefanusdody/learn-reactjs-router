import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import Home from './pages/home';
import TodoList from "./pages/todoList";
import About from "./pages/about";



class App extends Component {
    render() {
      return (
        <Router>
         <div className="buttonList">
            <Button href="/" color="warning">Home</Button>{' '}
            <Button href="/todolist" color="warning">ToDoList</Button>{' '}
            <Button href="/about"color="warning">About</Button>{' '}
            <Route path="/" component={Home} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/about" component={About}/>
          </div>
        </Router>
      );
    }
}

export default App;
