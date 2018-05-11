const Schema = require("mongoose").Schema;

const wordSchema = new require("mongoose").Schema({
    japanese:{
        type:String
    },
    kanji:{
        type:String
    },
    romaji:{
        type:String
    },
    english:{
        type:String
    },
    spanish:{
        type:String
    },
    lesson:{
        type:Number,
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

module.exports = require("mongoose").model("Word", wordSchema);