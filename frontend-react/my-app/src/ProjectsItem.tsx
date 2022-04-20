import React from 'react';
import { Project } from './Project';

type ProjectItemProps = {
  // using `interface` is also ok
  Project: Project ;
};
class ProjectsItem extends React.Component<ProjectItemProps,{}> {
  render() {
    return (
      <div>
           id: {this.props.Project.id} <br/>
           name: {this.props.Project.name}
         </div>
    );
  }
}

export default ProjectsItem;
