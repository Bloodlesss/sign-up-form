import React from "react";
import styles from "./Main.module.scss";
function Main() {
  return (
    <div className={styles.mainContainer}>
      <h2>Welcome to the React Project</h2>
      <div id="intro">
        <label>
          As a skilled React developer, I've created this platform to
          demonstrate my abilities in creating beautiful and functional web
          applications. The website includes a makeshift signup page to showcase
          my skills in building user authentication and registration features.
          Additionally, I've incorporated visualization libraries such as D3.js
          to showcase my proficiency in integrating complex data visualizations
          into a web application.
        </label>
      </div>
      <h2>Portfolio</h2>
      <div id="content">
        <label>
          On this site, you'll be able to explore my portfolio of React-based
          projects, view my technical skills and experience, and learn more
          about my professional background. I'm constantly exploring new ways to
          enhance my development skills, so stay tuned for updates and new
          projects.
        </label>
      </div>
    </div>
  );
}
export default Main;
