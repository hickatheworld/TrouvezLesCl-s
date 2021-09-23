import logo from './assets/logo.png';
import './style/App.css';
import React from 'react';
import Chat from './components/Chat/Chat';
import io from 'socket.io-client';

class App extends React.Component {
	constructor() {
		super();
		this.profile = {
			author: 'Test',
			avatar: 'https://media.discordapp.net/attachments/627945108993605642/884504796369915934/magik.png'
		};
		this.state = {
			messages: []
		};
	}

	componentDidMount() {
		this.socket = io.connect('http://localhost:8080');
		this.socket.on('messageCreate', msg => {
			const messages = [...this.state.messages, msg];
			this.setState({messages});
		});
	}

	sendMessage(content) {
		this.socket.emit('messageCreate', {...this.profile, content});
	};

	render() {
		return (<div className='App'>
			{/* <img src={logo} alt='Trouvez les clés!' style={{width: '40%'}} />
			<p>new random project haha</p> */}
			<Chat messages={this.state.messages} channelName='le-quai' desc={'Je sais pas mais bite bite bite'} sendMessage={this.sendMessage.bind(this)}></Chat>
		</div>);
	}

}
export default App;
