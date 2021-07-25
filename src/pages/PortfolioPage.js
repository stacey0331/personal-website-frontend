import React from 'react';
import ProjectPreview from '../components/ProjectPreview';
import Footer from '../components/Footer';
import portfolioProject from '../text/portfolio-project';

const PortfolioPage = () => (
 <>
    <h1>Portfolio</h1>
    <p>Here's a selection of some of my programming projects</p>

    <div class="projectPreviews">
      {portfolioProject.map((project, index) => (
        <ProjectPreview project={portfolioProject[index]} img={project.name} />
      ))}
    </div>
    <Footer />
 </>
);

export default PortfolioPage;