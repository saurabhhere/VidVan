import React,{Component} from 'react';

import './Input.css';

import GetInscriptTyping from './script/InscriptKeyBoard';
import $ from 'jquery';


class Input extends Component{

  componentDidMount(){
    $(document).ready(function () {
      GetInscriptTyping();
  });
  }

  render(){
    return(
    <body>
      <form className="chat-form">
        <input
          id="txtInscript"
          className="chat-input"
          type="text"
          placeholder="Type a message..."
          value={this.props.message}
          onChange={({ target: { value } }) => this.props.setMessage(value)}
          
        />
        <button className="chat-sendButton" onClick={e => this.props.sendMessage(e)}>Send</button>
      </form>
    </body>
    );
  }
}



export default Input;