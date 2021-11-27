import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';



const App = () => {
const[todos,setTodos] = useState([]);


const saveTodo=(todo) =>{
    console.log(todo);
    // todos.push(todo);
    setTodos([...todos,todo]);
};


//1)
// return (
// <>
// <TodoForm saveTodo={saveTodo}/>
// <div>Looking Alaska</div>
// {todos.map(({title,description,priority},index) => (
// <Todo title={title} description={description} priority={priority} key={index}/>
// ))}
// </>
// );


//2)
// return (
//     <>
//     <TodoForm saveTodo={saveTodo}/>
//     <div>Fav Band</div>
//     {todos.map(({title,description,priority},index) => (
//     <Todo title={title} description={description} priority={priority} key={index}/>
//     ))}
//     </>
//     );

//3)
// return (
//     <>
//     <TodoForm saveTodo={saveTodo}/>
//     <div><b>How to Cook</b></div>
//     {todos.map(({title,description,priority},index) => (
//     <Todo title={title} description={description} priority={priority} key={index}/>
//     ))}
//     </>
//     );
};

ReactDOM.render(<App />, document.getElementById('root'));