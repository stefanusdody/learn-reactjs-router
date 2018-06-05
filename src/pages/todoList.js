import React, { Component } from "react";
import '../App.css';
import Output from "../small/output"
import { Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
      input_update: "",
      edit_form: false,
      update_target: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.editFormTogle = this.editFormTogle.bind(this);
    this.deletetodos = this.deletetodos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleChange(event) {
    var param = event.target.name;
    var value = event.target.value;

    this.setState({ [param]: value });
    // console.log(this.state.review);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      todos: prevState.todos.concat(prevState.input),
      input: ""
    }));
  }

  editFormTogle(target_index) {
    this.setState((prevState, props) => ({
      edit_form: !prevState.edit_form,
      update_target: target_index
    }));
  }

  deletetodos(target_index) {
    console.log(target_index);
    this.setState((prevState, props) => ({
      todos: prevState.todos.filter((todo, index) => index !== target_index)
    }));
  }

  updateTodo() {
    let todos = Object.assign(this.state.todos);
    // let todos = this.state.todos;

    todos[this.state.update_target] = this.state.input_update;
    this.setState(prevState => ({
      // todos: [
      //   ...prevState.todos
      //     .slice(0, this.state.update_target)
      //     .concat(this.state.input_update),
      //   ...prevState.todos.slice(this.state.update_target + 1)
      // ],
      todos: todos,
      edit_form: false
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title" onClick={this.deletetodos}>
            Impact todo
          </h1>
          <input className="inputTitle"
            type="text"
            onChange={this.handleChange}
            id="input"
            name="input"
            value={this.state.input}
          />
          <Button onClick={this.handleClick} color="warning">Add</Button>{' '}
          {/*<div className="output" />*/}
          <Output
            todos={this.state.todos}
            editFormTogle={this.editFormTogle}
            deletetodos={this.deletetodos}
          />
            <div>

            </div>
        </div>
      </div>
    );
  }

//   constructor() {
//    super();
//    this.state = {
//      contacts: [],
//      inputName: "",
//      inputPhone: "",
//      inputAddress: "",
//   };
//   this.handleChangeName = this.handleChangeName.bind(this);
//   this.handleChangePhone = this.handleChangePhone.bind(this);
//   this.handleChangeAddress = this.handleChangeAddress.bind(this);
//   this.handleClick = this.handleClick.bind(this);
//  }
//
// handleChangeName(event) {
//  let value = event.target.value;
//  this.setState(() =>{
//    return {
//      inputName: value
//    };
//  });
// }
//
// handleChangePhone(event) {
//   let value = event.target.value;
//   this.setState({inputPhone: value})
// }
//
// handleChangeAddress(event) {
//   let value = event.target.value;
//   this.setState({inputAddres: value})
// }
//
// handleClick() {
//   if (this.state.inputName !== "" && this.state.inputPhone !== "" && this.state.inputAddress !== "") {
//     this.setState( prevState =>{
//       return{
//         contacts: prevState.contacts.concat({
//           "name": this.state.inputName,
//           "phone_number": this.state.inputPhone,
//           "Address": this.state.inputAddres,
//         }),
//          inputName: "",
//          inputPhone: "",
//          inputAddres: "",
//       };
//     });
//   }
// }
//
// render () {
//   return (
//   <div>
//     <h1 className="title">Address Book</h1>
//       <div className="">
//         <label className="">Contact Name</label>
//           <div className="">
//             <input
//             className="name"
//             type="text"
//             onChange={this.handleChangeName}
//             value={this.state.inputName}
//             placeholder="Insert Fullname"/>
//           </div>
//        </div>
//        <div className="">
//          <label className="">Phone Number</label>
//            <div className="">
//              <input
//              className="name"
//              type="text"
//              onChange={this.handleChangePhone}
//              value={this.state.inputPhone}
//              placeholder="Insert Phone number"/>
//            </div>
//         </div>
//         <div className="">
//           <label className="">Address</label>
//             <div className="">
//               <input
//               className="name"
//               type="text"
//               onChange={this.handleChangeAddress}
//               value={this.state.inputAddres}
//               placeholder="Insert Address"/>
//             </div>
//          </div>
//          <button onClick={this.handleClick}>Submit</button>
//          <br/>
//          <br/>
//          <Output contacts={this.state.contacts}/>
//
//   </div>);
//   }
}
 export default App
