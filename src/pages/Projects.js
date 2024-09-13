import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects" description="Learn about Michael D'Angelo's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>The demos will be out soon!</p>
        </div>
      </header>
      {/* <Container>
        <div><iframe width="560" height="315" src="https://www.youtube.com/embed/3qHkcs3kG44?si=jlJKu0fQ9p-jI2CN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>.</iframe>
        </div>
      </Container> */}
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
