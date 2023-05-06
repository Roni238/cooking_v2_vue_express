const {Schema, model} = require('mongoose')

const UserSchema =new Schema({
    email:{type:String,require, unique:true},
    password:{type:String,require},
    name:{type:String,require},
    isActivated:{type:Boolean, default:false,require},
    activationLink:{type:String},
    role:{type:String,require,default:'client'},
})

module.exports = model('User', UserSchema)