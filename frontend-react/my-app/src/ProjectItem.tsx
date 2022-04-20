import React, { SyntheticEvent }  from 'react';
import { Project } from './Project';
import ProjectForm  from './ProjectForm';
import {Callback}  from './ProjectsPage';

import PropTypes from 'prop-types';

class ProjectItem extends React.Component<{ Project : Project , Callback : Callback},{}> {
  static  propTypes = {
    Project: PropTypes.instanceOf(Project)
  };
  render() {
    return (
      <div>
           id: {this.props.Project.id} <br/>
           name: {this.props.Project.name}
           <br/>
           <button onClick={(event) => {this.handleClick(event,this.props.Project)}}>click</button>
           <ProjectForm Project=  {new Project()} />
         </div>
    );
  }
  handleClick = (event: SyntheticEvent, project:Project) => {
   this.props.Callback(project);
  }
}

export default ProjectItem;
