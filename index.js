const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());


const users = [ 'suho','sujon','ali','suni','sumi']

//const rootcall = (req, res) => res.send('Thank you very much')

app.get('/', (req,res) =>{ 
    const fruit = {
        product: 'ada',
        price:499
    }
    res.send(fruit);

})
//get
app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id,name});
})
//post
app.post('/addUser', (req, res) => {
   // console.log('data recipt', req.body);
   // save to data base
   const user = req.body;
   user.id = 55;
   res.send(user);
 })

app.listen(3000, () => console.log('listenting to port 3000'));