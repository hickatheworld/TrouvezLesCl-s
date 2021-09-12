import React from 'react';
import Message from './Message';
import '../../style/Chat/Chat.css';
export default function Chat(props) {
	return (
		<div className='chat'>
			<div className='chat-heading'>
				<div className='chat-name'>#{props.channelName}</div>
				<div className='chat-desc'>{props.desc}</div>
			</div>
			<div className='chat-body'>
				{props.messages.map(m => <Message {...m}></Message>)}
			</div>
			<div className='chat-input-container'>
				<input type='text' className='chat-input' placeholder='Envoyer un message...' />
				<button className='send-message'>
					<span className='material-icons'>send</span>
				</button>
			</div>
		</div>
	);
}