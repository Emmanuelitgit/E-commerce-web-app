// src/components/Data.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, insertData } from '../store/data';


const Data = () => {

  const[input, setInput] = useState({
   title:"",
   price:""
  });


  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
//   console.log(data)

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }


  const handleChange = (e) =>{
    const{name, value} = e.target;

    setInput((prevInput)=>{
        return{
            ...prevInput, [name]:value
        }
    })
  }


const handleClick = async (e)=>{
    try{
        dispatch(insertData({
            title:input.title,
            price:input.price
        }))
    }catch(err){
        console.log(err)
    }
}

console.log(input.title)


  return (
    <div>

        <input type="text"
        name='title'
        onChange={handleChange} />
        <input type="number"
        name='price'
        onChange={handleChange}  />
        <button onClick={handleClick}>Insert</button>

      <ul>
        {data.map((item) => (
          <li key={item?.id}>{item?.title} - {item?.price} - {item?.id} </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
