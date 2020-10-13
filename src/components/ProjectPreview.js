import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreview = ({ project, img }) => (
      <div class="projectPreview">
            <Link className="projectText noUHover" to={`/project/${project.name}`}>
            <img class="previewImg" src={img} alt="Project Preview" />
            <h3>{project.title}</h3>
            {project.description}
            <br /><br />
            <button>Learn more</button>
            </Link>
      </div>
);

export default ProjectPreview;