import React from 'react';
import styled from 'styled-components';
// import { Search} from '@material-ui/icons'

const Info = styled.p`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
flex: 1;
margin: 200px;
width: 250px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
cursor: pointer;
&:hover ${Info}{
  opacity: 1;
}
`

const Image = styled.img`
height: 300px;
z-index: 2;
`
const ImgContainer = styled.div``

function Practice() {
  return (
   <Container>
	<ImgContainer>
	<Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png'/>
	<Info>
     Hello
	</Info>
	</ImgContainer>
   </Container>	

  )
}

export default Practice