import React, {useRef} from 'react';
import Message from './Message';
import '../../style/Chat/Chat.css';
export default function Chat(props) {
	const inputRef = useRef();
	const sendMessage = (e) => {
		const content = inputRef.current?.value;
		if (!content)
			return;
		if (e.type === 'keydown' && e.key !== 'Enter')
			return;
		inputRef.current.value = '';
		props.sendMessage(content);
	};
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
				<input type='text' className='chat-input' placeholder='Envoyer un message...' onKeyDown={sendMessage} ref={inputRef} />
				<button className='send-message' onClick={sendMessage}>
					<span className='material-icons'>send</span>
				</button>
			</div>
		</div>
	);
}