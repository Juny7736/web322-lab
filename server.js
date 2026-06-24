const express = require("express");
const app = express();

const HTTP_PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const gmt = new Date().toISOString();
  res.send(`Junseo - WEB322 ${gmt}`);
});

if (require.main === module) {
  app.listen(HTTP_PORT, () => {
    console.log(`server listening on http://localhost:${HTTP_PORT}`);
  });
}

module.exports = app;
