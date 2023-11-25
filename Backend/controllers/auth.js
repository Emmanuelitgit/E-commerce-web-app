import db from "../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const register = (req, res)=>{
    //CHECK EXISTING USER
    const query = "SELECT * FROM user WHERE email = ? OR username = ?"
    const{email, username} = req.body

    db.query(query, [email, username], (err, data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exist");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const query = "INSERT INTO user (`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]

        db.query(query, [values], (err, data)=>{
            if(err) return res.json(err);
            return res.status(200).json("user has been created");
        })
    })

}

export const login = (req, res) =>{
    const query = "SELECT * FROM user WHERE username = ?"
    const{username} = req.body

    db.query(query, [username], (err, data)=>{
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json("User not found");

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!")

        const token = jwt.sign({id: data[0].id}, "jwtkey")
        const {password, ...other} = data[0];

        res.cookie("access_token", token, {
            httpOnly:true,
        }).status(200).json(other)
    })
}

export const logout = (req, res) =>{
    res.clearCookie("access_token", {
        sameSite:"none",
        secure:true
    }).status(200).json("Usern has been logged out")
}


// export const logout = (req, res) =>{
//     res.clearCookie("access_token",{
//         sameSite: "none",
//         secure: true
//     }).status(200).json("User has been logout")
// }
