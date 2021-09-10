import React from "react";
import styles from "./MyStyle.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
//import whatisjava from './tutorials/Whatisjava/Whatisjava';

export default function Java2() {
  return (
    <div>
      <div className={styles.outerDiv}>
        <div className={styles.centered}>
          {/* <div className={styles.textblock}> */}
          <h1>Welcome to our JAVA Course</h1>
          <p>
            This course is for both, begginers and professionals. Here we will
            get indepth knowledge of JAVA. While going through the course, we
            will see lots of examples. Those will help us to understand the
            concept better.
          </p>
          {/* </div> */}
        </div>
        <div className={styles.bottomLeft}>
        <Link
              to={"/java/java-what"}
              style={{
                paddingLeft: 11,
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
          <Button variant="warning" style={{boxShadow: "5px 5px 5px green"}}>
            
              Start Learning
            
          </Button></Link>
        </div>
      </div>

      {/* <Switch>
                
                <Route exact path="/java" render={()=>(<Redirect to="/java"/>)}/>
            </Switch> */}
    </div>
  );
}
