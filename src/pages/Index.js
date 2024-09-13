import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main description="bruce Wang's personal website. MSCS at Stony Brook University ">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome!</Link>
          </h2>
          {/* <p>A beautiful react application written with modern Javascript.</p> */}
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about" style={{ fontWeight: 'bold' }}>about me</Link>, or you can check out my{' '}
        <Link to="/resume" style={{ fontWeight: 'bold' }}>resume</Link>, <Link to="/projects" style={{ fontWeight: 'bold' }}>projects</Link>,
        or <Link to="/contact" style={{ fontWeight: 'bold' }}>contact</Link> me.
      </p>
      <div><div><script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=fBciA_Wev5IylN3Mp-0QwCdXFDDKxrlullfPDTYVCDg&cl=ffffff&w=a">.</script></div></div>
      {/* <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/mldangelo/personal-site">here</a>.
      </p> */}
    </article>
  </Main>
);

export default Index;
