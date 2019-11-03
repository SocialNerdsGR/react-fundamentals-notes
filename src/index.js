import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
  state = {
    text: '',
    checkbox: false,
    select: 'Java'
  };

  checkboxHandler = (event) => {
    this.setState({checkbox: event.target.checked});
  };

  selectHandler = (event) => {
    this.setState({select: event.target.value});
  };

  textHandler = (event) => {
    this.setState({text: event.target.value});
  };

  fieldsHandler = (event) => {
    const value = event.target.type !== 'checkbox' ? event.target.value : event.target.checked;
    this.setState({[event.target.name]: value});
  };

  formHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const {text, checkbox, select} = this.state;
    return (
      <form onSubmit={this.formHandler}>
        <input type="text" value={text} name="text" onChange={this.fieldsHandler} />
        <select value={select} name="select" onChange={this.fieldsHandler}>
          <option>Java</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>
        <input type="checkbox" value={checkbox} name="checkbox" onChange={this.fieldsHandler} />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
