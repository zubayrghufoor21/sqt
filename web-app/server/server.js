/**
 * This is the starter code for the webserver.
 * You can include this file within your submission as the webserver.
 * @author A. Freddie Page
 * @version 2021/22
 */
import express from "express";

const port = 8080;
const app = express();

// Static serving – GET requests.
app.use("/", express.static("web-app/browser"));
app.use("/common/", express.static("web-app/common"));
app.use("/docs/", express.static("docs"));

app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});
