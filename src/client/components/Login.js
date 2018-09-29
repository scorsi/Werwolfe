import {Component} from "inferno"
import {connect} from '@cerebral/inferno';
import {signal} from "cerebral/lib/tags";

import FormInput from "./forms/FormInput";
import Button from "./forms/Button";


export default connect({
    login: signal`login`
  },
  class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: ''
      }
    }

    onUsernameChange(username) {
      this.setState({username});
    }

    onSubmitClick() {
      this.props.login({username: this.state.username});
    }

    render() {
      return (
        <div>
          <FormInput value={this.state.username} onChange={this.onUsernameChange.bind(this)}/>
          <Button onClick={this.onSubmitClick.bind(this)}>Connection</Button>
        </div>
      )
    }

  }
)
