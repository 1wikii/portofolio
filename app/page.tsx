"use client";
import Script from "next/script";
import "./globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  });

  return (
    <>
      {isClient && (
        <>
          <div className="loader-container">
            <div className="loader"></div>
          </div>

          <div className="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>

          <header>
            <div className="container">
              <div className="logo">
                <a href="#home">dwiki.</a>
              </div>
              <nav>
                <ul className="nav-links">
                  <li>
                    <a href="#home" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
                <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </nav>
            </div>
          </header>

          <section id="home" className="hero">
            <div className="container">
              <div className="hero-content">
                <h1>
                  Hello, I'm <span className="highlight">Dwiki</span>
                </h1>
                <div className="typing-container">
                  <span id="typing-text"></span>
                  <span className="cursor">|</span>
                </div>
                <p className="hero-description">
                  I am fullstack developer with 1+ years of experience.
                  Experienced building high quality solutions website, eager to
                  learn and grow.
                </p>
                <div className="cta-buttons">
                  <a href="#projects" className="btn primary-btn">
                    View My Work
                  </a>
                  <a href="#contact" className="btn secondary-btn">
                    Contact Me
                  </a>
                </div>
                <div className="social-icons">
                  <a href="https://github.com/1wikii" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmad-dwiky/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/dwiky_dixxon/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll-down">
              <a href="#about">
                <div className="mouse">
                  <span></span>
                </div>
                <div className="arrow">
                  <span></span>
                </div>
              </a>
            </div>
          </section>

          <section id="about" className="about">
            <div className="container">
              <div className="section-header">
                <h2>About Me</h2>
                <div className="underline"></div>
              </div>
              <div className="about-content">
                <div className="about-image">
                  <div className="image-wrapper">
                    <img src="/profile.png" alt="Profile Picture" />
                  </div>
                </div>
                <div className="about-text">
                  <h3>Who am I?</h3>
                  <p>
                    I'm a dedicated fullstack developer with a passion for
                    creating innovative solutions. I am a self-taught developer
                    with a passion for learning and growing. I am a quick
                    learner and I am always looking for new challenges.
                  </p>

                  <h3>My Experties</h3>
                  <p>
                    I have proficiency in several programming languages and
                    frameworks, including Laravel, Codeigniter 4, bootstrap,
                    PHP, Javascript, and MySQL. I am also familiar with other
                    tools like docker, git, and github and have experience
                    working within dynamic teams.
                  </p>

                  <div className="personal-info">
                    <div className="info-item">
                      <span className="info-title">Name:</span>
                      <span className="info-value">Ahmad Dwiky</span>
                    </div>
                    <div className="info-item">
                      <span className="info-title">Email:</span>
                      <span className="info-value">
                        <a href="mailto:ahmaddwikyzerrodixxon@gmail.com">
                          ahmaddwikyzerrodixxon@gmail.com
                        </a>
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-title">Location:</span>
                      <span className="info-value">
                        Bandar Lampung, Indonesia
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-title">Availability:</span>
                      <span className="info-value">
                        Available for Freelance
                      </span>
                    </div>
                  </div>

                  <a href="/CV-Ahmad-Dwiky.pdf" className="btn primary-btn">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="skills">
            <div className="container">
              <div className="section-header">
                <h2>Skills Set</h2>
                <div className="underline"></div>
              </div>
              <div className="skills-content">
                <div className="skill-category">
                  <h3>Backend Development</h3>
                  <div className="skills-grid">
                    <div className="skill-item" data-aos="fade-up">
                      <div className="skill-icon">
                        <i className="fa-brands fa-laravel"></i>
                      </div>
                      <h4>Laravel</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[70%]"></div>
                      </div>
                      <span className="progress-value">70%</span>
                    </div>
                    <div
                      className="skill-item"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="skill-icon">
                        <i className="fa-solid fa-fire-flame-curved"></i>
                      </div>
                      <h4>Codeigniter</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[80%]"></div>
                      </div>
                      <span className="progress-value">80%</span>
                    </div>
                    <div
                      className="skill-item"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="skill-icon">
                        <i className="fab fa-php"></i>
                      </div>
                      <h4>PHP</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[85%] "></div>
                      </div>
                      <span className="progress-value">85%</span>
                    </div>
                    <div
                      className="skill-item"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="skill-icon">
                        <i className="fab fa-python"></i>
                      </div>
                      <h4>Python</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[50%]"></div>
                      </div>
                      <span className="progress-value">50%</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="skill-icon">
                        <i className="fas fa-database"></i>
                      </div>
                      <h4>MySQL</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[70%]"></div>
                      </div>
                      <span className="progress-value">70%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Frontend Development</h3>
                  <div className="skills-grid">
                    <div className="skill-item" data-aos="fade-up">
                      <div className="skill-icon">
                        <i className="fab fa-react"></i>
                      </div>
                      <h4>Nextjs, Reactjs</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[70%]"></div>
                      </div>
                      <span className="progress-value">70%</span>
                    </div>
                    <div
                      className="skill-item"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="skill-icon">
                        <i className="fas fa-b"></i>
                      </div>
                      <h4>Bootsrap</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w=[90%]"></div>
                      </div>
                      <span className="progress-value">90%</span>
                    </div>
                    <div
                      className="skill-item"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="skill-icon">
                        <i className="fas fa-wind"></i>
                      </div>
                      <h4>Tailwind CSS</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[60%]"></div>
                      </div>
                      <span className="progress-value">60%</span>
                    </div>
                    <div
                      className="skill-item"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="skill-icon">
                        <i className="fas fa-water"></i>
                      </div>
                      <h4>jquery</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[65%]"></div>
                      </div>
                      <span className="progress-value">65%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Tools</h3>
                  <div className="skills-grid">
                    <div className="skill-item" data-aos="fade-up">
                      <div className="skill-icon">
                        <i className="fas fa-bars-progress"></i>
                      </div>
                      <h4>Dbeaver</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[80%]"></div>
                      </div>
                      <span className="progress-value">80%</span>
                    </div>
                    <div className="skill-item" data-aos="fade-up">
                      <div className="skill-icon">
                        <i className="fas fa-pen"></i>
                      </div>
                      <h4>Postman</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[70%]"></div>
                      </div>
                      <span className="progress-value">70%</span>
                    </div>
                    <div className="skill-item" data-aos="fade-up">
                      <div className="skill-icon">
                        <i className="fab fa-docker"></i>
                      </div>
                      <h4>Docker</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[40%]"></div>
                      </div>
                      <span className="progress-value">40%</span>
                    </div>

                    <div className="skill-item" data-aos="fade-up">
                      <div className="skill-icon">
                        <i className="fab fa-jira"></i>
                      </div>
                      <h4>Jira</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[80%]"></div>
                      </div>
                      <span className="progress-value">80%</span>
                    </div>
                    <div className="skill-item" data-aos="fade-up">
                      <div className="skill-icon">
                        <i className="fab fa-trello"></i>
                      </div>
                      <h4>Trello</h4>
                      <div className="skill-progress">
                        <div className="progress-bar w-[80%]"></div>
                      </div>
                      <span className="progress-value">80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="projects">
            <div className="container">
              <div className="section-header">
                <h2>My Projects</h2>
                <div className="underline"></div>
              </div>
              <div className="projects-grid">
                <div className="project-item" data-category="web">
                  <div className="project-img">
                    <img src="/projects/bank-sampah.png" alt="Project 1" />
                  </div>
                  <div className="project-info">
                    <h3>Bank Sampah</h3>
                    <p>
                      Website to manage waste management for PT. Bank Sampah
                      Sahabat Gajah
                    </p>
                    <div className="project-tech">
                      <span>Laravel (API)</span>
                      <span>Alpine Js</span>
                      <span>Tailwind CSS</span>
                      <span>Postgresql</span>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://github.com/1wikii/BankSampah"
                        target="_blank"
                        className="btn primary-btn"
                      >
                        Live Web
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-item" data-category="ai">
                  <div className="project-img">
                    <img src="/projects/fita.png" alt="Project 2" />
                  </div>
                  <div className="project-info">
                    <h3>Fitacademy.id</h3>
                    <p>
                      Fitacademy.id is A web-based microlearning platform that
                      provides modular digital learning content for UMKM users.
                    </p>
                    <div className="project-tech">
                      <span>Laravel (API)</span>
                      <span>Next Js</span>
                      <span>React Js</span>
                      <span>Midtrans</span>
                      <span>Mysql</span>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://fitacademy.id/"
                        className="btn primary-btn"
                      >
                        Live Web
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-item" data-category="design">
                  <div className="project-img">
                    <img src="/projects/kominfo.png" alt="Project 3" />
                  </div>
                  <div className="project-info">
                    <h3>kominfo.pesawarankab.go.id</h3>
                    <p>
                      Kominfo Kab.Pesawaran Website profile and services for
                      citizen.
                    </p>
                    <div className="project-tech">
                      <span>Codeigniter</span>
                      <span>Bootstrap</span>
                      <span>Jquery</span>
                      <span>Mysql</span>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://kominfo.pesawarankab.go.id/"
                        target="_blank"
                        className="btn primary-btn"
                      >
                        Live Web
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-item" data-category="web">
                  <div className="project-img">
                    <img src="/projects/pajaresuk.png" alt="Project 4" />
                  </div>
                  <div className="project-info">
                    <h3>Pajaresuk Tourism Website</h3>
                    <p>
                      A responsive tourism website showcasing the attractions,
                      culinary offerings, and cultural heritage of Pajaresuk
                      Village in Pringsewu, Lampung, Indonesia.
                    </p>
                    <div className="project-tech">
                      <span>HTML5</span>
                      <span>CSS3</span>
                      <span>JavaScript</span>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://github.com/1wikii/project-desa-pajaresuk"
                        target="_blank"
                        className="btn primary-btn"
                      >
                        Live Web
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-item" data-category="web">
                  <div className="project-img">
                    <img src="/projects/losfilm.png" alt="Project 4" />
                  </div>
                  <div className="project-info">
                    <h3>LostFilm Apps</h3>
                    <p>Simple watchlist film apps with Kotlin</p>
                    <div className="project-tech">
                      <span>Kotlin</span>
                      <span>Reqres API</span>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://github.com/1wikii/Project-Lostfilm"
                        target="_blank"
                        className="btn primary-btn"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="container">
              <div className="section-header">
                <h2>Get In Touch</h2>
                <div className="underline"></div>
              </div>
              <div className="contact-content">
                <div className="contact-info">
                  <h3>Let's Talk About Your Project</h3>
                  <p>
                    Feel free to reach out if you're looking for a developer,
                    have a question, or just want to connect.
                  </p>

                  <div className="contact-details">
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="text">
                        <h4>Email</h4>
                        <a href="mailto:ahmaddwikyzerrodixxon@gmail.com">
                          ahmaddwikyzerrodixxon@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="text">
                        <h4>Phone</h4>
                        <a href="https://wa.me/6281286330034">
                          +62 812 8633 0034
                        </a>
                      </div>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="text">
                        <h4>Location</h4>
                        <p>Bandar Lampung,indonesia</p>
                      </div>
                    </div>
                  </div>

                  <div className="social-links">
                    <a href="https://github.com/1wikii" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ahmad-dwiky/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/dwiky_dixxon/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer>
            <div className="container">
              <div className="footer-content">
                <div className="footer-logo">
                  <a href="#home">dwiki.</a>
                </div>
                <div className="footer-nav">
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#projects">Projects</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-social">
                  <a href="https://github.com/1wikii" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmad-dwiky/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/dwiky_dixxon/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="footer-bottom">
                <p>
                  &copy; <span id="current-year"></span> dwiki. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </footer>

          <a href="#home" className="back-to-top">
            <i className="fas fa-arrow-up"></i>
          </a>
          {/* Add these at the end of your component */}
          <Script
            src="https://unpkg.com/scrollreveal"
            strategy="afterInteractive"
          />
          <Script src="/script.js" strategy="afterInteractive" />
        </>
      )}
    </>
  );
}
