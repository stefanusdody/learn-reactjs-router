import React from "react";

function Output(props) {
  return (
    <div>
      <div className="output">
        {props.todos.map((todo, index) => (
          <div
            key={index}
            className="todo"
            onDoubleClick={() => props.editFormTogle(index)}
          >
            <div className="todo-text">{todo} </div>
            <div
              className="todo-delete"
              onClick={() => props.deletetodos(index)}
            >
              X
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div className="output">
    //   {props.contacts.map((todo, index) => (
    //     <div className="todo" key={index}>
    //       <div className="todo-text">Contact Name: {todo.name}</div>
    //       <div className="todo-text">Phone Number: {todo.phone_number}</div>
    //       <div className="todo-text">Address: {todo.Address}></div>
    //       <button onClick={() => props.editFormTogle(index)}>E</button>
    //       <button onClick={() => props.deletetodos(index)}>X</button>
    //     </div>
    //   ))}
    // </div>
  )
}

export default Output
