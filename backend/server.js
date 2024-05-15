const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const utils = require('./utils')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

app.post('/:id',(request,response)=>{
    
    const { id } = request.params;
  
    const statement = `select votingCentreId,votingCentreName from votingCentre where constituencyId = ${id}`
    
    db.execute(statement,(error,data) =>{
        response.send(utils.createResult(error,data))
    })
    console.log("welcome chinna thala")
})
app.post('/votingCentre/:id',(request,response)=>{
    const { id } = request.params;
  
    const statement = `select id,queueLength,expectedTime, lastUpdated  from currentstatus where votingCentreId = ${id}`
    
    db.execute(statement,(error,data) =>{
        response.send(utils.createResult(error,data))
    })
    console.log("welcome chinna thala 2")
})

app.listen(3000,(req,resp)=>{
    console.log('server listening at port 3000')
})