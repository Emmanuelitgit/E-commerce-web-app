import React, { useContext } from 'react';
import styled from 'styled-components';
import { useState} from 'react';
import {mobile} from "../Responsive";
import { useNavigate } from 'react-router-dom';
import { AuthContext} from '../Context/AuthContext';
import { alertActions } from '../store/notification';
import { useDispatch } from 'react-redux';

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
  height:50vh;
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

const ButtonCon = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:10px;
`

const Button = styled.button`
  width: 35%;
  border: none;
  padding: 13px 18px;
  background-color: #192a56;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align:center;
  margin-top:10px;
`;

const Login = () => {

  const{login} = useContext(AuthContext);

  const[err, setError] = useState(null);

  const[user, setUser] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    const{name, value} = e.target

    setUser((prevUser)=>{
      return{
        ...prevUser, [name]:value
      }
    })
  }

  const handleClick = async e =>{
    e.preventDefault();
    try{
      await login(user)
      navigate("/")
     dispatch( alertActions.showNotificatio({
      type:"success",
      message:"success",
      open:true
    }))
    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <InputContainer>
          <Input placeholder="username"
          name='username'
          onChange={handleChange}
           />
          <Input placeholder="password"
          name='password'
          onChange={handleChange}
           /></InputContainer>
          <ButtonCon>
          <Button onClick={handleClick}>Login</Button>
          </ButtonCon>
          {err && <span className='err'>{err}</span>}
          <Link>Don't you remember your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;