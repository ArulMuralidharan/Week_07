
//  Week 06 Express: Basic Routing
//  Step 04

//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

app.get("/:id", function(req, res) {
    if (req.params.id == 1) {
      res.send('About')
    }
    else if (req.params.id == 2){
      res.send('Hello')
    }
    else {
      res.send('Yay')
    }
  }
)



//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
