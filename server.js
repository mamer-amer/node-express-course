
const express = require('express');
const app = express();
const port = process.env.PORT || 8080
app.set('port',port);

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]


app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"Successsfully rendered",
        users:mockUserData
    })
})








app.listen(port,()=>{
    console.log("Server is listening on port number ",app.get('port'))
})