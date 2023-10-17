const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollno: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    major: { type: String, required: true },
  },
  { timestamps: true }
);

const Student = new mongoose.model("Student", studentSchema)

module.exports = Student;
