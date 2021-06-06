import React, { Component } from "react";
import TodoItems from "./ToDoItems";
import "./ToDoList.css";
import AnswerContainer from "./AnswerContainer";
//var fks;
class TodoList extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
            items: []
          };

        this.addItem = this.addItem.bind(this);
      }
       
      addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
          //fks = 'this._inputElement.value';
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
          this._inputElement.value = "";
        } 
        console.log(this.state.items);   
        e.preventDefault();
        }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>      
          <input ref={(a) => this._inputElement = a} 
           placeholder="Enter Answer">
            </input>
            <button type="Submit">add</button>
      
          </form>
          <AnswerContainer answ={"cryptoauthors"}/> 
{/*           
          Just need to link this to last answer in item list  */}
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}
export default TodoList;
