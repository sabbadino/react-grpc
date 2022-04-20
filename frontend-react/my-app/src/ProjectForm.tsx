import React, { SyntheticEvent }  from 'react';
import { Project } from './Project';
import PropTypes from 'prop-types';
import {Callback}  from './ProjectsPage';
class ProjectForm extends React.Component<{ Project : Project, CancelEditProjectRequested: Callback, SaveProjectRequested: Callback},{Project : Project}> {
  constructor(props: any){
    super(props);
    this.state=  {Project: JSON.parse(JSON.stringify(this.props.Project)) }
  }

  static  propTypes = {
    Project: PropTypes.instanceOf(Project)
  };
  render() {
    return (
      <form className="input-group vertical">
      <div>id: {this.state.Project.id}</div>
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" onChange={(event) => {this.handleChange(event)}} value={this.state.Project.name}></input>
      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description"  onChange={(event) => {this.handleChange(event)}} value={this.state.Project.description}/>
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget"  onChange={(event) => {this.handleChange(event)}} value={this.state.Project.budget} />
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" onChange={(event) => {this.handleChange(event)}} checked={this.state.Project.isActive}/>
      <div className="input-group">
        <button onClick={(event) => {this.save(event,this.state.Project)}} className="primary bordered medium">Save</button>
        <span />
        <button onClick={(event) => {this.cancelEdit(event,this.state.Project)}} type="button" className="bordered medium">
          cancel
        </button>
      </div>
    </form>
    );
  }
  cancelEdit = (event: SyntheticEvent, project:Project) => {
    this.props.CancelEditProjectRequested(project)
  }
  save = (event: SyntheticEvent, project:Project) => {
    this.props.SaveProjectRequested(project)
  }
  handleChange = (event:React.FormEvent<any>) => {
    const {type, name, value, checked}: {type:string, name: string; value: any, checked:boolean } = event.currentTarget;
    const updatedValue = type === "checkbox" ? checked : value;
    const project:Project = { ...this.state.Project, [name]: updatedValue }
    this.setState(() => ({ Project : project }))
 };

}

export default ProjectForm;
