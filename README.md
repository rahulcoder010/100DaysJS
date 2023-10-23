# 100DaysJS
100 Days to JS Master


What is Websocket?

Websockets is a communication protocol that provides full-duplex communication channels over a single TCP connection. It allows real-time data transfer between a client and a server.

Example:

```javascript
// Client-side code
const socket = new WebSocket('wss://example.com');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

// Connection closed
socket.addEventListener('close', function (event) {
    console.log('Server closed the connection');
});
```

Description:

The example above demonstrates how to use Websockets in JavaScript. It creates a new WebSocket instance and establishes a connection with the server. Once the connection is open, it sends a 'Hello Server!' message to the server. Whenever a message is received from the server, it logs the message to the console. If the server closes the connection, it logs a message indicating the closure.

Websockets are commonly used in applications that require real-time updates, such as chat applications, collaborative editing tools, and online gaming platforms. They provide a reliable, low-latency, and bidirectional communication channel between the client and the server.

Please update README.md with the above content.