import { useState } from 'react'



function Todoform({ addTodo }) {
    const [form, setForm] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        if (!form) return;
        addTodo(form);
        setForm("");
    };

    const inputOnChange = (e) => {
        setForm(e.target.value)
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-input">
                <h3 > Add Todo</h3> <br />
                <input type="text" value={form}
                    onChange={inputOnChange} placeholder="Add new todo" />
            </div>
            <div >
                <button className="btn-submit" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Todoform










// import { useState } from 'react'

// function Todoform({ allTodo }) {
//     const [form, setForm] = useState("");

//     const onSubmit = (event) => {
//         event.preventDefault();
//         if (!form) return;
//         allTodo(form);
//         setForm("");

//     };
//     const onChangeInput = (element) => {
//         setForm(element.target.value);
//     }

//     return (
//         <form onSubmit={onSubmit}>
//             <div>
//                 <input name="todo"
//                     placeholder="Add New Todo"
//                     value={form}
//                     type="text"
//                     onChange={onChangeInput} />
//             </div>
//             <div className="btn">
//                 <button type="submit">submit</button>
//             </div>
//         </form>
//     )
// }

// export default Todoform
