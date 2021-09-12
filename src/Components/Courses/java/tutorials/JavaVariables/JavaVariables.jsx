import React from "react";
import { Container, Row } from "react-bootstrap";
import JavaContent from "../../JavaContent";
import style from "./MyStyle.module.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-java";
import Image from "react-bootstrap/Image";

export default function JavaVariables() {
  return (
    <div>
      <JavaContent />

      <div style={{ marginTop: "40px" }}>
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Java Variables</div>
            <div className={style.contentBody}>
              A variable is a container which holds the value while the Java
              program is executed. A variable is assigned with a data type.
              <br />
              <br />
              Variable is a name of memory location. There are three types of
              variables in java: local, instance and static.
              <br />
              <br />
              There are two types of data types in Java: primitive and
              non-primitive.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Variable</div>
            <div className={style.contentBody}>
              A variable is the name of a reserved area allocated in memory. In
              other words, it is a name of the memory location. It is a
              combination of "vary + able" which means its value can be changed.
              <br />
              <br />
              <Image
                src="https://static.javatpoint.com/core/images/variable.png"
                fluid
                style={{ backgroundColor: "white" }}
              />
              <br />
              <br />
              <div className={style.codingPanel}>
                int data=50;//Here data is variable
              </div>
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Types of Variables</div>
            <div className={style.contentBody}>
              here are three types of variables in Java:
              <ul>
                <li>local variable</li>
                <li>instance variable</li>
                <li>static variable</li>
              </ul>
              <Image
                src="https://static.javatpoint.com/core/images/types-of-variables1.png"
                fluid
                style={{ backgroundColor: "white" }}
              />
              <br />
              <br />
            </div>
          </Row>
          <Row>
            <hr className={style.rounded}></hr>
            <div className={style.contentHeader}>1) Local Variable</div>
            <div className={style.contentBody}>
              A variable declared inside the body of the method is called local
              variable. You can use this variable only within that method and
              the other methods in the class aren't even aware that the variable
              exists.
              <br />A local variable cannot be defined with{" "}
              <strong>"static"</strong> keyword.
              <br />
              <br />
            </div>
          </Row>
          <Row>
            <hr className={style.rounded}></hr>
            <div className={style.contentHeader}>2) Instance Variable</div>
            <div className={style.contentBody}>
              A variable declared inside the class but outside the body of the
              method, is called an instance variable. It is not declared as
              static.
              <br />
              <br />
              It is called an instance variable because its value is
              instance-specific and is not shared among instances.
              <br />
              <br />
            </div>
          </Row>
          <Row>
            <hr className={style.rounded}></hr>
            <div className={style.contentHeader}>3) Static variable</div>
            <div className={style.contentBody}>
              A variable that is declared as static is called a static variable.
              It cannot be local. You can create a single copy of the static
              variable and share it among all the instances of the class. Memory
              allocation for static variables happens only once when the class
              is loaded in the memory.
              <br />
              <br />
            </div>
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
}
