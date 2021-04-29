import React, { Component } from "react";
import { Button } from "antd";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Button>Default Button</Button>
        <br />
        <Button type="primary">Primary Button</Button>
      </div>
    );
  }
}

export default App;
