var express = require('express');
var router = express.Router();
const fs = require('fs');
const download = require('download');
router.post('/json', function(req, res, next) {
  console.log(req.body);
  a=req.body;
  a1=JSON.stringify(a);
  a2=a1+","
b={"name":a.name,"phonenumber":a.phoneNumbers[0].number}
b1=JSON.stringify(b);
fs.appendFile('mynewfile1.txt', a2, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
b2=b1+","
fs.appendFile('mynewfile2.txt', b2, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

  res.send("fine")

});

router.get('/download',(req,res)=>{

console.log(__dirname)  
console.log(__filename)
console.log("down port")
// Url of the image
const file = 'mynewfile1.txt';

// Path at which image will get downloaded
const filePath = `${__dirname}`;
  
download(file,filePath)
.then(() => {
    console.log('Download Completed');
})

// Path at which image will get downloaded
res.send(`${__dirname}`+'\\mynewfile1.txt')

})
/* GET users listing. */
router.get('/', function(req, res, next) {
  var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
  var jsonObj = JSON.parse(jsonData);
  console.log(jsonObj);
 
// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);
 
a="./out/"+req.body.name+".json";

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});

module.exports = router;
