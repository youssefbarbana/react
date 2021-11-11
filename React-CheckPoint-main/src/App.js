import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Form, Button, Container, Row, Col, Alert, Navbar, InputGroup, FormControl, header, h2, span} from 'react-bootstrap';
function App() {
  const [show, setShow] = useState(true);
  return (
    
    <div className="App">
      
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><span>LearnFreeWithUS</span></InputGroup.Text>
            </InputGroup.Prepend>            
          </InputGroup>
        </Form>
        <Form className="search">
          <FormControl type="text" placeholder="Search" className=" mr-sm-1" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
   
      <h4>Please fill the Form and choose a Course!!!</h4>
      <Form>
      <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your password:</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
      </Form>

      <>
      <Alert show={show} variant="success">
        <Alert.Heading>Who we are?!</Alert.Heading>
        <p>
          We are the New Generation Group. <br />
          Our courses are free. <br />
          We opt to educate the people as possible as we can to rise a new generation based on Technology !!! <br />
          Together We Can DO IT :) 
          <hr />
          Please fill the form attentively !!!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close !!!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
      
        <div class="cards">
          <div class="frontend">
            <Card class="js" style={{ width: '18rem' }}>
              <Card.Img src="https://img.favpng.com/2/3/2/front-end-web-development-web-design-front-and-back-ends-web-developer-png-favpng-YnKvFBb4PFwpguRLCBGGYAXaK.jpg" />
              <Card.Body>
                <Card.Title>Front-End Developer</Card.Title>
                <Card.Text>
                  Take the Front End course.
                </Card.Text>
                <Button variant="primary">Take the course</Button>
              </Card.Body>
            </Card>

            <Container class="languages"> 
              <Row className="rows">
                <Col className="cols">HTML5</Col> 
              </Row>
              <Row className="rows">
                <Col className="cols">CSS3</Col>
              </Row>
              <Row className="rows">
                <Col className="cols">JavaScript</Col>
              </Row>
              <Row className="rows">
                <Col className="cols">React JS</Col>
              </Row>
              
            </Container>
          </div>

          <div class="backend">
              <Card class="java" style={{ width: '18rem' }}>
                <Card.Img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/115996329/original/a33aab45b5e8afd4c0df75a458dcd0326c5f54a4/be-your-backend-developer.png" />
                <Card.Body>
                  <Card.Title>Back-End Developer</Card.Title>
                  <Card.Text>
                    Take the Back End course.
                  </Card.Text>
                  <Button variant="primary">Take the course</Button>
                </Card.Body>
              </Card>

              <Container class="languages">
                <Row className="rows">
                  <Col className="cols">PHP</Col> 
                </Row>
                <Row className="rows">
                  <Col className="cols">Python</Col>
                </Row>
                <Row className="rows">
                  <Col className="cols">Java</Col>
                </Row>
                <Row className="rows">
                  <Col className="cols">Rust</Col>
                </Row>
                <Row className="rows">
                  <Col className="cols">Ruby</Col>
                </Row>
              </Container>

           </div>

           <div class="fullstack">
              <Card class="cplusplus" style={{ width: '18rem' }}>
                <Card.Img src="https://www.pngfind.com/pngs/m/329-3293400_are-you-the-best-fullstack-developer-full-stack.png" />
                <Card.Body>
                  <Card.Title>Full-Stack Developer</Card.Title>
                  <Card.Text>
                    Take the Full Stack course.
                  </Card.Text>
                  <Button variant="primary">Take the course</Button>
                </Card.Body>
              </Card>

              <Container class="languages">
                <Row className="rows">
                  <Col className="cols">HTML5</Col> 
                </Row>
                <Row className="rows">
                  <Col className="cols">CSS3</Col>
                </Row>
                <Row className="rows">
                  <Col className="cols">JavaScript</Col>
                </Row>
                <Row className="rows">
                  <Col className="cols">React JS</Col>
                </Row>
                <Row className="rows">
                  <Col className="cols">Python</Col>
                </Row>
                <Row className="rows">
                  <Col className="cols">MEAN</Col>
                </Row>
              </Container>
            </div>
      </div>
      <header><h2>#LearnFreeWithUS</h2></header>
      </div>
  );
}

export default App;
