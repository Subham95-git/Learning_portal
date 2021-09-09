import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import content from "./content.json";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import {  Navbar,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from './MyStyle.module.css';

export default function JavaContent() {
    const [visibleLeft, setVisibleLeft] = useState(false);
  const [buttonimage, setButtonImage] = useState('pi pi-arrow-right')
  //const [subContent, setSubContent] = useState('What is java')
  
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{boxShadow:"5px 10px 5px grey"}}>
        {/* Sidebar is taken from prime-react */}
        <Sidebar

            className={styles.sideBar}
          visible={visibleLeft}
          onHide={() => {setVisibleLeft(false)
                         setButtonImage('pi pi-arrow-right')  }}
          style={{ position: "fixed" }}
        >
          <h3>Contents</h3>
          
          <div>
            {
                content.contents.map((element, index) => {
                    return(
                        <>
                        <div className={styles.contentHeader}>
                            {element.name}
                        </div>
                        <div className={styles.contentBody}>
                        {element.subcontent.map((ele)=>{
                            return(
                                <>
                          <NavLink
                            
                            to={ele.link}
                            style={{ paddingLeft: 13, textDecoration: "none", color: "black" }}
                            activeStyle={{ color: 'red', fontWeight: 'bold' }}
                           
                          >
                            {ele.name}
                          </NavLink>
                          
                          <br />
                        </>
                            )
                        })}
                        </div>
                        </>
                    )
                })
            }
          </div>
        </Sidebar>
        <Button
          icon={buttonimage}
          onClick={() => {setVisibleLeft(true)
                        setButtonImage('pi pi-arrow-left')}}
          className="p-mr-2"
        />
        <Nav className="me-auto"></Nav>
        <Nav className="me-auto">
        <Navbar.Brand style={{fontWeight:"bold"}}>Java Tutorial </Navbar.Brand>
        </Nav>
      </Navbar>
        </div>
    )
}
