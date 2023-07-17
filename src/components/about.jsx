import React from 'react';
import styled from 'styled-components';
import carBackground from '../assests/car3.webp';
import { devices } from '../devices';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${carBackground});
  background-size: cover;
  background-position: 60% 0%;
  margin-top:0px;
  padding: 30px;
  @media ${devices.tablet}{
    padding: 5px;
}
`;

const ContentContainer = styled.div`
  margin: 0;
  margin-left:30px;
  margin-right:20px;
`;

const Heading = styled.h1`
  color: #ffffff;
  margin: 10px 0px;
  font-size: 40px;
  font-weight: medium;
  border-bottom: 2px solid red;
  width: max-content;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media ${devices.tablet}{
    flex-direction : column;
    gap: 5px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const SectionHeading = styled.h3`
  color: #ffffff;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const SectionParagraph = styled.p`
  color: #ffffff;
  max-width: 800px;
  margin-top: 10px;
`;

const BulletList = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 0px;
  flex-wrap: wrap;
`;

const BulletPoint = styled.li`
  margin-bottom: 10px;
  margin-left: 40px;
  width: 32%;
`;

const AboutUs = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Heading>About Us</Heading>
        <SectionContainer>
          <Section>
            <SectionHeading>Who we are</SectionHeading>
            <SectionParagraph>
              At Edge Car Accessories, we are passionate about cars and committed to provide the best products and exceptional service. With our expertise and dedication,we are driven to exceed your expectations. We carefully curate our selection from trusted manufacturers, ensuring durability, performance, and style in every product we offer.
            </SectionParagraph>
          </Section>
          <Section>
            <SectionHeading>Our Mission</SectionHeading>
            <SectionParagraph>
            Our mission is to provide car enthusiasts with the highest quality car accessories, offering a wide selection of products that enhance performance, style, and functionality. We strive to exceed customer expectations by delivering exceptional value, outstanding service, and a seamless shopping experience.
            </SectionParagraph>
          </Section>
        </SectionContainer>
        <Section>
          <SectionHeading>Brands we deal in:</SectionHeading>
          <SectionContainer>
            <Section>
              <SectionHeading>Audio System</SectionHeading>
              <SectionParagraph>
                Experience an immersive audio journey on the road with our  premium audio systems. From crisp highs to deep lows,  our advanced technology delivers unparalleled sound quality, transforming your car into a concert hall on wheels.              </SectionParagraph>
            </Section>
            <Section>
              <SectionHeading>Seat Covers</SectionHeading>
              <SectionParagraph>
                Protect and personalize your car's interior with our stylish and durable seat covers. Add a touch of comfort and enhance the aesthetic appeal of your vehicle.              </SectionParagraph>
            </Section>
          </SectionContainer>
          <SectionContainer>
            <Section>
              <SectionHeading>Sun Film</SectionHeading>
              <SectionParagraph>
                Stay cool and protected from harmful UV rays with our superior sun films. Enjoy enhanced privacy, reduced glare, and a cooler interior for a more comfortable drive.             
               </SectionParagraph>
            </Section>
            <Section>
              <SectionHeading>Add-Ons</SectionHeading>
              <SectionParagraph>
              Transform your car into a standout masterpiece with our range of add-ons. From chrome trims to LED lighting, personalize your vehicle with eye-catching enhancements that make it truly yours.              </SectionParagraph>
            </Section>
          </SectionContainer>
        </Section>
        <Section>
          <SectionHeading>Why Us</SectionHeading>
          <SectionParagraph>
            We ensure extensive expertise, uncompromising quality!
            Your trusted partner for an enhanced car experience.
          </SectionParagraph>
          <BulletList>
            <BulletPoint>Competitive Pricing</BulletPoint>
            <BulletPoint>Fast Shipping</BulletPoint>
            <BulletPoint>Secure Shopping</BulletPoint>
            <BulletPoint>Regular Discounts</BulletPoint>
            <BulletPoint>Knowledgeable Staff</BulletPoint>
            <BulletPoint>Customer Satisfaction</BulletPoint>
          </BulletList>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
};

export default AboutUs;