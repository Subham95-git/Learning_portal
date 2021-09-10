import React from 'react';
import {Carousel, Row, Col, Card, Button} from 'react-bootstrap';
import data from '../Resouses/Courses.json';
//import rightarrow from '../Resouses/rightarrow.svg';
import {Link} from 'react-router-dom';

const LandingPage = ()=> {
    return (
        <div >
            <Carousel>
  <Carousel.Item interval={1500}>
    <img style={{height:'350px'}}
      className="d-block w-100"
      src="https://cloudacademy.com/wp-content/uploads/2014/10/Asset-93.png"
      alt="Learn Cloud Computing"
    />
    {/* <Carousel.Caption>
      <h3>Learn Cloud Computing</h3>
      <p>A new era of Cloud is waiting ahead.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img style={{height:'350px'}}
      className="d-block w-100"
      src="https://qph.fs.quoracdn.net/main-qimg-4d5306c2aabb3cc1741dc7ce576ccbb6"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img style={{height:'350px'}}
      className="d-block w-100"
      src="https://s3.us-east-1.amazonaws.com/storage.trumplearning.com/cmsfiles/best-full-stack-web-developer-courses-certification-online-ppjh0d5a.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img style={{height:'350px'}}
      className="d-block w-100"
      src="https://analyticsindiamag.com/wp-content/uploads/2020/12/Kubernetes_AIM.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img style={{height:'350px'}}
      className="d-block w-100"
      src="https://images.financialexpress.com/2021/07/z12.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

<div style={{'marginTop': '20px'}}>
<Row xs={2} md={2} lg={6} className="g-4">
    {data.courses.map(d =>{
        return(
            <Col>
        <Card bg='warning'>
          <Card.Img variant="top" src={d.image}  style={{'height': '100px'}}/>
          <Card.Body>
            <Card.Title>{d.name}</Card.Title>
            <Link to={d.link}>
            <Button variant="dark">
                Start
                {/* <img src={rightarrow} alt='enter'/> */}
            </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
        );
        
    })}
</Row>
</div>

      <Link to="/" />
        </div>
    )
}

export default  LandingPage;
