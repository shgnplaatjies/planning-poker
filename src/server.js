const app = require("./app.js");
const port = process.env.PORT;

process.on("uncaughtException", (error) => {
  console.error(`Uncaught Exception: ${error}`);
  process.exit(1);
});

const server = app.listen(port, () => {
  console.log(`Server started on Port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("OK");
});

process.on("unhandledRejection", (error) => {
  console.error(`Unhandled Promise Rejection: ${error}`);
  server.close(() => process.exit(1));
});
