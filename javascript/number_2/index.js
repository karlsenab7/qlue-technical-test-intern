const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');

// define the root of the static image
app.use(express.static(__dirname + '/uploads'));
   
// parse application/json
app.use(bodyParser.json());
  
// image upload code using multer
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads/public');
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname);
   }
});
var upload = multer({ storage: storage });

app.post('/imageUpload', upload.single('image'),(req, res) => {
  const image = req.image;
    res.send(apiResponse({message: 'File uploaded successfully.', image}));
});
  
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}

app.listen(3000,() =>{
  console.log("Server is running at port 3000");
});