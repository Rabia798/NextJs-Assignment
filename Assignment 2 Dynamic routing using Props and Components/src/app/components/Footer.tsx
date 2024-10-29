import React from "react";
import Link from "next/link";
import { wrap } from "module";


function Footer() {
  return (
    <footer className="text-center text-red-300 bg-teal-900 text-uppercase" style={{ fontFamily: "Calibri", marginTop: 50, boxShadow: "inherit", display:"block", position:"relative", bottom: 0, width: 2000}}> 
      <div className="Container text-3xl bg-teal-950" style={{ fontFamily: "Calibri", marginTop: 20, marginBottom: 10, width: "100%"}}>
        <h6>
          <Link href="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/aboutus">About us</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/country">Country</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/contactus">Contact us</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/feedback">Feedback</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h6> 
      </div>
      <div className="container text-white" style={{ width: 1170, margin: "auto", marginTop: 20 }}>
        <div className="footer-row" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", fontFamily: "Monospace" }}>
          <div className="footer-col">
            <h5 className="text-2xl">CONTACT</h5>
            <ul>
              <li><a>+92 213 6417029</a></li>
              <li><a>countries_around_the_world@gmail.com</a></li>
              <li><a>Office number 1044, Street Number 38</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 className="text-2xl">COUNTRIES</h5>
            <ul>
              <li><a>Pakistan</a></li>
              <li><a>Russia</a></li>
              <li><a>Sweden</a></li>
              <li><a>China</a></li>
              <li><a>Japan</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 className="text-2xl">SOCIAL HANDLES</h5>
            <ul>
              <li><a>Facebook</a></li>
              <li><a>Twitter</a></li>
              <li><a>Instagram</a></li>
              <li><a>YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
