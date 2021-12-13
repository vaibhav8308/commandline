
const fs = require('fs');

fs.writeFile('./hello.txt', "hello world!", (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("file saved");
  });
  fs.readFile('./hello.txt','utf-8',(err,item)=>{
    console.log(item,"hii")
})

  

fs.appendFile('append.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
