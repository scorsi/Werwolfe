import {Component} from 'inferno'
import {connect} from '@cerebral/inferno'
import {state, signal} from 'cerebral/lib/tags'


export default connect({
    messages: state`messages`,
    sendMessage: signal`sendMessage`
  },
  class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }

    setValue(value) {
      this.setState({
        value
      });
    };

    sendMessage() {
      if (this.state.value === '') return;
      this.props.sendMessage({message: this.state.value});
      this.setState({value: ''});
    }

    render() {
      return (
        <div>
          <ul>
            {this.props.messages.map((message, key) => (
              <li key={key}>{message}</li>
            ))}
          </ul>
          <hr/>
          <input className="form-control" value={this.state.value} onInput={(e) => this.setValue(e.target.value)}/>
          <button
            className="btn btn-primary"
            onClick={() => this.sendMessage()}
          >
            Send message
          </button>
        </div>
      );
    }
  }
)
