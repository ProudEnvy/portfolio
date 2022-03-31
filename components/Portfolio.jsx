import React from 'react'
import Project from './projects/project';

const Portfolio = () => {
  return (
    <div id="portfolio" className="mt-32">
      <div>Portfolio</div>
      <div>
        <Project data={'no data'}/>
      </div>
    </div>
  );
}

export default Portfolio