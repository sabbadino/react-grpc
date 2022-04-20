import React , { SyntheticEvent } from 'react';
import PropTypes from 'prop-types';

type MyProps = {
  // using `interface` is also ok
  startValue: number ;
};



type MyState = {
  count: number; // like this
};
class MyComponent extends React.Component<MyProps, MyState> {
  static  propTypes = {
    startValue: PropTypes.oneOf([0,1,2,3])
  };
  state: MyState = { 
    // optional second annotation for better type inference
    count: this.props.startValue,
  };
  handleClick = (event: SyntheticEvent) => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  componentDidUpdate(prevProps: MyProps) {
    if (prevProps.startValue !== this.props.startValue) {
      this.setState(() => ({
        count: this.props.startValue
      }));
    }
  }
  render() {
    return (
      <div>
        startValue: {this.props.startValue} state: {this.state.count}
         <button onClick={this.handleClick}>Increment</button> 
      </div>
   
    );
  }
}

export default MyComponent;
