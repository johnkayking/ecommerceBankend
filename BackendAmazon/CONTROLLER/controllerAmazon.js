const users = require("../MODEL/schemareg")
const asyncWrapper = require("../MIDDLEWARE/asyncWrapper")


const registration =asyncWrapper(async(req,res)=>{


    console.log(req.body)
    
    const {
        Fname,
        Lname,
        Age,
        Address,
        Country,
        State,
        Pnumber,
        Password,
        Email
    } = req.body

  
    
 const userRegistration = await users.create({
        Fname,
        Lname,
        Age,
        Address,
        Country,
        State,
        Pnumber,
        Password,
        Email
 })
 res.status(200).json({msg:"sucessfull uploaded",users: userRegistration})
})


const userLogin = asyncWrapper(async (req, res) => {
    const { Email, Password } = req.body;
    console.log(req.body)

    // Find the user by email
    const loginDetail = await users.findOne({ Email });
    if (!loginDetail) {
        res.status(404).json({ msg: "Email does not exist", status: false });
        return;
    }

    console.log(loginDetail)

    // Check password match (use a hashed password comparison in real use)
    const isPasswordMatch = loginDetail.Password === Password; // Replace with bcrypt comparison
    if (!isPasswordMatch) {
        res.status(401).json({ msg: "Password did not match", status: false });
        return;
    }

    // User details for response
    const userDetails = {
        Fname: loginDetail.Fname,
        Lname: loginDetail.Lname,
        Email: loginDetail.Email,
    };

    res.status(200).json({ msg: "Successfully logged in", status: true, users: userDetails });
});






module.exports = {registration,userLogin}