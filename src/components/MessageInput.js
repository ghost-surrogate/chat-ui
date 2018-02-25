
import React from 'react';
import PropTypes from 'prop-types';
import { Grid,  Input, Button, Image } from 'semantic-ui-react';

const MessageInput = ({ avatar, username, message, onUserChange, onMessageChange, onSendMessage }) => (
  <Grid className="msg-container">
    <Grid.Row>
      <Grid.Column width={1} className="no-padding">
        <Image size="mini" src={avatar} />
      </Grid.Column>
      <Grid.Column width={4} className="no-padding full">
        <Input className="msg-username" placeholder='Nickname' value={username} onChange={(e) => onUserChange(e.target.value)}/>
      </Grid.Column>
      <Grid.Column width={11} className="no-padding">
        <Input className="msg-input" icon placeholder='Message' value={message} onChange={(e) => onMessageChange(e.target.value)} action>
          <input />
          <Button type='button' onClick={onSendMessage}>Send</Button>
        </Input>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

MessageInput.propTypes = {
  user: PropTypes.string,
  message: PropTypes.string,
  onUserChange: PropTypes.func.isRequired,
  onMessageChange: PropTypes.func.isRequired
};

export default MessageInput;