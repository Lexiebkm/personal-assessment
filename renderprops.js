import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="./../media/person.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => (
          <Component {...this.props} mouse={mouse} />
        )}/>
      );
    }
  }
}

const HocMouse = withMouse(Cat)

export default class MouseTracker extends React.Component {
  /*
  constructor(props) {
    super(props);    
  }
  */

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        {/*
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
        */}

        <HocMouse />
      </div>
    );
  }
}