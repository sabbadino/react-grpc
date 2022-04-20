import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import ProjectsPage from './ProjectsPage';
type AppState = {
  // using `interface` is also ok
  startValue: number ;
};

class App extends React.Component <{},AppState>{
  state: AppState = {
    // optional second annotation for better type inference
    startValue: 0
  };
  render() {
    return  <div> 
     {/* <button onClick={this.handleClick}>start Value</button>  */}
       {/* <MyComponent startValue={this.state.startValue} ></MyComponent>
       <p/> */}
          <ProjectsPage></ProjectsPage>
    </div>
  }
  handleClick = () => {
    this.setState(prevState => ({
      startValue: prevState.startValue + 1
    }));
  }
}

export default App;
