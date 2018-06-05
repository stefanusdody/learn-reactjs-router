import React, { Component } from 'react';

class mainPages extends Component {
    render() {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todolist">Todo List</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Route path="/" component={Home} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/about" component={About}/>
          </div>
        </Router>
      );
    }
}

export default App;
