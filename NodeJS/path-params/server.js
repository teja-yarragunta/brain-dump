import http from "node:http";
import { getDataFromDB } from "./database/db.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB(); // we can only use await in async func

  // we need to check like this if we don't use query parameters

  if (req.url === "/api" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(destinations));
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();
    const filteredData = destinations.filter((destination) => {
      return destination.continent.toLowerCase() === continent.toLowerCase();
    });
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(filteredData));
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filteredData = destinations.filter((destination) => {
      return destination.country.toLowerCase() === country.toLowerCase();
    });
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(filteredData));
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        error: "not found",
        message: "The requested route does not exist",
      })
    );
  }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));

// we got a complex code with lot of repetitions, go see server2.js for modularity
