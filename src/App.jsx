import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDroplet,
  faSun,
  faLeaf,
  faBottleDroplet,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo-container">
            <div className="logo-circle"></div>
            <div className="logo">Gaija</div>
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#specs">Specs</a>
            <a href="#reviews">Reviews</a>
            <a href="#preorder" className="btn-primary">
              Pre order
            </a>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="badge">The Future of Growth</span>
            <h1 className="hero-title">
              Nature,
              <br />
              <span className="gradient">Autopilot.</span>
            </h1>
            <p className="hero-sub">
              Gaija is the world's leading AI-driven smart planter…
            </p>
            <div className="hero-actions">
              <a href="#preorder" className="btn-accent">
                Get Gaija $199
              </a>
              <a href="#video" className="btn-outline">
                <FontAwesomeIcon icon={faPlay} aria-hidden="true" />
                Watch Demo
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="product">
              <div className="pot" />
              <div className="stem" />
              <div className="leaf leaf-1" />
              <div className="leaf leaf-2" />
              <div className="leaf leaf-3" />
              <div className="ui-card ui-1">
                {" "}
                Moisture: Perfect (45%){" "}
                <FontAwesomeIcon
                  icon={faDroplet}
                  aria-hidden="true"
                  className="water-ui-icon"
                />{" "}
              </div>
              <div className="ui-card ui-2">
                {" "}
                <FontAwesomeIcon
                  icon={faSun}
                  aria-hidden="true"
                  className="sun-ui-icon"
                />{" "}
                Light: Optimal
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">
            Intelligence meets <span>Photosynthesis</span>
          </h2>
          <p className="section-sub"> Gaija handles the hard science so you can enjoy the view.</p>
          <div className="feature-grid">
            <div className="feature-large">
              <h3>Self‑Regulating Ecosystem</h3>
              <p>Gaija's reservoir holds 30 days of water…</p>
              <p>
                Sensors constantly monitor soil pH, humidity, and light,
                dispensing water and nutrients with laboratory precision.
              </p>
            </div>
            <div className="feature-card-1">
              <h3>App Connected</h3>
              <p>Track growth history, adjust light schedules, and receive health alerts directly to your phone.</p>
            </div>
            <div className="feature-card-2">
              <h3>Growth Light</h3>
              <p>Full‑spectrum LEDs mimic the sun…</p>
            </div>
          </div>
        </div>
      </section>
      <section id="specs" className="stats">
        <div className="container stats-grid">
          <div className="stat">
            <span>30<span className="green-text">+</span></span>
            <p>Days Water</p>
          </div>
          <div className="stat">
            <span>24<span className="green-text">/7</span></span>
            <p>Monitoring</p>
          </div>
          <div className="stat">
            <span>100<span className="green-text">%</span></span>
            <p>Recycled Materials</p>
          </div>
          <div className="stat">
            <span>2<span className="green-text">yr</span></span>
            <p>Warranty</p>
          </div>
        </div>
      </section>
      <section id="preorder" className="preorder">
        <div className="container preorder-inner">
          <h2>Bring nature home.</h2>
          <div className="preorder-card">
            <div className="preorder-info">
              <h3>Gaija Starter Kit</h3>
              <ul>
                <li className="perk perk-pot">
                  <span className="perk-text">Smart Pot Unit</span>
                  <span className="perk-icon">
                    <FontAwesomeIcon icon={faLeaf} aria-hidden="true" />
                  </span>
                </li>
                <li className="perk perk-nutrients">
                  <span className="perk-text">6‑Month Nutrient Supply</span>
                  <span className="perk-icon">
                    <FontAwesomeIcon icon={faBottleDroplet} aria-hidden="true" />
                  </span>
                </li>
                <li className="perk perk-app">
                  <span className="perk-text">Premium App Access</span>
                  <span className="perk-icon">
                    <FontAwesomeIcon
                      icon={faMobileScreenButton}
                      aria-hidden="true"
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div className="preorder-price">
              <div className="price-container">
              <span className="old-price">$249</span>
              <span className="new-price">$199</span></div>
              <button className="btn-primary large">Pre‑order Now</button>
            </div>
          </div>
          <p className="preorder-foot">
            *Ships Spring 2026. Free Shipping Worldwide.
          </p>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="logo small">Gaija</div>
          <div className="footer-links">
            <a href="https://www.instagram.com/samed.hajiyev" target="_blank">Instagram</a>
            <a href="https://x.com/SamedHaciyev2" target="_blank">Twitter</a>
            <a href="#">Support</a>
          </div>
          <p>© 2025 Gaija Inc.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
