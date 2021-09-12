import React from 'react';
import moment from 'moment';
import '../../style/Chat/Message.css';

export default function Message(props) {
	moment.locale();
	return (
		<div className='message'>
			<div className='message-left'>
				<div className='message-avatar' style={{background: `url(${props.avatar}) center center / cover`}}></div>
			</div>
			<div className='message-right'>
				<div className='message-heading'>
					<div className='message-author'>{props.author}</div>
					<div className='message-date'>{moment(props.date).calendar()}</div>
				</div>
				<div className='message-body'>
					{props.content}
				</div>
			</div>
		</div>
	);
}