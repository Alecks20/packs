const express = require("express")
const app = express()
const port = 3050

app.set("view engine", "ejs");
app.use("/assets",express.static("assets"))

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`App listening on ${port}`)
})