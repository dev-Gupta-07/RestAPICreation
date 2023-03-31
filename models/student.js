const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
  }
});
studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
studentSchema.pre("save",async function(next){
  this.password=await bcrypt.hash(this.password,10);
  next();
})
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
