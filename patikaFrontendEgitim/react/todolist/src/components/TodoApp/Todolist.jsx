
function Todolist({ todo, index, markTodo, deleteTodo }) {


    return (
        <div className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <button className="list-btn" onClick={() => markTodo(index)}>✓</button>{' '}
                <button className="list-btn" onClick={() => deleteTodo(index)}>❌</button>
            </div>
        </div>
    )
}

export default Todolist












// import React from 'react'

// function Todolist(todo, index, addTodo, deleteTodo) {
//     return (
//         <div className="todo">
//             <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
//             <div>
//                 <button className="btn" onClick={() => addTodo(index)}>✔</button>{" "}
//                 <button className="btn" onClick={() => deleteTodo(index)}>❌</button>
//             </div>

//         </div>
//     )
// }

// export default Todolist
