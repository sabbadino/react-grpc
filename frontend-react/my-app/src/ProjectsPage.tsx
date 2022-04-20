import React , { SyntheticEvent } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import ProjectItem from './ProjectItem';

export type Callback = (Project :Project) => void

class ProjectsPage extends React.Component<{}, Project[]> {
  state: Project[] = MOCK_PROJECTS;
  render() {
    const projectItems =this.state.map((project) => (
      <ProjectItem key={project.id} Project={project} Callback={this.handleSelectedByChild} />
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
  handleSelectedByChild:Callback = (project:Project) => {
    alert(project.name)
   }
}

export default ProjectsPage;
