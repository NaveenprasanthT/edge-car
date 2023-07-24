import React, { useEffect, useState } from 'react';
import car0 from "../assests/banner/banner1.webp"
import car1 from "../assests/banner/banner2.webp"
import car2 from "../assests/banner/banner3.webp"
import car3 from "../assests/banner/banner4.webp"
import Navbar from './Navbar';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${({ backgroundImages }) => `url(${backgroundImages})`};  
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover; 
  background-position:center;
`

const Content = styled.div`
  position: relative;
  height: 85%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 15% 8%;
  @media (max-width: 750px) {
    max-width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const Title = styled.div`
  margin:0;
  font-size: 45px;
  color: #f01f36;
  font-weight: 700;
  z-index:2;
  @media (max-width: 750px) {
    font-size: 40px;
    color: #fff !important;
    text-shadow: 2px 2px 4px #ffffff7e;
  }
  @media (max-width: 400px) {
    font-size: 36px;
  }
`

const Paragraph = styled.p`
  margin:0;
  font-size: 25px;
  color: #000;
  z-index: 2;
  @media (max-width: 750px) {
    font-size: 22px;
    color: #fff;
    font-weight: 100 !important;
    text-shadow: 3px 3px 4px #ffffff9e;
  }
  @media (max-width: 750px) {
    font-size: 18px;
  }
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #0000007e;
  z-index: 1;
  @media (min-width: 751px) {
    display: none;
  }
`

const ColoredText = styled.span`
  color: #f01f36;
  @media (max-width: 750px) {
    text-shadow: 2px 2px 4px #f01f369e;
  }
`

function Header() {

  const backgroundImages = [
    car0,
    car3,
    car1,
    car2,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <Container backgroundImages={backgroundImages[currentImageIndex]}>
      <Navbar />
      <Content>
        <Overlay></Overlay>
        <Title>Rev Up Your <ColoredText>Drive!</ColoredText></Title>
        <Paragraph>Explore the Best in Car Accessories for Unmatched Performance, Style, and Comfort.</Paragraph>
      </Content>
    </Container>
  );
}

export default Header;