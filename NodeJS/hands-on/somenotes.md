the client is the part of a web application that users interact with directly.
(browsers, mobile apps, smart watches)

the server is a remote machine somewhere in the cloud, which handles data and sends back information or content to the client in response to requests.

client ==> request ==> server
client <== response <== server

to achieve this we need to mimic the request response functionality like with the REST Api

REST - Representational State Transfer
A rest-api allows a client to talk to a server to get access to (possibly to edit or add to) some data stored remotely.
(eg weather data, currency exchange rates, stock prices)

controlling communication between client and server:

1. Browser Dev Tools - Network tab
2. CURL (terminal)
3. VS Code Extensions
4. Postman

## Request Response Cycle

![Request Response Cycle](assets/req-res-cycle.png)

## JSON

JavaScript Object Notation

http is a text based protocol. all data transferred between the client and the server must be in the form of strings.
to convert data to a json string, we have JSON.stringify()
