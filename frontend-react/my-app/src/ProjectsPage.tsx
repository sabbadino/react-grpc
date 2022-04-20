import React , { SyntheticEvent } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import ProjectItem from './ProjectItem';
import ProjectForm  from './ProjectForm';
export type Callback = (Project :Project) => void
type ProjectsPageState = {
  Projects : Project[], ProjectBeingEdited : Project   |null
};
class ProjectsPage extends React.Component<{}, ProjectsPageState> {
  state: ProjectsPageState = {
    Projects : MOCK_PROJECTS , ProjectBeingEdited : null
  };
  render() {
    const projectItems =this.state.Projects.map((project) => (
      <ProjectItem key={project.id} Project={project} EditPRojectRequested={this.EditPRojectRequested}  />
    ));

        if(this.state.ProjectBeingEdited!=null) {
         return <ProjectForm Project={this.state.ProjectBeingEdited} CancelEditProjectRequested={this.CancelEditProjectRequested} SaveProjectRequested={this.SaveProjectRequested}   />
        }
        else {
          let p:Project;
          if (this.state.Projects.length < 1) {
            p= new Project({id:1});
          }
          else {
            const maxId = this.state.Projects.reduce((oa, u) => Math.max(oa, u.id), 0);
            p = new Project({id:maxId});
          }
          return <div>    <button onClick={() => {this.handleClick(p)}}>New</button> <h1>Projects</h1>            <div>            {projectItems}            </div></div>
        }
     
   
    
  }
  handleClick = (project:Project) => {
    this.setState({ProjectBeingEdited : project})
   }
  EditPRojectRequested:Callback = (project:Project) => {
    this.setState({ProjectBeingEdited : project})
   }
   CancelEditProjectRequested:Callback = (project:Project) => {
    this.setState({ProjectBeingEdited : null})
   }
   SaveProjectRequested:Callback = (project:Project) => {
    this.setState({ProjectBeingEdited : null})
    this.setState(prevState => ({
      Projects: prevState.Projects.map(p=> p.id===project.id ? project : p)
    }));
   }
}

export default ProjectsPage;
