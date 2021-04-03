const express = require('express');

const app = express();

const users = [ 'suho','sujon','ali','suni','sumi']

//const rootcall = (req, res) => res.send('Thank you very much')

app.get('/', (req,res) =>{ 
    const fruit = {
        product: 'ada',
        price:499
    }
    res.send(fruit);

})
app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id,name});
})

app.listen(3000, () => console.log('listenting to port 3000'));