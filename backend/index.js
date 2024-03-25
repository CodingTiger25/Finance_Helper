 const express = require('express')
 const app = express()
 const accountRoute = require('./src/account/routes');

 app.listen(5000, () => {console.log("Server started on port 5000")})

 app.use(express.json());

 app.get('/', (req,res) => {
     res.send("Hello World!");
 });

 app.post("http://localhost:5000/account")

app.use("/account", accountRoute);