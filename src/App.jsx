const App = () => {
  return (
    <div>
      <header>
        <img src="/images/logo.svg" alt="" />
        <div>
          <img src="" alt="" />
          Units
        </div>
      </header>
      <main>
        <section className="entry-message">
          How's the sky looking today?
        </section>
        <section className="search-box">
          <input type="text" placeholder="Search for a place..." />
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
        </section>
        <section className="hourly-forecast">
          <article className="header">
            <h2>Hourly forecast</h2>
            <div className="dropdown">Tuesday</div>
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
