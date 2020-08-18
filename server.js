
const express = require('express');
const app = express();
const port = process.env.PORT || 8080
// for post request we use body parsers to get the data in json
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

app.use(bodyParser.json())

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

app.post('/user',(req,res)=>{
    const user_obj = {
            password:req.body.password,
            username:req.body.username
    }
    
   
    res.json({
        name:  encryptPassword(user_obj),
        password :  encryptUsername(user_obj)
    })
    
    
})


function encryptPassword({password}){
    bcrypt.hash(password, 10, function(err, hash) {
        // Store hash in database
        if(err){
            return false;
        }
        else{
            console.log(hash)
            return hash;
        }
      });
}
function encryptUsername({username}){
    bcrypt.hash(username, 10, function(err, hash) {
        // Store hash in database
        if(err){
            return false;
        }
        else{
            return hash;
        }
      });
}






app.listen(port,()=>{
    console.log("Server is listening on port number ",app.get('port'))
})