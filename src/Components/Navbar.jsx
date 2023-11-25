import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import "../style.css"
import { AuthContext } from "../Context/AuthContext";
import { useSelector } from "react-redux";
import Notification from "./Notification";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  box-shadow: 0 3px 10px rgb(0, 0, 0.7);
	background-color: #fff;
  color:black;
  top: 0;
  left:0;
  right:0;
  position: fixed;
  z-index: 100;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top:-37px;
`;

const Language = styled.select`
  font-size: 14px;
  cursor: pointer;
  outline: none;
  border:none;
  padding:3px;
  margin-top: 22px;
  ${mobile({ display: "none" })}
`;

const Options = styled.option`
font:500;
color:black;
`

const SearchContainer = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: 1px solid black;
  outline: none;
  position:relative;
  padding:7px;
  width:200px;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex:1;
  text-align: center;
  margin-top:-27px;
`;

const Logo = styled.h1`
  font-weight: bold;
  color:#192a56;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top:-25px;
  margin-right:5%;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.a`
  font-size: 13px;
  cursor: pointer;
  margin-left: 20px;
  color:#666;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {

  const{currentUser, logout} = useContext(AuthContext)

  const quantity = useSelector((state)=>state.cart.totalQuantity)
  const notification = useSelector((state)=>state.alert.notification);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            <Options select = "selected">English</Options>
            <Options>French</Options>
            <Options>Housa</Options>
            <Options>Arabic</Options>
            <Options>Dagbani</Options>
          </Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "blue", fontSize: 20, position: "absolute", cursor:"pointer", marginLeft:"13%"}} />
          </SearchContainer>
          {notification && <Notification
          type={notification.type}
          message={notification.message}
          open={notification.open} />}
        </Left>
        <Center>
          <Logo>LOGO</Logo>
        </Center>
        <Right>
          <MenuItem><Link className="link" to="/">HOME</Link></MenuItem>
          <MenuItem><Link className="link" to="/productlist">PRODUCTLIST</Link></MenuItem>
          {!currentUser && <MenuItem><Link className="link" to="/register">REGISTER</Link></MenuItem>}
          {currentUser ? (<MenuItem><Link className="link" to="/login" onClick={logout}>LOGOUT</Link></MenuItem>) : <MenuItem><Link className="link" to="/login">SIGN IN</Link></MenuItem>}
          <MenuItem>
            <Badge className="badge" badgeContent={quantity} color="primary">
              <Link className="link" to="/cart"><ShoppingCartOutlined /></Link>
            </Badge>
          </MenuItem>
          <MenuItem><Link className="link">{currentUser?.username}</Link></MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;