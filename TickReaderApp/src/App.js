import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';

class App extends Component {
render(){
    return (
      <div className="App">
        Reuter Pricing Application 
        
      <TodoApp></TodoApp>
      </div>
    );
}
}

export default App;
