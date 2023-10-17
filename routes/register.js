const router = require("express").Router()
const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity")
const bcrypt = require("bcrypt")
const Student = require("../models/Student")

// REGISTER REQUEST
router.post("/", async (req, res) => {

  // JOI VALIDATION
  const {error} = validateRegister(req.body)
  if(error) return res.status(400).send({message: error.details[0].message})

  try {
    // CHECKING ROLL NO
    const rollno = await Student.findOne({rollno: req.body.rollno})
    if(rollno) return res.status(400).send({message: "Roll no already exists."})

    // CHECKING EMAIL
    const email = await Student.findOne({email: req.body.email})
    if(email) return res.status(400).send({message: "Email already exists."})

    // CHECKING PHONE
    const phone = await Student.findOne({phone: req.body.phone})
    if(phone) return res.status(400).send({message: "Phone number already exists."})

    // CREATING A NEW STUDENT
    let student = new Student(req.body)

    // BCRYPRING PASSWORD
    const salt = await bcrypt.genSalt(10)
    student.password = await bcrypt.hash(req.body.password, salt)

    await student.save()
    res.status(200).send({message: "Sign up successfully, Now please sign in..."})
  } catch (error) {
    res.status(500).send({message: "Could not sign up student."})
    console.log("Register Error : ", error)
  }

})

// JOI PASSWORD COMPLEXITY OPTION
const complexityOption = {
  min: 5,
  max: 1024,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1
}

// FUNCTION TO VALIDATE REGISTER REQUEST
function validateRegister(student){
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    rollno: Joi.string().required().min(12),
    email: Joi.string().email().required(),
    password: passwordComplexity(complexityOption),
    phone: Joi.string().required().min(11),
    address: Joi.string().required(),
    gender: Joi.string().required(),
    major: Joi.string().required(),
  })
  return schema.validate(student)
}

module.exports = router;


