import React from "react";
import { Container, Row } from "react-bootstrap";
import JavaContent from "../../JavaContent";
import style from "./MyStyle.module.css";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

const code = `set path=C:\\Program Files\\Java\\jdk1.6.0_23\\bin`;

export default function JavaPath() {
  return (
    <div>
      <JavaContent />

      <div style={{ marginTop: "40px" }}>
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>How to set path in Java?</div>
            <div className={style.contentBody}>
              The path is required to be set for using tools such as javac,
              java, etc.
              <br />
              <br />
              If you are saving the Java source file inside the JDK/bin
              directory, the path is not required to be set because all the
              tools will be available in the current directory.
              <br />
              <br />
              However, if you have your Java file outside the JDK/bin folder, it
              is necessary to set the path of JDK.
              <br />
              <br />
              There are two ways to set the path in Java:
              <br />
              <br />
              <ul>
                <li>Temporary</li>
                <li>Permanent</li>
              </ul>
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              How to set the Temporary Path of JDK in Windows
            </div>
            <div className={style.contentBody}>
              To set the temporary path of JDK, you need to follow the following
              steps:
              <br />
              <br />
              <ul>
                <li>Open the command prompt</li>
                <li>Copy the path of the JDK/bin directory</li>
                <li>Write in command prompt: set path=copied_path</li>
              </ul>
              <br />
              For Example:
              <br />
              <div className={style.codingPanel}>{code}</div>
              <br />
              Let's see it in the figure given below:
              <br />
              <br />
              <Image
                src="http://www.atnyla.com/library/images-tutorials/temporarypath.jpg"
                fluid
              />
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              How to set Permanent Path of JDK in Windows
            </div>
            <div className={style.contentBody}>
              For setting the permanent path of JDK, you need to follow these
              steps:
              <br />
              <br />
              Go to{" "}
              <strong>
                MyComputer properties -- advanced tab -- environment variables
                -- new tab of user variable -- write path in variable name --
                write path of bin folder in variable value -- ok -- ok -- ok
              </strong>
              <br />
              <br />
              For Example:
              <br />
              <ol>
                <li>
                  Go to MyComputer properties
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/path1.JPG"
                    fluid
                  />
                  <br />
                  <br />
                </li>
                <li>
                  Click on the advanced tab
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/path2.JPG"
                    fluid
                  />
                  <br />
                  <br />
                </li>
                <li>
                  Click on environment variables
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/path3.JPG"
                    fluid
                  />
                  <br />
                  <br />
                </li>
                <li>
                  Click on the new tab of user variables
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/path4.JPG"
                    fluid
                  />
                  <br />
                  <br />
                </li>
                <li>
                  Write the path in the variable name
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/path5.JPG"
                    fluid
                  />
                  <br />
                  <br />
                </li>
                <li>
                  Copy the path of bin folder
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/path6.JPG"
                    fluid
                  />
                  <br />
                  <br />
                </li>
                <li>
                  Paste path of bin folder in the variable value
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/path7.JPG"
                    fluid
                  />
                  <br />
                  <br />
                </li>

                <li>
                  Click on ok button
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/path8.JPG"
                    fluid
                  />
                  <br />
                  <br />
                </li>
              </ol>
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              How to Set CLASSPATH in Java
            </div>
            <div className={style.contentBody}>
              <strong>CLASSPATH:</strong> CLASSPATH is an environment variable
              which is used by Application ClassLoader to locate and load the
              .class files. The CLASSPATH defines the path, to find third-party
              and user-defined classes that are not extensions or part of Java
              platform. Include all the directories which contain .class files
              and JAR files when setting the CLASSPATH.
              <br />
              You need to set the CLASSPATH if:
              <br />
              <ul>
                <li>
                  You need to load a class that is not present in the current
                  directory or any sub-directories.
                </li>
                <li>
                  You need to load a class that is not in a location specified
                  by the extensions mechanism.
                </li>
              </ul>
              <br />
              The CLASSPATH depends on what you are setting the CLASSPATH. The
              CLASSPATH has a directory name or file name at the end. The
              following points describe what should be the end of the CLASSPATH.
              <br />
              <br />
              <ul>
                <li>
                  If a JAR or zip, the file contains class files, the CLASSPATH
                  end with the name of the zip or JAR file.
                </li>
                <li>
                  If class files placed in an unnamed package, the CLASSPATH
                  ends with the directory that contains the class files.
                </li>
                <li>
                  If class files placed in a named package, the CLASSPATH ends
                  with the directory that contains the root package in the full
                  package name, that is the first package in the full package
                  name.
                </li>
              </ul>
              <br />
              The default value of CLASSPATH is a dot (.). It means the only
              current directory searched. The default value of CLASSPATH
              overrides when you set the CLASSPATH variable or using the
              -classpath command (for short -cp). Put a dot (.) in the new
              setting if you want to include the current directory in the search
              path.
              <br />
              <br />
              If CLASSPATH finds a class file which is present in the current
              directory, then it will load the class and use it, irrespective of
              the same name class presents in another directory which is also
              included in the CLASSPATH.
              <br />
              <br />
              If you want to set multiple classpaths, then you need to separate
              each CLASSPATH by a semicolon (;).
              <br />
              <br />
              The third-party applications (MySQL and Oracle) that use the JVM
              can modify the CLASSPATH environment variable to include the
              libraries they use. The classes can be stored in directories or
              archives files. The classes of the Java platform are stored in
              rt.jar.
              <br />
              <br />
              There are two ways to ways to set CLASSPATH: through Command
              Prompt or by setting Environment Variable.
              <br />
              <br />
              Let's see how to set CLASSPATH of MySQL database:
              <ol>
                <li>
                  Click on the Windows button and choose Control Panel. Select
                  System.
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/core/how-to-set-classpath-in-java-step1.png"
                    fluid
                  />
                  <br />
                  <br />
                </li>
                <li>
                  Click on Advanced System Settings.
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/core/how-to-set-classpath-in-java-step2.png"
                    fluid
                  />
                  <br />
                  <br />
                </li>
                <li>
                  A dialog box will open. Click on Environment Variables.
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/core/how-to-set-classpath-in-java-step3.png"
                    fluid
                  />
                  <br />
                  <br />
                </li>
                <li>
                  If the CLASSPATH already exists in System Variables, click on
                  the Edit button then put a semicolon (;) at the end. Paste the
                  Path of MySQL-Connector Java.jar file.
                  <br />
                  <br />
                  If the CLASSPATH doesn't exist in System Variables, then click
                  on the New button and type Variable name as CLASSPATH and
                  Variable value as C:\Program Files\Java\jre1.8\MySQL-Connector
                  Java.jar;.;
                  <br />
                  <br />
                  Remember: Put ;.; at the end of the CLASSPATH.
                  <br />
                  <br />
                  <Image
                    src="https://static.javatpoint.com/images/core/how-to-set-classpath-in-java-step4.png"
                    fluid
                  />
                  <br />
                  <br />
                </li>
              </ol>
            </div>
          </Row>
        </Container>
        <br />
        <Container className={style.centered}>
          <Row>
            <div className={style.contentHeader}>
              Difference between PATH and CLASSPATH
            </div>
            <div className={style.contentBody}>
                <br/>
              <Table striped bordered hover style={{backgroundColor:"white"}}>
                <thead>
                  <tr>
                    <th>PATH</th>
                    <th>CLASSPATH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PATH is an environment variable.</td>
                    <td>CLASSPATH is also an environment variable.</td>
                  </tr>
                  <tr>
                    <td>
                      It is used by the operating system to find the executable
                      files (.exe).
                    </td>
                    <td>
                      It is used by Application ClassLoader to locate the .class
                      file.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      You are required to include the directory which contains
                      .exe files.
                    </td>
                    <td>
                      You are required to include all the directories which
                      contain .class and JAR files.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      PATH environment variable once set, cannot be overridden.
                    </td>
                    <td>
                      The CLASSPATH environment variable can be overridden by
                      using the command line option -cp or -CLASSPATH to both
                      javac and java command.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
}
