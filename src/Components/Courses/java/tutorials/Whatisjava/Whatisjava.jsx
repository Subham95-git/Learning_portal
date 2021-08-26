import React from "react";
//import content from "./content.json";
import { Accordion } from "react-bootstrap";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-java";

const code = `class Simple{  
    public static void main(String args[]){  
     System.out.println("Hello Java");  
    }  
}  
  `;

export default function Whatisjava() {
  return (
    <div style={{ marginTop: "40px" }}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                color: "#eb4836",
              }}
            >
              Java Tutorial
            </span>
          </Accordion.Header>
          <Accordion.Body style={{ color: "#0361a8" }}>
            Our core Java programming tutorial is designed for students and
            working professionals. Java is an object-oriented, class-based,
            concurrent, secured and general-purpose computer-programming
            language. It is a widely used robust technology.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                color: "#eb4836",
              }}
            >
              What is Java?
            </span>
          </Accordion.Header>
          <Accordion.Body style={{ color: "#0361a8" }}>
            Java is a <strong>programming language</strong> and a{" "}
            <strong>platform</strong>. Java is a high level, robust,
            object-oriented and secure programming language.
            <br /> <br />
            Java was developed by Sun Microsystems (which is now the subsidiary
            of Oracle) in the year 1995. James Gosling is known as the father of
            Java. Before Java, its name was Oak. Since Oak was already a
            registered company, so James Gosling and his team changed the name
            from Oak to Java.
            <br /> <br /> <strong>Platform:</strong> Any hardware or software
            environment in which a program runs, is known as a platform. Since
            Java has a runtime environment (JRE) and API, it is called a
            platform.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                color: "#eb4836",
              }}
            >
              Java Example
            </span>
          </Accordion.Header>
          <Accordion.Body style={{ color: "#0361a8" }}>
            Let's have a quick look at Java programming example. A detailed
            description of Hello Java example is available in next page.
            <br />
            <br />
            <strong>Simple.java</strong>
            <br />
            <div>
              <Editor
                value={code}
                // onValueChange={code => this.setState({ code })}
                highlight={(code) => highlight(code, languages.java)}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                  backgroundColor: "#aafae0",
                  width:"auto",
                  boxShadow: "5px 5px 5px grey"
                }}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                color: "#eb4836",
              }}
            >
              Application
            </span>
          </Accordion.Header>
          <Accordion.Body style={{ color: "#0361a8" }}>
            According to Sun, 3 billion devices run Java. There are many devices
            where Java is currently used. Some of them are as follows:<br/><br/><strong>1. Desktop
            Applications</strong> such as acrobat reader, media player, antivirus, etc.
            <br/><strong>2. Web Applications</strong> such as irctc.co.in, javatpoint.com, etc.
            <br/><strong>3.Enterprise Applications</strong> such as banking applications.
            <br/><strong>4. Mobile</strong>
            <br/><strong>5. Embedded System </strong>
            <br/><strong>6. Smart Card </strong>
            <br/><strong>7. Robotics </strong>
            <br/><strong>8. Games</strong>
            <br/> etc.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
