import "../Hero.css"; // Import the CSS styles for the Hero component

function Hero() {
  // Inline styling for list items
  const heroListStyle = {
    fontSize: "20px",
    padding: "10px",
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          <span>book</span>
          <span>nest</span> Your Gateway to Literary Adventures{" "}
          <span>, Explore Book Categories</span>
        </h1>
        {/* The following paragraphs are commented out, likely for future use or testing */}
        {/* <p>Discover a Variety of Exciting Book Categories at BookNest</p> */}
        {/* <p>Must-Explore Book Categories</p> */}
        <ul>
          {/* List of book categories with styled icons */}
          <li>
            {" "}
            <span style={heroListStyle}>&#11049;</span>Fiction
          </li>
          <li>
            {" "}
            <span style={heroListStyle}>&#11049;</span>Non-Fiction
          </li>
          <li>
            {" "}
            <span style={heroListStyle}>&#11049;</span>Science Fiction
          </li>
          <li>
            {" "}
            <span style={heroListStyle}>&#11049;</span>Fantasy
          </li>
          <li>
            {" "}
            <span style={heroListStyle}>&#11049;</span>Mystery & Thriller
          </li>
        </ul>
        <p>
          {" "}
          BookNest is the perfect place for anyone who loves to read. Discover a
          wide range of books, from exciting stories to interesting facts, and
          connect with other readers on your literary journey!
        </p>
      </div>
      <div className="hero-img">
        {/* Image representing the Hero section */}
        <img src="/landing cover img2.png" alt="" height="300px" />
      </div>
    </section>
  );
}

export default Hero;
