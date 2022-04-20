import React, { SyntheticEvent }  from 'react';
import { Project } from './Project';

import {Callback}  from './ProjectsPage';

import PropTypes from 'prop-types';

class ProjectItem extends React.Component<{ Project : Project , EditPRojectRequested : Callback },{}> {
  static  propTypes = {
    Project: PropTypes.instanceOf(Project)
  };
  render() {
    return (
      <div>
           id: {this.props.Project.id} <br/>
           name: {this.props.Project.name} <br/>
           description: {this.props.Project.description} <br/>
           budget: {this.props.Project.budget} <br/>
           isActive: {this.props.Project.isActive?"true":"false"}
           <br/>
           <button onClick={(event) => {this.handleClick(event,this.props.Project)}}>Edit</button>
          
         </div>
    );
  }
  handleClick = (event: SyntheticEvent, project:Project) => {
   this.props.EditPRojectRequested(project);
  }
}

export default ProjectItem;
