const router = require("express").Router()
const Student = require("../models/Student")
const bcrypt = require("bcrypt")

// LOGIN REQUEST
router.post("/", async (req, res) => {

  try {
    // CHECKING STUDENT
    let student = await Student.findOne({rollno: req.body.rollno})
    // IF EXISTS
    if(student){
      // CHECKING PASSWORD
      const validPassword = await bcrypt.compare(req.body.password, student.password)
      // IF PASSWORD VALID
      if(validPassword){
        return res.status(200).send({message: "Sign in successfully.", student: student})
      }
      // IF PASSOWORD INVALID
      else{
        return res.status(400).send({message: "Password didn't matched."})
      }
    }
    // IF STUDENT NOT FOUND
    else{
      return res.status(404).send({message: "Student not found!"})
    }
  } catch (error) {
    res.status(500).send({message: "Could not sign in student."})
    console.log("Sign in error:", error)
  }
})

module.exports = router;


