const express = require("express");
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/math/:add/", (req, res) => {
  // console.log(req.params.val);

  let num1 = req.query.num1;
  let num2 = req.query.num2;
  let operator = req.params.add
  console.log(operator,"this");

  if (!isNaN(num1) && !isNaN(num2)) {

  } if(operator === "+" || operator === "add"){
      let sum = parseInt(num1) + parseInt(num2);
        res.json({ input: req.query, data: sum });
  } if(operator === "*" || operator === "mult"){
      let mult = parseInt(num1) * parseInt(num2);
        res.json({input: req.query, data: mult })
  } if(operator === "/" || operator === "div"){
      let div = parseInt(num1) / parseInt(num2)
        res.json({input: req.query, data: div})
  } if(operator === "-" || operator === "sub"){
      let sub = parseInt(num1) - parseInt(num2)
        res.json({input: req.query, data: sub})
  }else {
    res.send("please enter valid numbers and route");
  }
});

app.listen(8000, () => {
  console.log("this is port 8000");
});

// app.use(express.static('public'))
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//app.get()

//use a standard axios request and do npm install axios and do the regular api call
