const Word = require("../models/Word");

exports.deleteWord = (req,res,next)=>{
    Word.findByIdAndRemove(req.params.id)
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
}

exports.patchWord = (req,res,next)=>{
    Word.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(item=>res.status(200).json(item))
    .catch(e=>res.status(500).send(e));
}

exports.getWords = function(req, res, next) {
    Word.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
}

exports.postWord = (req, res, next)=>{
    const newWord = new Word({
      japanese: req.body.japanese,
      kanji: req.body.kanji,
      romaji: req.body.romaji,
      english: req.body.english,
      spanish: req.body.spanish,
      lesson: req.body.lesson, 
    });
    newWord.save()
    .then(item=>res.status(200).json(item))
    .catch(e=>res.status(500).send(e));
}

exports.patchWordPic = (req,res,next)=>{
    const updates = {
        image: `/uploads/${req.files[0].filename}`
    }  
    Word.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(item=>res.status(200).json(item))
    .catch(e=>res.status(500).send(e));
}
