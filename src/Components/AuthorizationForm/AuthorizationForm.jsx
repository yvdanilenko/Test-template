import React from "react";

class AuthorizationForm extends React.Component {
  initialState = { email: "", password: "" };
  state = { ...this.initialState };

  onChange = (evt) => {
    // console.log(evt.target.name)
    // console.log(evt.target.value)
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { email, password } = this.state;
    if (email && password) {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  };

  render() {
    const { email, password } = this.state;
    const { onChange, onSubmit } = this;

    // console.log(this.state)

    return (
      <>
        <form onSubmit={onSubmit}>
          <label>
            Email
            <input name="email" value={email} onChange={onChange} />
          </label>

          <label>
            Password
            <input name="password" value={password} onChange={onChange} />
          </label>

          <label>
            Submit
            <input name="submit" type="submit" />
          </label>
        </form>
      </>
    );
  }
}

export default AuthorizationForm;
