import db from "../db.js";

export const fetchOrders = (req, res) =>{
    const query = "SELECT * FROM orders"
  
    db.query(query, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const insertOrders = (req, res) =>{
    const query = "INSERT INTO orders(`title`, `price`,) VALUES(?)"

    const {title, price} = req.body
    db.query(query, [title, price,], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}
