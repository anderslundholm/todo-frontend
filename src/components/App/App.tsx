import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Home from '../../routes/Home/Home'
import Todos from '../../routes/Todos/Todos'
import SingleTodo from '../../routes/Todos/SingleTodo'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
    <div className="container">
      <Header />
      <div className="col-xs-8">
        <Switch>
          <Route path="/todos/:id" component={SingleTodo} />
          <Route path="/todos/" component={Todos} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
