const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/bfhl',userRoutes);

app.get('/',(req,res)=>{
    res.send('Welcome to Karan\'s API');
})

app.listen(PORT, ()=>{
    console.log('server running');
});