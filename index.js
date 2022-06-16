const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app=express();

require('dotenv').config();

const mongoString = process.env.DATABASE_URL;
// console.log(routes);


mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
});


app.use(express.json());

app.use('/api', routes);

const PORT=process.env.PORT || 5050;

app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
})