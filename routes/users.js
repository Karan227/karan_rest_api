const express = require('express');

const router = express.Router();
const user_error={
    is_success:false,
    reason:'no array found'
};
const user = {
    is_success : true,
    user_id : 'karan_singh_25052001',email: '227karansingh@gmail.com',
    roll_number:'11914069',
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
        res.send(user);
    }
    user.alphabets=[];
    user.numbers=[];
})

module.exports =  router;
