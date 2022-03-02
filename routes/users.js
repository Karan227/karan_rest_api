const express = require('express');

const router = express.Router();
const user_error={
    is_success:false,
    reason:'no array found'
};
const user = {
    is_success : true,
    user_id : 'john_doe_17091999',email: 'john@xyz.com',
    roll_number:'ABCD123',
    numbers:[],
    alphabets:[] 
}

router.get('/',(req,res)=>{
    res.send('This is an API platform');
})

router.post('/',(req,res)=>{
    if(!req.body.data){
        res.send(user_error);
    }
    else{
        req.body.data.forEach(element => {
            if(isNaN(element)){
                var letters = /^[A-Za-z]+$/;
                if(element.match(letters)){
                 user.alphabets.push(element);   
                }
            }
            else{
                user.numbers.push(element);
            }
        });
        // console.log(user);
        res.send(user);
    }
    user.alphabets=[];
    user.numbers=[];
})

module.exports =  router;