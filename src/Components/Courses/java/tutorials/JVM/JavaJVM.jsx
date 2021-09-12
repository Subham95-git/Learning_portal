import React from "react";
import { Container, Row } from "react-bootstrap";
import JavaContent from "../../JavaContent";
import style from "./MyStyle.module.css";
import Image from "react-bootstrap/Image";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-java";

const code = `//Let's see an example to print the classloader name  
public class ClassLoaderExample  
{  
    public static void main(String[] args)  
    {  
        // Let's print the classloader name of current class.   
        //Application/System classloader will load this class  
        Class c=ClassLoaderExample.class;  
        System.out.println(c.getClassLoader());  
        //If we print the classloader name of String, it will print null because it is an  
        //in-built class which is found in rt.jar, so it is loaded by Bootstrap classloader  
        System.out.println(String.class.getClassLoader());  
    }  
}   `;

export default function JavaJVM() {
  return (
    <div>
      <JavaContent />

      <div style={{ marginTop: "40px" }}>
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              JVM (Java Virtual Machine) Architecture
            </div>
            <div className={style.contentBody}>
              JVM (Java Virtual Machine) is an abstract machine. It is a
              specification that provides runtime environment in which java
              bytecode can be executed.
              <br />
              <br />
              JVMs are available for many hardware and software platforms (i.e.
              JVM is platform dependent).
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>What is JVM</div>
            <div className={style.contentBody}>
              <ol>
                <li>
                  <strong>A specification</strong> where working of Java Virtual
                  Machine is specified. But implementation provider is
                  independent to choose the algorithm. Its implementation has
                  been provided by Oracle and other companies.
                </li>
                <li>
                  <strong>An implementation</strong> Its implementation is known
                  as JRE (Java Runtime Environment).
                </li>
                <li>
                  <strong>Runtime Instance</strong> Whenever you write java
                  command on the command prompt to run the java class, an
                  instance of JVM is created.
                </li>
              </ol>
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>What it does</div>
            <div className={style.contentBody}>
              The JVM performs following operation:
              <br />
              <ul>
                <li>Loads code</li>
                <li>Verifies code</li>
                <li>Executes code</li>
                <li>Provides runtime environment</li>
              </ul>
              <br />
              JVM provides definitions for the:
              <br />
              <ul>
                <li>Memory area</li>
                <li>Class file format</li>
                <li>Register set</li>
                <li>Garbage-collected heap</li>
                <li>Fatal error reporting</li>
              </ul>
              etc.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>JVM Architecture</div>
            <div className={style.contentBody}>
              Let's understand the internal architecture of JVM. It contains
              classloader, memory area, execution engine etc.
              <br />
              <br />
              <Image
                src="https://static.javatpoint.com/images/jvm-architecture.png"
                fluid
                style={{ backgroundColor: "white" }}
              />
              <br />
              <br />
            </div>
          </Row>
          <Row>
            <hr className={style.rounded}></hr>
            <div className={style.contentHeader}>1) Classloader</div>
            <div className={style.contentBody}>
              Classloader is a subsystem of JVM which is used to load class
              files. Whenever we run the java program, it is loaded first by the
              classloader. There are three built-in classloaders in Java.
              <br />
              <br />
              <ol>
                <li>
                  <strong>Bootstrap ClassLoader:</strong> This is the first
                  classloader which is the super class of Extension classloader.
                  It loads the rt.jar file which contains all class files of
                  Java Standard Edition like java.lang package classes, java.net
                  package classes, java.util package classes, java.io package
                  classes, java.sql package classes etc.
                </li>
                <li>
                  <strong>Extension ClassLoader:</strong> This is the child
                  classloader of Bootstrap and parent classloader of System
                  classloader. It loades the jar files located inside
                  $JAVA_HOME/jre/lib/ext directory.
                </li>
                <li>
                  <strong>System/Application ClassLoader:</strong> This is the
                  child classloader of Extension classloader. It loads the
                  classfiles from classpath. By default, classpath is set to
                  current directory. You can change the classpath using "-cp" or
                  "-classpath" switch. It is also known as Application
                  classloader.
                </li>
              </ol>
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
              Output:
              <br />
              <div className={style.codingPanel}>
                sun.misc.Launcher$AppClassLoader@4e0e2f2a
                <br />
                null
              </div>
              <br />
              These are the internal classloaders provided by Java. If you want
              to create your own classloader, you need to extend the ClassLoader
              class.
              <br />
              <br />
            </div>
          </Row>
          <Row>
            <div className={style.contentHeader}>2) Class(Method) Area</div>
            <div className={style.contentBody}>
              Class(Method) Area stores per-class structures such as the runtime
              constant pool, field and method data, the code for methods.
            </div>
            <br />
            <br />
            <br />
          </Row>
          <Row>
            <div className={style.contentHeader}>3) Heap</div>
            <div className={style.contentBody}>
              It is the runtime data area in which objects are allocated.
            </div>
            <br />
            <br />
          </Row>
          <Row>
            <div className={style.contentHeader}>4) Stack</div>
            <div className={style.contentBody}>
              Java Stack stores frames. It holds local variables and partial
              results, and plays a part in method invocation and return.
              <br />
              Each thread has a private JVM stack, created at the same time as
              thread.
              <br />A new frame is created each time a method is invoked. A
              frame is destroyed when its method invocation completes.
            </div>
            <br />
            <br />
            <br />
          </Row>
          <Row>
            <div className={style.contentHeader}>
              5) Program Counter Register
            </div>
            <div className={style.contentBody}>
              PC (program counter) register contains the address of the Java
              virtual machine instruction currently being executed.
            </div>
            <br />
            <br />
          </Row>
          <Row>
            <div className={style.contentHeader}>6) Native Method Stack</div>
            <div className={style.contentBody}>
              It contains all the native methods used in the application.
            </div>
            <br />
            <br />
          </Row>
          <Row>
            <div className={style.contentHeader}>7) Execution Engine</div>
            <div className={style.contentBody}>
              It contains:
              <ol>
                <li>
                  <strong>A virtual processor</strong>
                </li>
                <li>
                  <strong>Interpreter:</strong>Read bytecode stream then execute
                  the instructions.
                </li>
                <li>
                  <strong>Just-In-Time(JIT) compiler:</strong>It is used to
                  improve the performance. JIT compiles parts of the byte code
                  that have similar functionality at the same time, and hence
                  reduces the amount of time needed for compilation. Here, the
                  term "compiler" refers to a translator from the instruction
                  set of a Java virtual machine (JVM) to the instruction set of
                  a specific CPU.
                </li>
              </ol>
            </div>
            <br />
            <br />
          </Row>
          <Row>
            <div className={style.contentHeader}>8) Java Native Interface</div>
            <div className={style.contentBody}>
              Java Native Interface (JNI) is a framework which provides an
              interface to communicate with another application written in
              another language like C, C++, Assembly etc. Java uses JNI
              framework to send output to the Console or interact with OS
              libraries.
            </div>
            <br />
            <br />
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
}
