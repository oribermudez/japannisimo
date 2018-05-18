const Schema = require("mongoose").Schema;

const kanjiSchema = new require("mongoose").Schema({
    kanji:{
        type:String
    },
    meaning:{
        type:Object
    },
    kunyomi:{
        type:[String]
    },
    onyomi:{
        type:[String]
    },
    examplesKun:{
        type:Object
    },
    examplesOn:{
        type:Object
    },
    lesson:{
        type:Number
    },
    image:{
        type:String,
    }
    
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = require("mongoose").model("Kanji", kanjiSchema);