const mongoose = require('mongoose')


const Teams = mongoose.model(
     'Teams' , {
          id : {type : Number},
          name : {type : String},
          country : {type : String},
     }
)

module.exports = Teams