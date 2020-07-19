import React from "react";
import "./style.css";
import LinkedIn from "./LI-Logo.png";
import GithubLogo from "./GitHub-Mark-32px.png";
import GmailLogo from "./iconfinder_gmail_1220367.png";
import CV from "./noun_Resume_10807.png";

function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className = "row">
            <div className = "col-lg-6 offset-lg-3">
              <div className = "row">  
                <div className = "">
                    <a href="https://www.linkedin.com/in/austin-ricketts-99034a110/" id="linkedin">
                      <img src={LinkedIn} alt="linkedin" target="_blank" className="footer-icon" /></a>
                  </div>
                  <br></br>
                  <hr></hr>
                  <div className = "">
                    <a href="mailto:austinricketts4@gmail.com" id="email">
                      <img src={GmailLogo} alt="gmail" target="_blank" className="footer-icon"/></a>
                  </div>
                  <br></br>
                  <hr></hr>
                  <div className = "">
                    <a href="https://github.com/Austin-Ricketts" id="github">
                      <img src={GithubLogo} alt="github" target="_blank" className="footer-icon"/></a>
                  </div>
                  <br></br>
                  <hr></hr>
                  <div className = "">
                    <a href="https://docs.google.com/document/d/1Ibsp4PCMnFLo1cSibFnJ5sqnkVvUrAkOlT0sZjtQcH4/edit?usp=sharing" id="github">
                      <img src={CV} alt="cv" target="_blank" className="footer-icon"/></a>
                  </div>                    
              </div>
            </div>
          </div>
        </div>
      </footer>
      // <footer className="footer">
      //   <div className="container">
      //     <div className = "row">
      //       <div className = "col-lg-6 offset-lg-3">
      //         <div className = "row">  
      //           <div className = "col-lg-3 col-md-12 col-sm-12">
      //               <a href="https://www.linkedin.com/in/austin-ricketts-99034a110/" id="linkedin">
      //                 <img src={LinkedIn} alt="linkedin" target="_blank" className="footer-icon" /></a>
      //             </div>
      //             <div className = "col-lg-3 col-md-12 col-sm-12">
      //               <a href="mailto:austinricketts4@gmail.com" id="email">
      //                 <img src={GmailLogo} alt="gmail" target="_blank" className="footer-icon"/></a>
      //             </div>
      //             <div className = "col-lg-3 col-md-12 col-sm-12">
      //               <a href="https://github.com/Austin-Ricketts" id="github">
      //                 <img src={GithubLogo} alt="github" target="_blank" className="footer-icon"/></a>
      //             </div>
      //             <div className = "col-lg-3 col-md-12 col-sm-12">
      //               <a href="https://docs.google.com/document/d/1Ibsp4PCMnFLo1cSibFnJ5sqnkVvUrAkOlT0sZjtQcH4/edit?usp=sharing" id="github">
      //                 <img src={CV} alt="cv" target="_blank" className="footer-icon"/></a>
      //             </div>                    
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </footer>
    );
  }
  
  export default Footer;