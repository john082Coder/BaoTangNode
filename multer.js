var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + file.originalname);
  },
});

module.exports = multer({storage: storage});
