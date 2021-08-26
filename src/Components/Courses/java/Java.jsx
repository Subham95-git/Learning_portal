import React, { useState } from "react";
import "../java/style.css";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { Accordion, Navbar,Nav } from "react-bootstrap";
import content from "./content.json";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import whatisjava from './tutorials/Whatisjava/Whatisjava';

const Java = () => {

  //useEffect(() => setSubContent(""))

  const [visibleLeft, setVisibleLeft] = useState(false);
  const [buttonimage, setButtonImage] = useState('pi pi-arrow-right')
  const [subContent, setSubContent] = useState('What is java')
  return (
    <div>
      {/* <div className="card"> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{boxShadow:"5px 10px 5px grey"}}>
        {/* Sidebar is taken from prime-react */}
        <Sidebar
          visible={visibleLeft}
          onHide={() => {setVisibleLeft(false)
                         setButtonImage('pi pi-arrow-right')  }}
          style={{ position: "fixed" }}
        >
          <h3>Contents</h3>
          <Accordion defaultActiveKey="0">
            {content.contents.map((element, index) => {
              return (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{element.name}</Accordion.Header>
                  <Accordion.Body>
                    {element.subcontent.map((ele) => {
                      return (
                        <>
                          <Link
                            to={ele.link}
                            style={{ paddingLeft: 13, textDecoration: "none" }}
                            overlay='light-red'
                            onClick={()=> setSubContent(ele.name)}
                          >
                            {ele.name}
                          </Link>
                          <br />
                        </>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Sidebar>
        <Button
          icon={buttonimage}
          onClick={() => {setVisibleLeft(true)
                        setButtonImage('pi pi-arrow-left')}}
          className="p-mr-2"
        />
        <Nav className="me-auto"></Nav>
        <Nav className="me-auto">
        <Navbar.Brand style={{fontWeight:"bold"}}>Java Tutorial - {subContent}</Navbar.Brand>
        </Nav>
      </Navbar>

        <Switch>
        <Route exact path="/java/java-what" component={whatisjava}/>
        <Route exact path="/java" render={()=>(<Redirect to="/java/java-what"/>)}/>
        </Switch>
    </div>
  );
};

export default Java;
