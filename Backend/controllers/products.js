import db from "../db.js";

export const products = (req, res) =>{
    const query = req.query.color ? "SELECT * FROM products WHERE color=?" : "SELECT * FROM products"
  
    db.query(query,[req.query.color], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}


export const singleProduct = (req, res) =>{
    const query = "SELECT * FROM products WHERE id=?" 

    db.query(query, [req.params.id], (err, data)=>{
        if(err) return res.json(err)
        return res.status(200).json(data[0])
    })
}



export const slider = (req, res) =>{
    const query = "SELECT * FROM slider"

    db.query(query, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}