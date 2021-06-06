import React, { Component } from "react";

var xhr;
class AnswerContainer extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          answer: "..."
        };
    
        this.processRequest = this.processRequest.bind(this);
      }
    
      componentDidMount() {
        xhr = new XMLHttpRequest();
        var usersEntry = this.props.answ;
        var link_string = 'https://crypto-authors-cypher.herokuapp.com/check-answer?answer=';
        var answerlink = (link_string.concat(usersEntry)); // UsersEntry Yet to be put in
        xhr.open("GET", answerlink, true);
        xhr.send();
        console.log(answerlink);
        xhr.addEventListener("readystatechange", this.processRequest, false);
      }
    
      processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
    
          this.setState({
            answer: response.text
          });
        }
      }
    
      render() {
        return (
            <div>{this.state.answer}</div>
        );
      }
    };

export default AnswerContainer;