const express = require("express");
const app = express();
const mongoose = require('mongoose')


    
mongoose.connect("mongodb+srv://waqasarif:treadstone@cluster0.fefb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true }
				 ,{ useNewUrlParser: true })
      .then(() => console.log(`Database connected`))
      .catch(err => console.log(`Database connection error: ${err.message}`));
      app.use(express.json());


  let coinSchema = new mongoose.Schema({
    name: {type: String, lowercase: true, required: true},
    code: {type: String, uppercase: true, required: true},
    price: {type: Number}
  
  }, {
    timestamps: true
  });

var Coin =  mongoose.model('Coin', coinSchema);



const DB =   Coin.create({name: 'Bitcoin', code: 'BTC',}, function(err, mong){
 
   if(err){
     console.log(err)
   } else {
     console.log(mong)
   }
  })

app.get("/coin/createcoin", (req, res) => {
  Coin.find({}, function(err, DB){
   if(err) {
     console.log(err)
   } else {
  return res.status(200).json({ data: DB});
    
   } 

  })
});


app.put("/coin/:coincode", (req, res) => {
  const obj = CoinModel.find((el) => el.id === Number(req.params.id));
  obj.name = req.body.name;
  obj.code = req.body.code;
  obj.price = req.body.price;
  
  return res.status(200).json({ data: DB });
});

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start(3333);


module.exports = app;
