import {Component} from "inferno"

import FormInput from "./forms/FormInput";


export default class Login extends Component {
  state = {
    username: ""
  };
  
  onUsernameChange = (username) => {
    this.setState({username});
  };
  
  render () {
    return (
      <div>
        <FormInput value={this.state.username} onChange={this.onUsernameChange} />
      </div>
    )
  }
  
}
