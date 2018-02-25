
//This is your top level React component, you may change everything

import React from 'react';
import { connect } from 'react-redux';
import logo from '../assets/spotim-logo.jpg';
import {Container, Image} from 'semantic-ui-react';
import styled from 'styled-components';
import MessageInput from './MessageInput';
import MessagesList from './MessagesList';
import { connect as connectServer } from '../actions/server';
import { sendMessage } from '../actions/messages';
import { changeUserName } from '../actions/user';
import recompose from '../helpers/recompose';

const Logo = styled.div`
  img{
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;      
  }
`;


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  componentWillMount() {
    this.props.connectServer();
  }

  onChangeUser = (username) => {
    this.props.changeUserName(username);
  }

  onSendMessage = () => {
    this.props.sendMessage(this.state.message);
    this.setState({ message: '' });
  }

  onChangeMessage = (message) => {
    this.setState({ message });
  }

  render() {
    const { message } = this.state;
    const { user, messages } = this.props;
    return <Container>
      <Container className={'spotim-header'}>
        <div className={'spotim-title'}>
          Welcome to the Spot.IM Chat app
        </div>
        <div>
          <Logo>
            <Image size={'tiny'} src={logo} />
          </Logo>
        </div>
      </Container>
      <MessagesList messages={messages} />
      <MessageInput 
        onSendMessage={this.onSendMessage}
        onMessageChange={this.onChangeMessage}
        onUserChange={this.props.changeUserName}
        avatar={user.avatar}
        username={user.username}
        message={message}
      />
    </Container>
  }
}

const mapStateToProps = state => ({
  user: state.user,
  messages: recompose(state.messages.items)
});

const mapDispatchToProps = {
  connectServer,
  sendMessage,
  changeUserName
}

export default connect(mapStateToProps, mapDispatchToProps)(App)