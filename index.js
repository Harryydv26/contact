const express = require("express")
const mongoose= require("mongoose");
const bodyParser= require("body-parser");

const app = express();
const contacts = require('./Routes/route');

mongoose.connect("mongodb+srv://user123:123@cluster0.ykdk7dy.mongodb.net/CONTACT?retryWrites=true&w=majority", {
    useUnifiedTopology:true,
    useNewUrlParser: true,
    
  });
mongoose.connection.on("connected",()=>{
  console.log("database connected");
})


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());



  


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api/contacts',contacts);

const SERVER_PORT =  3036;

app.listen( SERVER_PORT, () => {
  console.log(`Service endpoint = http://localhost:${SERVER_PORT}`);
});
