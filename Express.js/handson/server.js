import express from "express";

const app = express();
const PORT = 8000;

const movie = {
  name: "Oppenheimer",
  actor: "Cillian Murphy",
};

// sending a response
app.get("/", (req, res) => {
  res.json(movie);
});

app.listen(PORT, () => {
  console.log(`express server running on port ${PORT}`);
});

/*
    req object
    req.body -> data from the request body
    req.params -> 
    req.method -> http method(GET, POST)
    req.ip -> client's ip address
    req.query -> the query parameters
*/
