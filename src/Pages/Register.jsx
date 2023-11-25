import React from 'react';
import styled from 'styled-components';
import { mobile } from "../Responsive";
import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  height:60vh;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color:#192a56;
  text-align:center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Input = styled.input`
  flex: 1;
  width:70%;
  margin: 10px 0;
  padding: 10px;
  outline: none;
`;

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:15px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #192a56;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align:center;
`;

const Register = () => {

  const[err, setError] = useState(null)

  const[user, setUser] = useState({ 
     username: "", 
     email: "", 
     password: ""
  })


  const navigate = useNavigate()

  const handleChange = (e) =>{
    const{name, value} = e.target
    setUser((prevUser)=>{
      return{
        ...prevUser, [name]:value
      }
    })
  }

  console.log(user)

  const handleClick = async e =>{
     e.preventDefault()
     try{
      await axios.post("http://localhost:8000/user/register", user)
      navigate("/login")
     }catch(err){
      setError(err.response.data)
     }
 }


  return (

    <Container>
      <Wrapper>
        <Title>Create new account</Title>
        <Form>
          <InputContainer>
          <Input placeholder="username"
          name='username'
          onChange={handleChange}
           />
           <Input placeholder="email"
          name='email'
          onChange={handleChange}
           />
          <Input placeholder="password"
          name='password'
          onChange={handleChange}
           /></InputContainer>
          <ButtonContainer>
          <Button onClick={handleClick}>REGISTER</Button>
          </ButtonContainer> 
          {err && <span className='err'>{err}</span>}
          <span className='have-account'>Have an account alredy? <Link>Login</Link> </span>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;