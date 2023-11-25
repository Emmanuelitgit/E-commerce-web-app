import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";

const SliderItems = () =>{

    const[slider, setSlider] = useState([])

    useEffect(()=>{
        const fetchAllData = async()=>{
          try{
            const res = await axios.get("http://localhost:8000/slider")
            setSlider(res.data)
          }catch(err){
            console.log(err)
          }
        }
        fetchAllData()
      }, []);

    return(
        <div>
            {slider.map((item)=>(
                <Slider
                id = {item.id}
                title = {item.title}
                price = {item.price}
                img = {item.img}
                desc = {item.desc}
                bg = {item.bg}
                />
            ))}
        </div>
    )
}

export default SliderItems;