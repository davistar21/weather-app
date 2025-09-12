const App = () => {
  return (
    <div>
      <header>
        <img src="/images/logo.svg" alt="" />
        <div className="dropdown">
          <button className="dropdown-toggle">
            <img src="/images/icon-units.svg" alt="" />
            Units
            <img src="/images/icon-dropdown.svg" alt="" />
          </button>
          <div className="dropdown-menu inactive">
            <div className="menu-group">
              <div className="menu-item">Switch to Imperial</div>
            </div>
            <div className="menu-group">
              <div className="menu-label">Temperature</div>
              <div className="menu-item selected">Celsius (°C)</div>
              <div className="menu-item">Fahrenheit (°F)</div>
            </div>
            <div className="menu-group">
              <div className="menu-label">Wind Speed</div>
              <div className="menu-item selected">km/h</div>
              <div className="menu-item">mph</div>
            </div>
            <div className="menu-group">
              <div className="menu-label">Precipitation</div>
              <div className="menu-item selected">Millimeters (mm)</div>
              <div className="menu-item">Inches (in)</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="entry-message">
          How's the sky looking today?
        </section>
        <section className="search-box">
          <div className="input-wrapper">
            <img src="/images/icon-search.svg" alt="" />
            <input type="text" placeholder="Search for a place..." />
          </div>
          <button>Search</button>
        </section>
        <section className="weather-card">
          <div>
            <span>Berlin, Germany</span>
            <small>Tuesday, Aug 5, 2025</small>
          </div>
          <h4 className="temp">20&deg;</h4>
        </section>
        <section className="weather-stats">
          <div>
            <span>Feels Like</span>
            <span>18&deg;</span>
          </div>
          <div>
            <span>Humidity</span>
            <span>46%</span>
          </div>
          <div>
            <span>Wind</span>
            <span>14 km/h</span>
          </div>
          <div>
            <span>Precipitation</span>
            <span>0 mm</span>
          </div>
        </section>
        <section className="daily-forecast">
          <blockquote className="header">Daily forecast</blockquote>
          <blockquote>
            <article>
              <h3>Tue</h3>
              <img src="images/icon-rain.webp" alt="" />
              <div>
                <span>20&deg;</span>
                <span>14&deg;</span>
              </div>
            </article>
            <article>
              <h3>Tue</h3>
              <img src="images/icon-rain.webp" alt="" />
              <div>
                <span>20&deg;</span>
                <span>14&deg;</span>
              </div>
            </article>
            <article>
              <h3>Tue</h3>
              <img src="images/icon-rain.webp" alt="" />
              <div>
                <span>20&deg;</span>
                <span>14&deg;</span>
              </div>
            </article>
            <article>
              <h3>Tue</h3>
              <img src="images/icon-rain.webp" alt="" />
              <div>
                <span>20&deg;</span>
                <span>14&deg;</span>
              </div>
            </article>
            <article>
              <h3>Tue</h3>
              <img src="images/icon-rain.webp" alt="" />
              <div>
                <span>20&deg;</span>
                <span>14&deg;</span>
              </div>
            </article>
            <article>
              <h3>Tue</h3>
              <img src="images/icon-rain.webp" alt="" />
              <div>
                <span>20&deg;</span>
                <span>14&deg;</span>
              </div>
            </article>
            <article>
              <h3>Tue</h3>
              <img src="images/icon-rain.webp" alt="" />
              <div>
                <span>20&deg;</span>
                <span>14&deg;</span>
              </div>
            </article>
          </blockquote>
        </section>
        <section className="hourly-forecast">
          <article className="header">
            <h2>Hourly forecast</h2>
            <select className="dropdown">
              <option value="">Monday</option>
              <option value="">Monday</option>
              <option value="">Monday</option>
              <option value="">Monday</option>
              <option value="">Monday</option>
              <option value="">Monday</option>
              <option value="">Monday</option>
            </select>
          </article>
          <article className="main">
            <div>
              <img src="/images/icon-snow.webp" alt="" />
              <p>3 PM</p>
              <span>20&deg;</span>
            </div>
            <div>
              <img src="/images/icon-snow.webp" alt="" />
              <p>3 PM</p>
              <span>20&deg;</span>
            </div>
            <div>
              <img src="/images/icon-snow.webp" alt="" />
              <p>3 PM</p>
              <span>20&deg;</span>
            </div>
            <div>
              <img src="/images/icon-snow.webp" alt="" />
              <p>3 PM</p>
              <span>20&deg;</span>
            </div>
            <div>
              <img src="/images/icon-snow.webp" alt="" />
              <p>3 PM</p>
              <span>20&deg;</span>
            </div>
            <div>
              <img src="/images/icon-snow.webp" alt="" />
              <p>3 PM</p>
              <span>20&deg;</span>
            </div>
            <div>
              <img src="/images/icon-snow.webp" alt="" />
              <p>3 PM</p>
              <span>20&deg;</span>
            </div>
            <div>
              <img src="/images/icon-snow.webp" alt="" />
              <p>3 PM</p>
              <span>20&deg;</span>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default App;
