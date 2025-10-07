// to create a server we need node's HTTP module

// import http from "http"; //in ejs, in package.json set type = module
// its best practice to include node:http, when we are importing a core node module
// this tells the app that its a node module and not a JS module we created ourselves

import http from "node:http";
// http module:
// allows data to be transferred over the http protocol
// create servers
// handle requests from clients
// provides responses to those requests

const PORT = 3000;
// to use the server we need a port for it to run on.
// we need to listen on that port, and for that http gives us a listen method

const server = http.createServer((req, res) => {
  res.write("This is some data \n");
  res.write("This is some more data \n");
  //   res.end("hello this is from server..", "utf-8", () => {
  //     console.log("response ended");
  //   });
  res.end();

  console.log(req.url);
  console.log(req.method);
});
// createServer is an http method, we can also destructure it in import
// accepts a callback with req and res parameters
// req, res give access to request-response cycle

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
// http listen method takes port and a callback to execute when the server connects

//

// explanations
/*

   //   res.end("hello from the server");
  // check this in postman or turbo client, in network tools we get CORS error
  // with res, we can send something over http, and the end method sends the data over http and then ends the response
  // with end method, we can actually send 3 parameters, the data, encoding type(default is utf8), and a callback which will execute at the end of the process

    the response object also has methods which allows us to, specify content type and set status codes (200, 400 etc) and provide content like (html, json, images)
    even without specifying the status code, node under the hood does that for us, which is bad practice

    not just end, we also got the write method to send data, the difference is after sending the end method ends the response as well, and the write wont.

    when we got a lot of sending going on, it's better to use write method.
    when we use res.write, follow up with a res.end, because we need to end the response
    res.write(something)
    res.write(something)
    res.end()
    */

/*
    request object:
    gives access to the incoming request (the url client used, the headers, any data sent, he method (GET, POST, DELETE, PUT, PATCH))

    content-types (MIME types):
    application/json
    text/html
    text/css
    application/javascript

*/
