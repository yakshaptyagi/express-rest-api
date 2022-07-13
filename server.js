const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false})); //for body parsing
const mongoose = require('mongoose');
const userRouter = require('./router/userRouter');

const port = 8000;

app.use('/api', userRouter);

mongoose.connect('mongodb+srv://mongoadmin:kjG9RtvrrgNWx49E@yakshap-cluster.ntxhw.mongodb.net/UsersDB?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
}).on('error',(err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
