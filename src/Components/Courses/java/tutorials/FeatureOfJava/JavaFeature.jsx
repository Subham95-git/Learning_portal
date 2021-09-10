import React from "react";
import JavaContent from "../../JavaContent";
import style from "./MyStyle.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function JavaFeature() {
  return (
    <div>
      <JavaContent />

      <div style={{ marginTop: "40px" }}>
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Java Feature</div>
            <div className={style.contentBody}>
              The primary objective of Java programming language creation was to
              make it portable, simple and secure programming language. Apart
              from this, there are also some excellent features which play an
              important role in the popularity of this language. The features of
              Java are also known as Java buzzwords.
              <br />
              <br />A list of the most important features of the Java language
              is given below.
            </div>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <ol>
                <li>Simple</li>
                <li>Object-Oriented</li>
                <li>Portable</li>
                <li>Platform independent</li>
                <li>Secured</li>
                <li>Robust</li>
                <li>Architecture neutral</li>
                <li>Interpreted</li>
                <li>High Performance</li>
                <li>Multithreaded</li>
                <li>Distributed</li>
                <li>Dynamic</li>
              </ol>
            </Col>
            <Col xs={6} md={5}>
              <Image
                src="https://static.javatpoint.com/images/core/java-features.png"
                thumbnail
              />
            </Col>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Simple</div>
            <div className={style.contentBody}>
              Java is very easy to learn, and its syntax is simple, clean and
              easy to understand. According to Sun Microsystem, Java language is
              a simple programming language because:
              <ul>
                <li>
                  Java syntax is based on C++ (so easier for programmers to
                  learn it after C++).
                </li>
                <li>
                  Java has removed many complicated and rarely-used features,
                  for example, explicit pointers, operator overloading, etc.
                </li>
                <li>
                  There is no need to remove unreferenced objects because there
                  is an Automatic Garbage Collection in Java.
                </li>
              </ul>
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Object-oriented</div>
            <div className={style.contentBody}>
              Java is an object-oriented programming language. Everything in
              Java is an object. Object-oriented means we organize our software
              as a combination of different types of objects that incorporate
              both data and behavior.
              <br />
              Object-oriented programming (OOPs) is a methodology that
              simplifies software development and maintenance by providing some
              rules.
              <br />
              Basic concepts of OOPs are:
              <ol>
                <li>Object</li>
                <li>Class</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
                <li>Encapsulation</li>
              </ol>
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Platform Independent</div>
            <div className={style.contentBody}>
              Java is platform independent because it is different from other
              languages like C, C++, etc. which are compiled into platform
              specific machines while Java is a write once, run anywhere
              language. A platform is the hardware or software environment in
              which a program runs.
              <br />
              There are two types of platforms software-based and
              hardware-based. Java provides a software-based platform.
              <br />
              The Java platform differs from most other platforms in the sense
              that it is a software-based platform that runs on top of other
              hardware-based platforms. It has two components:
            </div>
          </Row>
          <Row>
            <Col xs={6} md={5}>
              <br />
              <br />
              <ol>
                <li>Runtime Environment</li>
                <li>API(Application Programming Interface)</li>
              </ol>
            </Col>
            <Col xs={6} md={4}>
              <Image
                src="https://static.javatpoint.com/images/core/platform-independent-java.png"
                thumbnail
              />
            </Col>
          </Row>
          <Row>
            <div className={style.contentBody}>
              Java code can be executed on multiple platforms, for example,
              Windows, Linux, Sun Solaris, Mac/OS, etc. Java code is compiled by
              the compiler and converted into bytecode. This bytecode is a
              platform-independent code because it can be run on multiple
              platforms, i.e., Write Once and Run Anywhere (WORA).
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Secured</div>
            <div className={style.contentBody}>
              Java is best known for its security. With Java, we can develop
              virus-free systems. Java is secured because:
              <ul>
                <li>No explicit pointer</li>
                <li>Java Programs run inside a virtual machine sandbox</li>
                <li>
                  <strong>Classloader:</strong> Classloader in Java is a part of
                  the Java Runtime Environment (JRE) which is used to load Java
                  classes into the Java Virtual Machine dynamically. It adds
                  security by separating the package for the classes of the
                  local file system from those that are imported from network
                  sources.
                </li>
                <li>
                  <strong>Bytecode Verifier:</strong> It checks the code
                  fragments for illegal code that can violate access rights to
                  objects.
                </li>
                <li>
                  <strong>Security Manager:</strong> determines what resources a
                  class can access such as reading and writing to the local
                  disk.
                </li>
              </ul>
            </div>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src="https://static.javatpoint.com/images/core/java-security.png"
                alt="image"
              />
            </Col>
          </Row>
          <Row>
            <div className={style.contentBody}>
              Java language provides these securities by default. Some security
              can also be provided by an application developer explicitly
              through SSL, JAAS, Cryptography, etc.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Robust</div>
            <div className={style.contentBody}>
              The English mining of Robust is strong. Java is robust because:
              <br />
              <ul>
                <li>It uses strong memory management.</li>
                <li>
                  There is a lack of pointers that avoids security problems.
                </li>
                <li>
                  Java provides automatic garbage collection which runs on the
                  Java Virtual Machine to get rid of objects which are not being
                  used by a Java application anymore.
                </li>
                <li>
                  There are exception handling and the type checking mechanism
                  in Java. All these points make Java robust.
                </li>
              </ul>
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Architecture-neutral</div>
            <div className={style.contentBody}>
              Java is architecture neutral because there are no implementation
              dependent features, for example, the size of primitive types is
              fixed.
              <br />
              <br />
              In C programming, int data type occupies 2 bytes of memory for
              32-bit architecture and 4 bytes of memory for 64-bit architecture.
              However, it occupies 4 bytes of memory for both 32 and 64-bit
              architectures in Java.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Portable</div>
            <div className={style.contentBody}>
              Java is portable because it facilitates you to carry the Java
              bytecode to any platform. It doesn't require any implementation.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>High-performance</div>
            <div className={style.contentBody}>
              Java is faster than other traditional interpreted programming
              languages because Java bytecode is "close" to native code. It is
              still a little bit slower than a compiled language (e.g., C++).
              Java is an interpreted language that is why it is slower than
              compiled languages, e.g., C, C++, etc.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Distributed</div>
            <div className={style.contentBody}>
              Java is distributed because it facilitates users to create
              distributed applications in Java. RMI and EJB are used for
              creating distributed applications. This feature of Java makes us
              able to access files by calling the methods from any machine on
              the internet.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Multi-threaded</div>
            <div className={style.contentBody}>
              A thread is like a separate program, executing concurrently. We
              can write Java programs that deal with many tasks at once by
              defining multiple threads. The main advantage of multi-threading
              is that it doesn't occupy memory for each thread. It shares a
              common memory area. Threads are important for multi-media, Web
              applications, etc.
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>Dynamic</div>
            <div className={style.contentBody}>
              Java is a dynamic language. It supports the dynamic loading of
              classes. It means classes are loaded on demand. It also supports
              functions from its native languages, i.e., C and C++.<br/><br/> Java
              supports dynamic compilation and automatic memory management
              (garbage collection).
            </div>
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
}
