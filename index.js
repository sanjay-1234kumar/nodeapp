
require('dotenv').config();

const express=require('express');

const app=express();

var bodyParser = require('body-parser');

const cors=require('cors');



const port=process.env.APP_PORT;


app.use(cors({
    origin: 'http://localhost:3000',// allow only this sever req 
  optionsSuccessStatus: 200 
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));


app.use('/upload',express.static('upload'));

const products=[{id:"101",name:"product1"}];



app.get('/',(req,res)=>{

return res.json("welcome to home page");


});

app.get('/api/getproduct',(req,res)=>{

    return res.json(products);
    
    
    });


    app.post('/api/addproduct',(req,res)=>{


        products.push(req.body);

        return res.json(req.body);


    });



    app.get('/about',(req,res)=>{

        return res.json("welcome to about page ");
    });



app.get('/api/form',(req,res)=>{

    return res.sendFile(__dirname+'/index.html');


});
app.listen(port,()=>{

    console.log(`sever is runing at port ${port}`);

});