import React, { useState } from "react";
import "../java/style.css";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { Accordion, Navbar,Nav } from "react-bootstrap";
import content from "./content.json";
import { Link } from "react-router-dom";

const Java = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [buttonimage, setButtonImage] = useState('pi pi-arrow-right')
  return (
    <div>
      {/* <div className="card"> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{boxShadow:"5px 10px 5px grey"}}>
        {/* Sidebar is taken from prime-react */}
        <Sidebar
          visible={visibleLeft}
          onHide={() => {setVisibleLeft(false)
                         setButtonImage('pi pi-arrow-right')  }}
          style={{ position: "sticky" }}
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
        <Navbar.Brand style={{fontWeight:"bold"}}>Java Tutorial</Navbar.Brand>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Java;
