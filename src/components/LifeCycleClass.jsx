import { Component } from 'react';

class LifeCycleClass extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null; // No changes to state
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(() => {
      console.log('Interval running...');
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true; // Always re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null; // No need for snapshot
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render');
    return (
      <div style={{ width: '100%', backgroundColor: 'red', height: '100%' }}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifeCycleClass;
