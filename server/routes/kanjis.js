var express = require('express');
var router = express.Router();
const controller = require("../controllers/kanji.controller");
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

router.get('/', controller.getKanjis);
router.post('/new', upload.single('file'), controller.postKanji);
router.patch('/edit/:id', controller.patchKanji);
router.post('/editpic/:id', upload.any(), controller.patchKanjiPic);
router.delete('/delete/:id', controller.deleteKanji);

module.exports = router;