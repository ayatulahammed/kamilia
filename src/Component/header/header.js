import "./header.css";
import MainImage from "./../../img/Hero Image.png";
import CardImage1 from "./../../img/Work (1).png";
import CardImage2 from "./../../img/Work (2).png";
import CardImage3 from "./../../img/Work.png";
import { Links } from "react-router-dom";

export default function Header() {
  return (
    <section className="hero container">
      {/* Left Side */}
      <div className="left_side">
        <div className="intro">
          <p className="greeting">HELLO THERE, NICE TO MEET YOU ❤️, I AM</p>
          <h1 className="title">kamilia</h1>
          <p className="description">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add. Chicken age had evening believe but proceed
            pretend mrs.
          </p>
          <a href="#" className="btn-outline">
            schedule a call
          </a>
        </div>

        {/* Latest Work Section */}
        <div className="latest-work">
          <h2>Latest Work</h2>
          <div className="work-gallery">
            <div className="work-card">
              <img src={CardImage1} alt="Work 1" />
            </div>
            <div className="work-card">
              <img src={CardImage2} alt="Work 2" />
            </div>
            <div className="work-card">
              <img src={CardImage3} alt="Work 3" />
            </div>
          </div>
          <a href="#" className="view-all">
            view all
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="right_side">
        <div className="hero_image">
          <img src={MainImage} alt="Main Hero" />
        </div>

        <nav className="hero_nav_bar">
          <ul className="hero-nav-list">
            <li>
              <a href="#" className="hero-nav-link">
                <span>my process</span>
              </a>
            </li>
            <li>
              <a href="#" className="hero-nav-link">
                <span>client reviews</span>
              </a>
            </li>
            <li>
              <a href="#" className="hero-nav-link">
                <span>download cv</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="vertical-text-line">
          <p className="rotated-text">design</p>
        </div>
      </div>
    </section>
  );
}
