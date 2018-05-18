const Kanji = require("../models/Kanji");

exports.deleteKanji = (req,res,next)=>{
    Kanji.findByIdAndRemove(req.params.id)
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
}

exports.patchKanji = (req,res,next)=>{
    Kanji.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(item=>res.status(200).json(item))
    .catch(e=>res.status(500).send(e));
}

exports.getKanjis = function(req, res, next) {
    Kanji.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
}

exports.postKanji = (req, res, next)=>{
    const newKanji = new Kanji({
      kanji: req.body.kanji,
      meaning: req.body.meaning,
      kunyomi: req.body.kunyomi,
      onyomi: req.body.onyomi,
      examplesKun: req.body.examplesKun,
      examplesOn: req.body.examplesOn,
      lesson: req.body.lesson, 
    });
    newKanji.save()
    .then(item=>res.status(200).json(item))
    .catch(e=>res.status(500).send(e));
    console.log(newKanji);
}

exports.patchKanjiPic = (req,res,next)=>{
    const updates = {
        image: `/uploads/${req.files[0].filename}`
    }  
    Kanji.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(item=>res.status(200).json(item))
    .catch(e=>res.status(500).send(e));
}
