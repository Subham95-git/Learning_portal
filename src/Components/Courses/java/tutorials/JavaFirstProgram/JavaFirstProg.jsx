import React from "react";
import { Container, Row } from "react-bootstrap";
import JavaContent from "../../JavaContent";
import style from "./MyStyle.module.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-java";
import Image from "react-bootstrap/Image";

const code = `
class Simple{  
    public static void main(String args[]){  
     System.out.println("Hello Java");  
    }  
}  
`;

export default function JavaFirstProg() {
  return (
    <div>
      <JavaContent />

      <div style={{ marginTop: "40px" }}>
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              First Java Program | Hello World Example
            </div>
            <div className={style.contentBody}>
              In this section, we will learn how to write the simple program of
              Java. We can write a simple hello Java program easily after
              installing the JDK.
              <br />
              <br />
              To create a simple Java program, you need to create a class that
              contains the main method. Let's understand the requirement first.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              The requirement for Java Hello World Example
            </div>
            <div className={style.contentBody}>
              For executing any Java program, the following software or
              application must be properly installed.
              <ul>
                <li>
                  Install the JDK if you don't have installed it,{" "}
                  <a
                    href="https://www.oracle.com/java/technologies/javase-downloads.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    download the JDK and install it
                  </a>
                  .
                </li>
                <li>
                  Set path of the jdk/bin directory.
                  <a
                    href="http://www.javatpoint.com/how-to-set-path-in-java"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    http://www.javatpoint.com/how-to-set-path-in-java
                  </a>
                </li>
                <li>Create the Java program</li>
                <li>Compile and run the Java program</li>
              </ul>
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              Creating Hello World Example
            </div>
            <div className={style.contentBody}>
              Let's create the hello java program:
              <Editor
                value={code}
                // onValueChange={code => this.setState({ code })}
                highlight={(code) => highlight(code, languages.java)}
                padding={10}
                style={{
                  marginTop: "3%",
                  marginBottom: "3%",
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 16,
                  fontWeight: "bold",
                  backgroundColor: "#aafae0",
                  width: "100%",
                  color: "black",
                  opacity: 0.5,
                }}
              />
              Save the above file as Simple.java.
              <br />
              <br />
              <strong>To compile:</strong>
              <br />
              javac Simple.java
              <br />
              <br />
              <strong>To execute:</strong>
              <br />
              java Simple
              <br />
              <br />
              Output:
              <br />
              <div className={style.codingPanel}>Hello Java</div>
              <br />
              Compilation Flow:
              <br />
              <br />
              When we compile Java program using javac tool, the Java compiler
              converts the source code into byte code.
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
            <div className={style.contentHeader}>
              Parameters used in First Java Program
            </div>
            <div className={style.contentBody}>
              Let's see what is the meaning of class, public, static, void,
              main, String[], System.out.println().
              <ul>
                <li>
                  <strong>class</strong> keyword is used to declare a class in
                  Java.
                </li>
                <li>
                  <strong>public</strong> keyword is an access modifier that
                  represents visibility. It means it is visible to all.
                </li>
                <li>
                  <strong>static</strong> is a keyword. If we declare any method
                  as static, it is known as the static method. The core
                  advantage of the static method is that there is no need to
                  create an object to invoke the static method. The main()
                  method is executed by the JVM, so it doesn't require creating
                  an object to invoke the main() method. So, it saves memory.
                </li>
                <li>
                  <strong>void</strong> is the return type of the method. It
                  means it doesn't return any value.
                </li>
                <li>
                  <strong>main</strong> represents the starting point of the
                  program.
                </li>
                <li>
                  <strong>String[] args</strong> or{" "}
                  <strong>String args[]</strong> is used for command line
                  argument. We will discuss it in coming section.
                </li>
                <li>
                <strong>System.out.println()</strong> is used to print statement. Here, System
                  is a class, out is an object of the PrintStream class,
                  println() is a method of the PrintStream class. We will
                  discuss the internal working of System.out.println() statement
                  in the coming section.
                </li>
              </ul>
            </div>
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
}
