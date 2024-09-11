import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/Bruce.jpg`} alt="" />
      </Link>
      <header>
        <h2>Bruce(Chenyu) Wang</h2>
        <p>
          <a href="mailto:brucew3077@gmail.com">brucew3077@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Bruce. I am currently pursuing a Master&apos;s degree in
        Computer Science at{' '}
        <a href="https://www.stonybrook.edu/">Stony Brook University</a>. I
        graduated from{' '}
        <a href="https://www.sustech.edu.cn/en/">
          Southern University of Science and Technology
        </a>{' '}
        with a Bachelor of Engineering in{' '}
        <a href="https://cse.sustech.edu.cn/en/">
          Compute Science and Engineering
        </a> in 2023. <br /> I&apos;m passionate about building reliable and scalable
        softwares, and buildings applications that bring inspiration to people.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Bruce Wang <Link to="/">todo: add url</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
