import { Component } from 'react';

class LifeCycleClass extends Component {
  constructor(props) {
    super(props);
    console.log('1. constructor');
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps');
    return null; // No changes to state
  }

  componentDidMount() {
    console.log('4. componentDidMount');
    // this.timer = setInterval(() => {
    //   console.log('Interval running...');
    // }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('6. shouldComponentUpdate');
    return true; // Always re-render
    // return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('7. getSnapshotBeforeUpdate');
    return null; // No need for snapshot
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('8. componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('5. componentWillUnmount');
    clearInterval(this.timer);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('3. render');
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifeCycleClass;
