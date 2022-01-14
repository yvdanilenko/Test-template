import { Component } from "react";
import "./App.css";

import data from "../../db/data.json";
import CustomersList from "../CustomersList/CustomersList";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";

// function App() {
//   return (
//     <div>
//       <AuthorizationForm />
//       <CustomersList />
//     </div>
//   )
// }

class App extends Component {
  state = { key: false };

  handleSubmit = (user) => {
    if (user) {
      this.setState({ key: true });
    }
  };

  render() {
    const { key } = this.state;
    const { handleSubmit } = this;
    return (
      <div>
        {key ? (
          <CustomersList title="User" arrCustomers={data} />
        ) : (
          <AuthorizationForm handleSubmit={handleSubmit} />
        )}
      </div>
    );
  }
}

export default App;
