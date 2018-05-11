var express = require('express');
var router = express.Router();
const controller = require("../controllers/word.controller");
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

router.get('/', controller.getWords);
router.post('/new', upload.single('file'), controller.postWord);
router.patch('/edit/:id', controller.patchWord);
router.post('/editpic/:id', upload.any(), controller.patchWordPic);
router.delete('/delete/:id', controller.deleteWord);

module.exports = router;