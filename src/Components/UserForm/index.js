import React from "react";

import "./style.css";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      gender: ""
    };
  }

  //  executed when something changes in name input field
  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  //  executed when something changes in email input field
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  //  executed when something changes in phone input field
  onPhoneChange = (e) => {
    this.setState({
      phoneNumber: e.target.value
    });
  };

  //  executed when something changes in password input field
  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  //  executed when something changes in gender select field
  onGenderChange = (e) => {
    this.setState({
      gender: e.target.value
    });
  };

  //  executed when user click on submit button to submit the form
  onSubmit = () => {
    const data = `
    Name: ${this.state.name},
    Email: ${this.state.email},
    Phone: ${this.state.phoneNumber},
    Gender: ${this.state.gender},
    Password: ${this.state.password},
    `;

    window.alert(data);
    this.clearForm();
  };

  //  clears the form
  clearForm = () => {
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      gender: ""
    });
  };

  render = () => {
    return (
      <div className="container">
        <div className="form-container">
          <p className="title">-------- User Form -----------</p>
          <input
            onChange={this.onNameChange}
            value={this.state.name}
            type="text"
            placeholder="Enter name"
          />
          <input
            onChange={this.onEmailChange}
            value={this.state.email}
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={this.onPhoneChange}
            value={this.state.phoneNumber}
            type="text"
            placeholder="Enter Phone number"
          />

          <select onChange={this.onGenderChange} value={this.state.gender}>
            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            onChange={this.onPasswordChange}
            value={this.state.password}
            type="password"
            placeholder="Enter Password"
          />

          <button onClick={this.onSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    );
  };
}

export default Forms;
