import User from "../models/User.js";
import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken"; 



const createToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
}  

 
 // route for userlogin

const loginUser = async (req, res) => { 
    res.json({message: "Login successful"});

}





// route for user registration
const registerUser = async (req, res) => {

  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters long",
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id); // usually pass user._id

    res.status(201).json({
        message: "User registered successfully",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
    });

} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
}
}




// route admin login
const loginAdmin = async (req, res) => {    

}





export {loginUser, registerUser, loginAdmin}