const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// middle ware
app.use(cors());
app.use(express.json());


// name: dbuser1
// pass : ozFa1dPqeBdhNvMy




const uri = "mongodb+srv://dbuser1:ozFa1dPqeBdhNvMy@cluster0.zwnyjff.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        const userCollection = client.db('ndeMongoCrud').collection('user');
        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log(user)
            const result = await userCollection.insertOne(user)
            res.send(result)
        })
    }
    finally{

    }
}

run().catch( err => console.log( err))



app.get('/', (req, res) => {
    res.send('server is running')
})


app.listen(port, () => {
    console.log('kaj kortese')
})