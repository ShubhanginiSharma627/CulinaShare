import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="mt-5 pt-5" style={{minHeight:"42.8rem"}}>
      <Row className="mt-5 ">
        <Col md={7}>
          <h1 className="my-4" style={{color:"#E07A5F",fontFamily: 'Quicksand, sans-serif'}}>About CulinaShare</h1>
          <p className="mb-3" style={{ width: '80%',color:"#1B1B1B",fontFamily: 'Quicksand, sans-serif' }}>
            CulinaShare is a vibrant community dedicated to the love of cooking and sharing delicious recipes. Our mission is to foster culinary exploration, making it accessible to individuals of all skill levels and backgrounds.
          </p>
          <p className="mb-3" style={{ width: '80%',color:"#1B1B1B",fontFamily: 'Quicksand, sans-serif' }}>
            Whether you're a kitchen novice or a seasoned chef, CulinaShare provides a platform where you can discover a diverse array of recipes, contribute your own culinary creations, and build a personalized collection of favorite dishes.
          </p>
          <p className="mb-3" style={{ width: '80%',color:"#1B1B1B",fontFamily: 'Quicksand, sans-serif' }}>
            We believe that the joy of cooking extends beyond the kitchen and has the power to bring people together. At CulinaShare, we strive to inspire creativity, foster a sense of community, and celebrate the art of crafting delicious meals.
          </p>
        </Col>
        <Col md={1} className="border-right  my-4" style={{backgroundColor:"#3D405B",width:"1rem"}}>
        </Col>
        <Col md={4}>
          <h2 className=" my-4" style={{color:"#E07A5F",fontFamily: 'Quicksand, sans-serif'}}>Meet the Team</h2>
          <p style={{ width: '80%',color:"#1B1B1B",fontFamily: 'Quicksand, sans-serif' }}>
            CulinaShare is driven by a passionate team committed to enhancing your culinary experience. From developers to food enthusiasts, each team member brings a unique perspective and skill set to create a welcoming and inclusive platform for all users.
          </p>
          <p style={{ width: '80%',color:"#1B1B1B",fontFamily: 'Quicksand, sans-serif' }}>
            Get to know the faces behind CulinaShare and join us on this exciting journey of culinary exploration and community building.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
