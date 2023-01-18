
import './App.css';
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo';

function App() {

  const allTodos=useSelector(state=>state.TodoReducer.todos)
console.log(allTodos)


  return (

    <div className="App">
      <header className="App-header">
        <AddTodo></AddTodo>
  <TodoList allTodos={allTodos}></TodoList>

      </header>
    </div>
  );
}

export default App;
