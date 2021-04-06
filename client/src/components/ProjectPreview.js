import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreview = ({ project, img }) => (
      <div className="projectPreview">
            <Link className="projectText noUHover" to={`/project/${project.name}`}>
            <img className="previewImg" src={require(`../images/project-snapshots/${img}.png`)} alt="Project Preview" />
            <h3>{project.title}</h3>
            {project.description}
            <br /><br />
            <button>Learn more</button>
            </Link>
      </div>
);

export default ProjectPreview;