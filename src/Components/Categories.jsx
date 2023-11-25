import React from 'react';
import styled from "styled-components";
// import { categories } from "../Data";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  padding: 20px;
  justify-content: center;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    <Container>
      {/* {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))} */}
    </Container>
  );
};

export default Categories;