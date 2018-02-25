
import React from 'react';
import PropTypes from 'prop-types';
import { Comment, Segment } from 'semantic-ui-react';
import  dateFormat from 'dateformat';

const MessagesList = ({ messages }) => (
  <Comment.Group>
    {!messages.length && <Segment raised>No messages so far</Segment>}
    {messages.map((message, key) => (
      <Comment key={key}>
        <Comment.Avatar src={message.avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{message.username}</Comment.Author>
          <Comment.Metadata>
            <div>{dateFormat(message.createAt, 'mmm dS, h:MM TT')}</div>
          </Comment.Metadata>
          <Comment.Text>{message.text}</Comment.Text>
        </Comment.Content>
      </Comment>
    ))}
  </Comment.Group>
)

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessagesList;