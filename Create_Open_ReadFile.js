const fs = require('fs');
  
let data = 
  "App Name: UniWise,\nCategory: Education, \nDeveloper: Themba Ngoma";
  
fs.writeFile("CampusCup2021.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});

fs.readFile('CampusCup2021.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
  console.log(data.toString());
  }
});
