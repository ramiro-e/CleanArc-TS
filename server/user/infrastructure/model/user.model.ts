import {Schema, Types, model, Model, models} from "mongoose"
import { UserEntity } from './../../domain/user.entity';
import bcrypt from "bcryptjs"

const UserSchema = new Schema<UserEntity>(
{
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    dni:{
        type: Number
    },
    password:{
        type: String,
        required:true
    },
    isSuperuser: {
        type:Boolean,
        required:true
    },
    isActive: {
        type:Boolean,
        required:true
    },
    isConfirmed: {
        type:Boolean,
        required:true
    },
},{
  timestamps: true
})

UserSchema.path('email').validate(async (email) => {
  const emailCount = await models.users.countDocuments({ email })
  return !emailCount
}, 'Email already exists')

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password, 10)
  return next()
})


const UserModel = model('users', UserSchema)

export default UserModel