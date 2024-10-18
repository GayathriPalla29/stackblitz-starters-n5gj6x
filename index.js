const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let temp=[22, 26, 19, 30, 23, 28, 17, 31];
function filterHighTemperatures(ele){
  return ele>25;
}

app.get('/high-temperatures', (req, res) => {
  let result=temp.filter(ele=>filterHighTemperatures(ele));
  res.json(result);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
