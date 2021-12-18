# Colorful chat

Simple Socket.io and Express chat example. Easy to understand and extend.
Inspired from [Chat example](https://socket.io/get-started/chat/) by socket.io,
but I wanted chat with usernames and memory.

Live version: https://colorfulchat.herokuapp.com/

![Showcase](https://i.imgur.com/F03LJ7A.png)

## Installation
Download the repository and run `npm install`.

To run the server execute `node server` in the chat folder and go to
`127.0.0.1:3300` to see the application.

## How does it work?
We use express to deliver html and javascript file, then we connect client and
server using socket.io. Using socket.io both server and client can send messages.
HTML has two input fields and one button.

**Express** directs files from *public* folder to user using *app.use* and
*app.get*. It is also used to start the server using *server.listen*.

**Socket.io** fires five events. *Connection* is transmitted when new client
joins the server. *Disconnect* is used when client leaves the server.
*SendMessage* is custom event that user transmits after pressing a button.
Likewise *receiveMessage* is also custom event which uses server to send
message. Finally at the start of connection, server uses custom *allMessages*
event to send current message board.

**HTML** file has one *input* field for username, *textarea* for message. User
can set their name, but can not set their color. In javascript I manually
find html elements using *document.getElementById* and add new ones using *document.createElement*.

This was only simple explanation, if you want to delve deeper, you can see
socket.io [client](https://socket.io/docs/client-api/) and
[server](https://socket.io/docs/server-api/) api.
