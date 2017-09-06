

const debug = require ('debug')('http:index') //the majority of hte interaction with express

//express setup //in terminal- npm install express
const PORT = process.env.PORT || 3000
const express = require('express')...
const router = express.Router....
const app = module.exports = express()

//middleware
const bodyParser = require('body-parser').json() //calling json here allows...
const cors = reuqire('./cors')
const errorMiddleWare = requier

//routes
require


//mount middleware
app.use(bodyParser())//isn't used for get and delete (they don't have bodies), so we...
app.use(cors)
app.use(router)//create our reouter intstane nad pass it through ad bind all our callbacks to this, then we have to call our router and ....mounts onto the application
app.use(errorMiddleWare)//need to have this last so that if an error occurs with the above it is caught
