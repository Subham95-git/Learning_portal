import React from "react";
import { Container, Row } from "react-bootstrap";
import JavaContent from "../../JavaContent";
import style from "./MyStyle.module.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-java";
import Image from "react-bootstrap/Image";

export default function Javainternal() {
  return (
    <div>
      <JavaContent />

      <div style={{ marginTop: "40px" }}>
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              What happens at compile time?
            </div>
            <div className={style.contentBody}>
              At compile time, the Java file is compiled by Java Compiler (It
              does not interact with OS) and converts the Java code into
              bytecode.
              <br />
              <br />
              <Image
                src="https://static.javatpoint.com/images/core/javacodecompile.png"
                fluid
                style={{ backgroundColor: "white" }}
              />
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>What happens at runtime?</div>
            <div className={style.contentBody}>
              At runtime, the following steps are performed:
              <br />
              <br />
              <Image
                src="https://static.javatpoint.com/images/java-runtime-processing.png"
                fluid
              />
              <br />
              <br />
              <strong>Classloader:</strong> It is the subsystem of JVM that is
              used to load class files.
              <br />
              <br />
              <strong>Bytecode Verifier:</strong> Checks the code fragments for
              illegal code that can violate access rights to objects.
              <br />
              <br />
              <strong>Interpreter:</strong> Read bytecode stream then execute
              the instructions.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              Q) Can you save a Java source file by another name than the class
              name?
            </div>
            <div className={style.contentBody}>
              Yes, if the class is not public. It is explained in the figure
              given below:
              <br />
              <br />
              <Image
                src="https://static.javatpoint.com/images/another.JPG"
                fluid
                style={{ backgroundColor: "white" }}
              />
              <br />
              <br />
              <strong>To compile:</strong>
              <br />
              javac Hard.java<br /><br />
              <strong>To execute:</strong>
              <br />
              java Simple
              <br />
              <br />
              Observe that, we have compiled the code with file name but running
              the program with class name. Therefore, we can save a Java program
              other than class name.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
            Q) Can you have multiple classes in a java source file?
            </div>
            <div className={style.contentBody}>
            Yes, like the figure given below illustrates:
              <br />
              <br />
              <Image
                src="https://static.javatpoint.com/images/core/d.png"
                fluid
                style={{ backgroundColor: "white" }}
              />
            </div>
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
}
