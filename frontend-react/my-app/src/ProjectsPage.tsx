import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectsItem from './ProjectsItem';


class ProjectsPage extends React.Component<{},{}> {
 
  render() {
    const projectItems =MOCK_PROJECTS.map((project) => (
      <ProjectsItem key={project.id} Project={project} />
    ));
    return (
      <div>
         <h1>Projects</h1>
        <div>
        {projectItems}
        </div>
      </div>
   
    );
  }
}

export default ProjectsPage;
