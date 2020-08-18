
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

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    const id = req.params.id?req.params.id:undefined
    
	res.json({
		success: true,
		message: 'got one user',
		user: id
	})
})








app.listen(port,()=>{
    console.log("Server is listening on port number ",app.get('port'))
})