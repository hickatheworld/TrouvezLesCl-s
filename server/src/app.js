const http = require('http');
const {Server} = require('socket.io');

const server = http.createServer();
const io = new Server(server, {cors: {origin: '*'}});

io.on('connection', socket => {
	console.log('New socket:', socket.id);
	socket.on('messageCreate', msg => {
		console.log(msg);
		io.emit('messageCreate', {...msg, date: new Date()});
	});
});

server.listen(8080, () => {
	console.log('Listening...');
});