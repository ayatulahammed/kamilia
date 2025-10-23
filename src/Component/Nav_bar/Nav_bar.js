import "./Nav_bar.css";
import BgImage from "../../img/Decore.png";
import Logo from "../../img/Logo.png";

export default function Nav_bar() {
  return (
    <>
      <div className="body">
        <header className="container header ">
          <div className="logo">
            <div className="menu_box"></div>
            <img src={Logo} alt="Logo" />
            <div className="background-image">
              <img src={BgImage} alt="Background" />
            </div>
          </div>

          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <a className="main-nav-link" href="#">
                  portfolio
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#">
                  about me
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#">
                  my blog
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#">
                  reviews
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#">
                  contact me
                </a>
              </li>
            </ul>
          </nav>

          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-vimeo"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}
