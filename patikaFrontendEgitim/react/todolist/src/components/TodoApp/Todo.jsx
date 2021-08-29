import { useState } from 'react'

import Todoform from './Todoform';
import Todolist from './Todolist'
import "./style.css"

function Todo() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            isDone: true,
            text: "Read book"
        },
        {
            id: 2,
            text: "Go to Gym",
            isDone: true
        },
        {
            id: 3,
            text: "Write Code",
            isDone: false
        },

    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <div className="container">
                <h1 className="h1-todolist" >Todo List</h1>
                <Todoform addTodo={addTodo} />
                <div className="todos">
                    {todos.map((todo, index) => (
                        <div key={index}>
                            <div>
                                <Todolist

                                    index={index}
                                    todo={todo}
                                    markTodo={markTodo}
                                    deleteTodo={deleteTodo}
                                />
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo



// import { useState } from 'react'
// import Todoform from './Todoform'
// import Todolist from './Todolist'

// function Todo() {
//     const [todos, setTodos] = useState([{
//         id: 1,
//         text: "learn JavaScript",
//         isDone: true
//     },
//     {
//         id: 2,
//         text: "read a book",
//         isDone: false,

//     },
//     {
//         id: 3,
//         text: "have a walk",
//         isDone: false
//     }
//     ]);

//     const allTodo = text => {
//         const newTodos = [...todos, { text }];
//         setTodos(newTodos);
//     };

//     const addTodo = index => {
//         const newTodos = [...todos];
//         newTodos[index].isDone = true;
//         setTodos(newTodos);
//     };


//     const deleteTodo = index => {
//         const newTodos = [...todos];
//         newTodos.splice(index, 1);
//         setTodos(newTodos);
//     };



//     return (

//         <div className="container">
//             <h1>Todo List</h1>
//             <Todoform allTodo={allTodo} />
//             <div>
//                 {todos.map((todo, index) => (
//                     <ul key={index}>
//                         <li>
//                             <Todolist

//                                 index={index}
//                                 todo={todo}
//                                 addTodo={addTodo}
//                                 deleteTodo={deleteTodo}
//                             />
//                         </li>
//                     </ul>

//                 ))}
//             </div>
//         </div>
//     )

// }

// export default Todo
